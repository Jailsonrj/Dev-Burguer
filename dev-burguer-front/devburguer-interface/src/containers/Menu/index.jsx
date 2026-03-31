import { useState, useEffect } from "react";
import { ContainerMenu, Banner, CategoryMenu, ProductsContainner, CategoryButton } from "./styles";
import { CardProduct } from "../../components/CardProduct";
import { api } from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";

export function Menu() {


    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    


    const navigate = useNavigate();

    const {search} = useLocation();

    const urlSearchParams = new URLSearchParams(search);

    const categoryId = urlSearchParams.get('categoria');



        const [activeProducts, setActiveProducts] = useState(() => {
        if (categoryId) {
            return Number(categoryId);
        } else {
            return 0;
        }
    });

        useEffect(() => {
  const params = new URLSearchParams(search)
  const categoria = params.get("categoria")

  if (categoria) {
    setActiveProducts(Number(categoria))
  } else {
    setActiveProducts(0)
  }
}, [search])

    useEffect(() => {
        async function fetchCategories() {
            const { data } = await api.get('/categories');

            const newCategories = [{
                id: 0,
                name: 'Todos'
            }, ...data]

            setCategories(newCategories);

        }

        async function fetchProducts() {
            const { data } = await api.get('/products');

            const newProducts = data.map(product => product);

            setProducts(newProducts);


        }

        fetchCategories();
        fetchProducts();

    }, []);

    useEffect(() => {
        if (activeProducts === 0) {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category_id === activeProducts);
            setFilteredProducts(filtered);
        }
    }, [activeProducts, products]);


    return (
        <ContainerMenu>
            <Banner>
                <h1> O Melhor <br /> Hamburguer <br /> da cidade
                    <span>Este cardapio está irresistivel</span>
                </h1>

            </Banner>
            <CategoryMenu>
                {categories.map(category => (
                    <CategoryButton 
                    key={category.id} 
                    $isActive={category.id === activeProducts}
                    onClick={() => {
                    navigate(
                        {
                         pathname: `/menu/`,
                          search: `?categoria=${category.id}`
                        },
                        {
                          replace: true     
                        },
                        
                          )

                           setActiveProducts(category.id)
                        }}
                          >{category.name}

                    </CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainner>
                {filteredProducts.map(products => (
                    <CardProduct key={products.id} offer={products} />
                ))}
            </ProductsContainner>

        </ContainerMenu>
    );
}
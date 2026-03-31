
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ImageIcon } from "@phosphor-icons/react"
import { Container, ErroMenssage, Form, Input, InputGroup, Label, LabelUpload, Select, SubmiteButton } from "./styles"
import { api } from "../../../services/api"
import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"


const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório'),
    price: yup.number().positive().required(' O preço é obrigatório').typeError('O preço é obrigatório'),
    category: yup.number().required(' A categoria é obrigatória').typeError('A categoria é obrigatória'),
    offer: yup.boolean(),
  })
export function EditProducts() {

  const [fileName, setFileName] = useState(null);
  const [category, setCategory] = useState([]);

  const navigate = useNavigate();

  const data = useLocation();
  const { state } = useLocation();

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await api.get("/categories");
      setCategory(data);
      
    }
    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,


    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data) => {

    console.log("FORM:", data)
    console.log("CATEGORY:", data.category)


    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", Number(data.price) * 100);
    formData.append("category_id", data.category);
    formData.append("offer", data.offer ? true : false);

    if (data.file?.[0]) {
      formData.append("file", data.file[0]);
    }

    await toast.promise(
      api.put(`/products/${state.id}`, formData,), {
      pending: "Editando produto...",
      success: "Produto editado com sucesso!",
      error: "Erro ao editar produto!",
      
     })
 
      setTimeout(() => {
        navigate("/admin/produtos");
      }, 1000)

  };


  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} defaultValue={state.name} />
          <ErroMenssage>{errors.name?.message}</ErroMenssage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} defaultValue={state.price / 100} />
          <ErroMenssage>{errors.price?.message}</ErroMenssage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <ImageIcon />
            <Input
              type="file"
              {...register("file")}
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setFileName(e.target.files[0].name);
                register("file").onChange(e);
              }}
            />
            {fileName || "Nenhum arquivo selecionado"}
          </LabelUpload>
          <ErroMenssage>{errors.file?.message}</ErroMenssage>
        </InputGroup>

        <InputGroup>
          <Label>Categorias</Label>
          <Controller name="category" control={control} defaultValue={state.category_id} render={({ field }) => (

            <Select

              options={category}
              getOptionLabel={(c) => c.name}
              getOptionValue={(c) => c.id}
              menuPortalTarget={document.body}


              onChange={(selected) =>
                field.onChange(selected ? selected.id : null)
              }


              value={
                category.find((c) => c.id === field.value) || null
              }
            ></Select>
          )} />
          <ErroMenssage>{errors.category?.message}</ErroMenssage>
        </InputGroup>

        <InputGroup>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
            <input type="checkbox" defaultChecked={state.offer} {...register("offer")} />
            <Label>Produto em oferta ? </Label>
          </div>
        </InputGroup>

        <SubmiteButton>Editar produto</SubmiteButton>

      </Form>
    </Container>
  )
}
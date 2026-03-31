
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ImageIcon } from "@phosphor-icons/react"
import { Container, ErroMenssage, Form, Input, InputGroup, Label, LabelUpload, Select, SubmiteButton } from "./styles"
import { api } from "../../../services/api"
import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório'),
    price: yup.number().positive().required(' O preço é obrigatório').typeError('O preço é obrigatório'),
    category: yup.string().required(' A categoria é obrigatória').typeError('A categoria é obrigatória'),
    offer: yup.boolean(),
    file: yup.mixed().test(
      'required',
      'A imagem é obrigatória',
      (value) => value && value.length > 0
    ).test(
      'fileSize',
      'A imagem deve ter no máximo 5MB',
      (value) => value && value && value.length > 0 && value[0].size <= 5000000
    ).test(
      'type',
      'A imagem deve ser PNG ou JPEG',
      (value) => value && value.length > 0 && (value[0].type === 'image/png' || value[0].type === 'image/jpeg')
    )
  })
export function NewProducts() {

  const [fileName, setFileName] = useState(null);
  const [category, setCategory] = useState([]);


  const navigate = useNavigate();

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
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("category_id", data.category);
    formData.append("offer", data.offer ? true : false);
    formData.append("file", data.file[0]);

   await toast.promise(
     api.post("/products", formData,), {
       pending: "Criando produto...",
       success: "Produto criado com sucesso!",
       error: "Erro ao criar produto!",
     })

      
      setTimeout(() => {        navigate("/admin/produtos");
      }, 1000)
      
  };


  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} />
          <ErroMenssage>{errors.name?.message}</ErroMenssage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} />
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
                register("file").onChange(e)
              }}
            />
            {fileName || "Nenhum arquivo selecionado"}
          </LabelUpload>
          <ErroMenssage>{errors.file?.message}</ErroMenssage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Controller name="category" control={control} defaultValue="" render={({ field }) => (

            <Select
     
              options={category}
              getOptionLabel={category => category.name}
              getOptionValue={category => category.id}
              placeholder="categorias"
              menuPortalTarget={document.body}


      onChange={(selected) => field.onChange(selected ? Number(selected.id) : null)}

      value={category.find((c) => c.id === field.value) || null}
            ></Select>
          )} />
          <ErroMenssage>{errors.category?.message}</ErroMenssage>
        </InputGroup>

         <InputGroup>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                    <input type="checkbox"  {...register("offer")} />
                    <Label>Produto em oferta ? </Label>
                  </div>
                </InputGroup>

        <SubmiteButton>Adicionar produto</SubmiteButton>

      </Form>
    </Container>
  )
}
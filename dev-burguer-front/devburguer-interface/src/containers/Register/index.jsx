import globalStyle from "../../styles/GlobalStyles"
import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, RouterLink, Title } from "./styles"
import logo from "../../assets/logo.svg"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "../../components/Button"
import { api } from "../../services/api"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"



export function Register() {

    const navigate = useNavigate();

    const schema = yup.object({
        name: yup.string().required("O nome é obrigatório"),
        email: yup.string().email("Email inválido").required("O email é obrigatório"),
        password: yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required("A senha é obrigatória"),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem corresponder').required('A confirmação de senha é obrigatória'),
    }).required();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


 const onSubmit = async data => {
        try {
            const { status } = await
                api.post("/users", {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    admin: false,
                },
                    {
                        validateStatus: ()=> true,  
                    },
                );

            if (status === 201 || status === 200) {
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
                toast.success("Cadastro realizado com sucesso! Você já pode fazer login.")
            } else if (status === 409 || status === 400) {
                toast.error("Email já cadastrado. Por favor, utilize outro email.")
            } else {
               throw new Error();
            }

        } catch (error) {
            toast.error("Erro ao cadastrar usuário. Tente novamente.");
        }
        
    }



    return (
        <Container>
            <LeftContainer>
                <img src={logo} alt="Logo Dev burguer" />
            </LeftContainer>

            <RightContainer>
                <Title>Crie sua conta</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <InputContainer>
                        <label htmlFor="">Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="">Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="">Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="">Confirmação de senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors.confirmPassword?.message}</p>
                    </InputContainer>
                    <Button type= "submit">Cadastrar</Button>
                </Form>
                <p>Já possui uma conta? <RouterLink to="/login">Clique aqui</RouterLink ></p>
            </RightContainer>
        </Container>
    )
}


import globalStyle from "../../styles/GlobalStyles"
import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles"
import logo from "../../assets/logo.svg"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "../../components/Button"
import { api } from "../../services/api"
import { toast } from "react-toastify";
import { RouterLink } from "./styles"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/UserContext"
import { use } from "react"


export function Login() {

    const navigate = useNavigate();
    const { putUserData } = useUser();

    const schema = yup.object({
        email: yup.string().email("Email inválido").required("O email é obrigatório"),
        password: yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required("A senha é obrigatória"),
    }).required();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = async data => {
        const {data: userData} = await toast.promise(
            api.post("/sessions", {
            email: data.email,
            password: data.password, 
        }),
        {
            pending: 'Verificando seus dados...',
            success: {
                render() {
                  setTimeout(() => {
                    if (userData?.admin) {
                      navigate("/admin/pedidos");
                    } else {
                      navigate("/");
                    }
                   
                  }, 1000);
                  return 'Login realizado com sucesso!'
            }},
            error: 'Erro ao realizar login, verifique seus dados e tente novamente.'
        }

    )

        putUserData(userData);
        
}



    return (
        <Container>
            <LeftContainer>
                <img src={logo} alt="Logo Dev burguer" />
            </LeftContainer>

            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer </span>!<br />
                    Acesse com seu <span>Login e senha</span>.</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button type= "submit">Entrar</Button>
                </Form>
                <p>Não possui uma conta? <RouterLink to="/cadastrar">Clique aqui</RouterLink></p>
            </RightContainer>
        </Container>
    )
}


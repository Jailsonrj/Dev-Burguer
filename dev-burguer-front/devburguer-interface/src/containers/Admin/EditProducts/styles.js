import styled from "styled-components";
import ReactSelect from "react-select";
import { Button } from "../../../components/Button";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const Form = styled.form`
    border-radius: 5px;
    padding: 32px;
    width: 100%;
    max-width: 400px;
    background-color: ${props => props.theme.black};
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`;

export const Label = styled.label`
    color: ${props => props.theme.white};
    font-weight: 600;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
`;

export const Input = styled.input`
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 0 16px;
    height: 52px;
`;

export const LabelUpload = styled.label`
    cursor: pointer;
    border: 1px dashed ${props => props.theme.white};
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: center;
    color: ${props => props.theme.white};
    gap: 10px;

    > svg {
        width: 24px;
        height: 24px;
    }

    input {
        display: none;
    }
`;

export const Select = styled(ReactSelect)`
    width: 100%;
    border-radius: 5px;
    border: none;
    height: 52px;
`;

export const SubmiteButton = styled(Button)`
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 0 16px;
    height: 52px;
    background-color: #9758a6;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
`;

export const ErroMenssage = styled.span`
    color: red;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
`;




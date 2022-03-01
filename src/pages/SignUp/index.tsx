import React, { useCallback, useRef } from "react";
import { FiArrowLeft, FiUser, FiLock, FiMail } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useToast } from "../../hooks/toast";
import getValidationErrors from "../../utils/getValidationErrors";

import logoImg from "../../assets/logo.png";

import Input from "../../components/Inputs";
import Button from "../../components/Button";

import { Container, Content, AnimationContainer, Background } from "./styles";

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (data: SignUpFormData) => {
            try {
                formRef.current?.setErrors({});
                const schema = Yup.object().shape({
                    name: Yup.string().required("Nome é obrigatório"),
                    email: Yup.string()
                        .required("E-mail obrigatório")
                        .email("Digite um e-mail válido"),
                    password: Yup.string().min(6, "no minimo 6 dígitos"),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await api.post("/users", data);

                navigate("/");

                addToast({
                    type: "success",
                    title: "Cadastro realizado",
                    description: "Pode fazer seu login no Gobarber",
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                } else {
                    console.log(err);
                    return;
                }

                addToast({
                    type: "error",
                    title: "erro na autenticação",
                    description: "ocorreu um erro ao logar",
                });
            }
        },
        [addToast, navigate]
    );

    return (
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="GoBarber" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu cadastro</h1>

                        <Input name="name" icon={FiUser} placeholder="Nome" />
                        <Input
                            name="email"
                            icon={FiMail}
                            placeholder="E-mail"
                        />

                        <Input
                            name="password"
                            icon={FiLock}
                            type="Password"
                            placeholder="Senha"
                        />

                        <Button type="submit">Cadastrar</Button>
                    </Form>
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para login
                    </Link>
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default SignUp;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useRef } from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

import getValidationErrors from "../../utils/getValidationErrors";

import logoImg from "../../assets/logo.png";

import Input from "../../components/Inputs";
import Button from "../../components/Button";

import { Container, Content, AnimationContainer, Background } from "./styles";

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();
    const history = useHistory();
    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                formRef.current?.setErrors({});
                const schema = Yup.object().shape({
                    email: Yup.string()
                        .required("E-mail válido obrigatório")
                        .email("Digite um email válido"),
                    password: Yup.string().required("Senha obrigatória"),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await signIn({
                    email: data.email,
                    password: data.password,
                });
                history.push("/dashboard");
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                } else if (err.response.status === 402) {
                    addToast({
                        type: "error",
                        title: "Erro na autenticação",
                        description: "Usuário ou senha inválidos",
                    });
                    return;
                }

                addToast({
                    type: "error",
                    title: "Erro na autenticação",
                    description: "Ocorreu um erro ao logar",
                });
            }
        },
        [signIn, addToast, history]
    );
    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="Maniclub" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu login, amor!</h1>

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

                        <Button type="submit">Entrar</Button>

                        <Link to="/forgot-password">Esqueci minha senha</Link>
                    </Form>
                    <Link to="/signup">
                        <FiLogIn />
                        Criar conta
                    </Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;

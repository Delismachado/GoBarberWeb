/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useRef } from "react";
import { FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";

import { useToast } from "../../hooks/toast";

import getValidationErrors from "../../utils/getValidationErrors";

import logoImg from "../../assets/logo.png";

import Input from "../../components/Inputs";
import Button from "../../components/Button";

import { Container, Content, AnimationContainer, Background } from "./styles";
import api from "../../services/api";

interface ResetPasswordFormData {
    password: string;
    password_confirmation: string;
}

const ResetPassword: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = useCallback(
        async (data: ResetPasswordFormData) => {
            try {
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    password: Yup.string().required("Senha obrigatória"),
                    password_confirmation: Yup.string().oneOf(
                        [Yup.ref("password"), undefined],
                        "Confirmação incorreta"
                    ),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                const { password, password_confirmation } = data;
                const token = location.search.replace("?token", "");

                if (!token) {
                    throw new Error();
                }

                await api.post("/password/reset", {
                    password,
                    password_confirmation,
                    token,
                });

                navigate("/");
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                } else {
                    console.log(err);
                }
                addToast({
                    type: "error",
                    title: "erro ao resetar senha",
                    description:
                        "ocorreu um erro ao resetar a senha tente novamente.",
                });
            }
        },
        [addToast, navigate, location.search]
    );
    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="GoBarber" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Resetar senha</h1>

                        <Input
                            name="password"
                            icon={FiLock}
                            type="Password"
                            placeholder="Nova Senha"
                        />

                        <Input
                            name="password_confirmation"
                            icon={FiLock}
                            type="Password"
                            placeholder="Confirmação da Senha"
                        />

                        <Button type="submit">Alterar senha</Button>
                    </Form>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    );
};

export default ResetPassword;

import React, { useCallback, useRef, ChangeEvent, useMemo } from "react";
import DayPicker, { DayModifiers } from "react-day-picker";
import {
    FiUser,
    FiLock,
    FiMail,
    FiCalendar,
    FiArrowLeft,
} from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { useNavigate, Link, useLocation } from "react-router-dom";
import internal from "events";
import api from "../../services/api";
import { useToast } from "../../hooks/toast";
import getValidationErrors from "../../utils/getValidationErrors";

import Input from "../../components/Inputs";
import Button from "../../components/Button";

import { Container, Content } from "./styles";
import { useAuth } from "../../hooks/auth";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

interface ProfileFormData {
    name: string;
    email: string;
    old_password: string;
    password: string;
    password_confirmation: string;
}

interface NewAppointmentParams {
    date: number;
}

const NewAppointment: React.FC = () => {
    const query = useQuery();
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const navigate = useNavigate();
    const selectedDate = useMemo(() => {
        const appDate = new Date();
        appDate.setTime(parseInt(query.get("date") || new Date().getTime()));
        return appDate;
    }, [query]);

    const disabledDays = useMemo(() => {
        return [];
    }, []);

    const { user, updateUser } = useAuth();
    const handleSubmit = useCallback(
        async (data: ProfileFormData) => {
            console.log(appDate);
            // try {
            //     formRef.current?.setErrors({});
            //
            //     const schema = Yup.object().shape({
            //         name: Yup.string().required("Nome é obrigatório"),
            //         email: Yup.string()
            //             .required("E-mail obrigatório")
            //             .email("Digite um e-mail válido"),
            //         old_password: Yup.string(),
            //         password: Yup.string().when("old_password", {
            //             is: (val) => !!val.length,
            //             then: Yup.string().required("Campo obrigatório"),
            //             otherwise: Yup.string(),
            //         }),
            //         password_confirmation: Yup.string()
            //             .when("old_password", {
            //                 is: (val) => !!val.length,
            //                 then: Yup.string().required("Campo obrigatório"),
            //                 otherwise: Yup.string(),
            //             })
            //             .oneOf(
            //                 [Yup.ref("password"), undefined],
            //                 "confirmação incorreta"
            //             ),
            //     });
            //
            //     await schema.validate(data, {
            //         abortEarly: false,
            //     });
            //
            //     const {
            //         name,
            //         email,
            //         old_password,
            //         password,
            //         password_confirmation,
            //     } = data;
            //
            //     const formData = {
            //         name,
            //         email,
            //         ...(old_password
            //             ? {
            //                   old_password,
            //                   password,
            //                   password_confirmation,
            //               }
            //             : {}),
            //     };
            //
            //     const response = await api.put("/profile", formData);
            //
            //     updateUser(response.data);
            //
            //     navigate("/dashboard");
            //
            //     addToast({
            //         type: "success",
            //         title: "Perfil atualizado!",
            //         description: "Suas infs foram salvas!",
            //     });
            // } catch (err) {
            //     if (err instanceof Yup.ValidationError) {
            //         const errors = getValidationErrors(err);
            //         formRef.current?.setErrors(errors);
            //     } else {
            //         console.log(err);
            //         return;
            //     }
            //
            //     addToast({
            //         type: "error",
            //         title: "erro na atualização",
            //         description: "ocorreu um erro ao atualizar as infs",
            //     });
            // }
        },
        [query]
    );

    return (
        <Container>
            <header>
                <div>
                    <Link to="/dashboard">
                        <FiArrowLeft />
                    </Link>
                </div>
            </header>
            <Content>
                <Form
                    ref={formRef}
                    initialData={{ date: selectedDate }}
                    onSubmit={handleSubmit}
                >
                    <h1>Novo agendamento</h1>
                    <DayPicker
                        weekdaysShort={["D", "S", "T", "Q", "Q", "S", "S"]}
                        fromMonth={new Date()}
                        disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
                        modifiers={{
                            available: { daysOfWeek: [1, 2, 3, 4, 5] },
                        }}
                        selectedDays={selectedDate}
                        months={[
                            "Janeiro",
                            "Fevereiro",
                            "Março",
                            "Abril",
                            "Maio",
                            "Junho",
                            "Julho",
                            "Agosto",
                            "Setembro",
                            "Outubro",
                            "Novembro",
                            "Dezembro",
                        ]}
                    />
                    <Button type="submit">Cadastrar agendamento</Button>
                </Form>
            </Content>
        </Container>
    );
};

export default NewAppointment;

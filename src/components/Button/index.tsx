import React, { ButtonHTMLAttributes } from "react";
import { Conteiner } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Conteiner type="button" {...rest}>
        {children}
    </Conteiner>
);

export default Button;

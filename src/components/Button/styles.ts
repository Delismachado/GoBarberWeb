import styled from "styled-components";
import { shade } from "polished";

export const Conteiner = styled.button`
    background: #DE9EAE;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #401F27;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.0, "#DB8393")};
    }
`;
export const teste = 1;

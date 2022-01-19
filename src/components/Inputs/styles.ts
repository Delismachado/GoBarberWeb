import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #F7E1E2;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #DE9EAE;
    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${(props) =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${(props) =>
        props.isFocused &&
        css`
            color: #DB8393;
            border-color: #DB8393;
        `}

    ${(props) =>
        props.isFilled &&
        css`
            color: #401F27;
        `}


    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #401F27;

        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;

    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;
    }

    & ::before {
        border-color: #c53030 transparent;
    }
`;

import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    > header {
        height: 144px;
        background: #28262e;

        display: flex;
        align-items: center;

        div {
            width: 100%;
            max-width: 1120px;
            margin: 0 auto;

            svg {
                color: #999591;
                width: 24px;
                height: 24px;
            }
        }
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: -176px auto 0;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
        display: flex;
        flex-direction: column;

        h1 {
            margin-bottom: 24px;
            font-size: 20px;
            text-align: left;
        }

        a {
            color: #fff;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, "#f4ed38")};
            }
        }
    }

    > a {
        color: #fff;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }
        &:hover {
            color: ${shade(0.2, "#ff9000")};
        }
    }
`;

import styled from "styled-components";

import { LoadingGlyphImage } from "../LoadingGlyph/LoadingGlyph.styles";

export const Button = styled.button`
    min-width: 145px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

export const InvertedButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

export const SignInButton = styled(Button)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const ButtonLoadingImage = styled(LoadingGlyphImage)`
    width: 30px;
    height: 30px;
`;

import { createGlobalStyle } from "styled-components";

const GlobyleStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    input,textarea {
        outline: none;
    }

    body {
        background-color: aliceblue;
    }

    li{
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`;

export default GlobyleStyle;

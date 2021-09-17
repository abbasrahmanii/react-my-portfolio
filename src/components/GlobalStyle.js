import { createGlobalStyle } from "styled-components";

const GlobyleStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        background-color: aliceblue;
    }
    li{
        list-style: none;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobyleStyle;

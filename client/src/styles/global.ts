import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0 ;
        padding: 0 ;
        box-sizing: border-box;
    }

    ::root {
        --cor1: #A155DB;
        --cor2: #44245C;
        --cor3: #A156DB;
        --cor4: #AB5AE8;
        --cor5: #8F4CC2;
        --cor6: #121212;
        --cor7: #222222;
        --cor8: #1A1A1A;
        --cor9: #2C2C2C;
        --cor10: #111111;
    }

    body {
        background: #000;
        font-size: 14px;
        color: #fff;
        font-family: 'Poppins', sans-serif;
    }
`;

'use client'
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    body{
        display: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: red;
    }

    :root{
        --brand1  :#151517;
        --brand2  :#0A0A0B;
        --brand3  :#623CEA;
        --white   :#fff;
    }


`;


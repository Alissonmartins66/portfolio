import React from "react";
import { Container } from 'react-bootstrap';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans:ital,wght@0,300;0,800;0,900;1,800&family=Roboto:ital,wght@0,100;0,300;0,900;1,300&display=swap');

    body {
        font-family: 'Montserrat', sans-serif;
    }

`

export const Layout = (props) => (
    <>
        <GlobalStyle/>
        <Container>
            {props.children}
        </Container>
    </>    
);

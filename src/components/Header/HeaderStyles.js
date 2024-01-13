import styled from 'styled-components';

import { Navbar, Nav } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`    
    top: 0;
    z-index: 33;
    background-color: transparent;
    .navbar-brand{
        color: white;
        font-size: 25px;
        font-family: 'Noto Sans', sans-serif;
        background-color: transparent;
        font-weight: bold;
        @media (max-width: 768px ) {
            font-size: 20px;
        }
        @media (max-width: 352px ) {
            font-size: 5.5vw;
        }
        @media (max-width: 313px ) {
            //font-size: 1.5vh;
        }
    }

    .tag{
        color: #5143C7;
        background-color: transparent;
    }

    .tag-name{
        background-color: transparent;
    }

    .main-header{ 
        background-color: transparent;
        border-radius: 5px;
        position: absolute;
        top: 50%;
        
    }
    

    .nav-link, .colapse-menu{
        font-family: 'Noto Sans', sans-serif;
        font-weight: bold;
        color: white;
        background-color: transparent;
        &:hover {
            text-decoration: underline 2px #00388E;
        }
    }

    .navbar{
        background-color: transparent;
        color: white;
        border-radius: 5px;
        margin-right: 0.5%;
        
    }
    .navbar-toggler-icon{
        background-color: transparent;
        border-radius: 5px;
        width: 20px;
    }

    .icon-button{
        background-color: transparent;
        color: transparent;
        margin-right: 3%;
        
    }

    .navbar-nav{
        background-color: transparent;
        border-radius: 5px;
        margin-left: auto;
        
    }

    .nav-item{
        @media (max-width: 991px ) {
        text-align: center;
        background-color: rgba(81, 67, 199, 0.1);
        padding: 3px;
        border-radius: 5px;
        margin: 5px;
        }

    @media (max-height: 1280px) {
        width: 6rem;
    }

    @media (max-height: 1024px) {

    }

    @media (max-height: 800px) {
        width: 5rem;
    }

    @media (max-width: 780px) {

    }

    @media (max-height: 568px) {
        width: 6rem;
        font-size: 15px;
    }

    }

    &.rolado {
        .main-header{ 
        width: 35%;
        background-color: rgba(81, 67, 199, 0.2);
        padding: 3px;
        border-radius: 30px;
        position: fixed;
        margin-top: 5px;
        right: 2%;
        top: 0;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        }
        .navbar-nav{
            width: 100%;  
            
        }
        .nav-item{
            background-color: transparent;
            text-align: center;
            padding: 5px;
            margin: 5px;
        }
        .navbar-brand{
            display: none;
        }

    }
`




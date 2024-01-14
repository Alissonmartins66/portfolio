import React from "react";
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import JavaScript from '../images/Javascript.png'
import ReactImg from '../images/React.png'
import BootstrapImg from '../images/Bootstrap.png'
import HtmlImg from '../images/HTML.png'
import PythonImg from '../images/Python.png'
import CssImage from '../images/CSS.png'
import WordpressImg from '../images/wordpress.png'



const MainDivCarousel = styled.div`
    background-color: transparent;
    opacity: 80%;
    width: 90%;
    height: 9vh;
    bottom: 1%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);

    @media (max-height: 1280px) {
        position: fixed;
        bottom: 10%;
    }

    @media (max-height: 1024px) {
        position: fixed;
        bottom: 5%;
    }

    @media (max-height: 800px) {
        position: fixed;
        bottom: 0;
    }

    @media (max-width: 780px) {
        position: fixed;
        bottom: 20%;
        
    }

    @media (max-height: 568px) {
        position: fixed;
        bottom: 10%;
    }

`
const BackgroundDiv1 = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 3px;
    opacity: 5%;
    padding-bottom: 3px;
    border-radius: 30px;
    background-color: #5143C7;
    opacity: 100%;
    flex-shrink: 0;
    overflow: hidden;
    z-index: 1;

    @media (max-width: 780px) {
        height: 12vh;
    }
    
`

const BackgroundDiv2 = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    font-style: normal;
    align-items: center;
    overflow: hidden;
    z-index: 1;

    @media (max-width: 780px) {
        height: 11vh;
    }

`


const SkillsText = styled.h1`
    background-color: transparent;
    color: white;
    font-size: 23px;
    padding-left: 6px;
    font-family: 'Noto Sans', sans-serif;
    display: flex;
    align-items: center;
    font-weight: 400;
    text-align: center;
`
const DivImages = styled.div`
    background-color: transparent;
    justify-content: space-between;
    height: 100%;

    @media (max-height: 1280px) {
        height: 4rem;
    }

    @media (max-height: 1104px) {
        height: 5rem;
        padding-top: 5px;
    }

    @media (max-height: 800px) {
        height: 4rem;
    }
    @media (max-width: 780px) {
        height: 4rem;
    }

`
const Images = styled.img`
    background-color: transparent;
    width: 50px;
    height: 50px;
    padding-left: 10rem;
    padding-right: 10rem;
    padding-top: 6px;
   
    @media (max-height: 1280px) {
        width: 50px;
        height: 50px;
    }

    @media (max-height: 1104px) {
        width: 50px;
        height: 50px;
    }

    @media (max-height: 800px) {
        width: 50px;
        height: 50px;
    }
    @media (max-width: 780px) {
        width: 30px;
        height: 30px;
    }

    @media (max-height: 568px) {
        width: 30px;
        height: 30px;
    }
    @media (max-width: 320px) {
        width: 30px;
        height: 30px;
    }
    
`


const Carousel = ({ children }) => {
    const slickSetting = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 9000,
      autoplaySpeed: 0,
      cssEase: "linear",
      variableWidth: true,
      arrows: false,
      initialSlide: 1,
      style: { backgroundColor: 'transparent' },  
      
    };

    return (
        <MainDivCarousel className="container">
            <BackgroundDiv1 className="col-8">
                <BackgroundDiv2 className="col-4 align-items-center">
                    <SkillsText >SKILLS:</SkillsText>
                    <DivImages className="mb-6">
                        <Slider  {...slickSetting}>
                                <Images className="Images" src={JavaScript} alt="JavaScript" />
                                <Images className="Images" src={ReactImg} alt="React" />
                                <Images className="Images" src={HtmlImg} alt="HTML" />
                                <Images className="Images" src={CssImage} alt="CSS" />
                                <Images className="Images" src={PythonImg} alt="Python" />
                                <Images className="Images" src={BootstrapImg} alt="Bootstrap" />
                                <Images className="Images" src={WordpressImg} alt="Wordpress" />    
                        </Slider>
                    </DivImages>    
                </BackgroundDiv2>
            </BackgroundDiv1>
        </MainDivCarousel>
    )
}


export default Carousel
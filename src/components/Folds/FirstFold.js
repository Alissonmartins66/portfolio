import React from 'react';
import styled from 'styled-components';
import buttonCV from '../images/buttonCV.png';
import Circles from '../images/MaskImage.png';
import Carousel from './Carousel';
import Header from '../Header/Header';
import Back from '../images/background1.png'


const MainDivFold1 = styled.div`
  display: flex;
  margin-top: 15vh;
  background-color: black;
  z-index: 1;
`;

const BackgroundFold1 = styled.div`
  background-image: url(${Back});
  position: absolute;
  opacity: 6%;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;

  @media (max-width: 570px) {
    width: 100vw;
    height: 100vh;
  }
`; 

const DivAbout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    text-align: start;
    padding-right: 10vw;
  
  }
`;

const H2Title = styled.h2`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  font-size: 80px;
  color: white;
  background-color: transparent;
  z-index: 1;
  
  @media (max-width: 992px) {
   font-size: 4.375rem;
  }

  @media (min-height: 896px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 3.4375rem; 
    
  }
  @media (max-width: 550px) {
    font-size: 2.8125rem;
  }
  @media (max-width: 470px) {
    font-size: 1.9125rem;
  }


`;

const Paragraph = styled.p`
  color: white;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 300;
  background-color: transparent;
  font-size: 16px;
  line-height: 1.5;
  padding-top: 2vh;
  padding-bottom: 3vh;
  max-width: 25vw;
  text-justify: distribute-all-lines;
  z-index: 1;


  @media (max-width: 570px) {
    max-width: 80vw;
    overflow-wrap: break-word;
  }
`;


const ButtonCV = styled.button`
  background-color: #5143C7;
  width: 200px;
  height: 35px;
  padding: 2px;
  margin-left: 1%;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  border-color: transparent;
  cursor: pointer;
  
  z-index: 1;
`;

 const CircleImage = styled.img`
    width: 30rem;
    height: auto;
    opacity: 75%;
    z-index: 1;
    background-color: transparent;
    position: relative;
    right: 22%;
    bottom: 30%;

 @media (max-width: 570px) {
   width: 15rem;
 }
`;

const Fold1 = () => {
  return (
    <>
      <MainDivFold1 className="container">
        <BackgroundFold1 />
        <div className="row align-items-start">
          <div className="col-md-8">
          <CircleImage src={Circles} alt="Image Circle"></CircleImage>  
            <DivAbout className="">
                <H2Title>Desenvolvedor</H2Title>
                <H2Title>Front End</H2Title>     
            </DivAbout>
          </div>
            <div className="d-flex mb-0 justify-content-center align-items-end">
              <Carousel></Carousel>
            </div>
        </div>
      </MainDivFold1>
      
      
    </>  

  );
};

export default Fold1;










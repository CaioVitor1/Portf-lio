import styled from "styled-components";
import imagem from "./assets/background_port.jpg";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
export default function Home() {

    return (

        <HomeStyle>
            <Header />
               
            
            <Main>
                <h3> Porfolio</h3>
                <h2> Caio Vitor</h2>
                <h4> Full-Stack developer </h4>
                <button> Saiba mais</button>
            </Main>
            <Footer> 
                <img onClick={() => window.open('https://www.linkedin.com/in/caiovitor33/')} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />         
                <img onClick={() => window.open('https://github.com/CaioVitor1')} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
          
          
           
          
            </Footer>
        </HomeStyle>
    )
}


const HomeStyle = styled.div`

width: 100%;
height: 100vh;
background-image: url(${imagem});
background-color: white;

`

const Main = styled.div`
margin-top: 170px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

border-color: white;
color: white;
h3{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 40px;
    color: #6495ED;
    margin-bottom: 20px;
}
h2{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 40px;
    color: white; 
    margin-bottom: 30px;
}
h4{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 23px;
    color: #FFFFFF;
    margin-bottom: 30px;
}
button{
    border:solid;
    border-radius: 20px;
    border-color: #6495ED;
    opacity:0.4;
    background-color: white;
    width: 140px;
    height: 50px;
    color: black;
    font-size: 20px;
    font-family: 'Lato';
    font-style: normal;
}
button:hover{
    opacity:1.0;
}
`
const Footer = styled.div`
margin-top: 140px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;

img{
    width: 45px;
    height: 45px;
    margin-right: 40px;
}

`
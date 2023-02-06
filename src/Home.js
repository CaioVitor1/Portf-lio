import { useState, useEffect } from "react";
import styled from "styled-components";
import imagem from "./assets/background.png";
import Header from "./Header";

import profile from "../src/assets/profile.jpeg"
import About from "./About";
import { MainProject } from "./MainProjects";

export default function Home() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setText(prevText => prevText + "e eu sou um desenvolvedor Full Stack".charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
  
      return () => clearInterval(interval);
    }, [index]);

    return (
        <>
        <HomeStyle>  
           <Header />
           <Main>
                <img src={profile} alt='' />
                <Infos>
                <h3> Olá, meu nome é</h3><b /> 
                <h2>Caio Vitor</h2> <b />
                <h4> {text}</h4>
                <img onClick={() => window.open('https://www.linkedin.com/in/caiovitor33/')} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />       
           <img onClick={() => window.open('https://github.com/CaioVitor1')} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                </Infos>
           </Main>   
           
        </HomeStyle>
        <About />
        <MainProject />
        </>
    )
}


const HomeStyle = styled.div`
width: 100%;
height: 100vh;
background-image: url(${imagem});
`

const Main = styled.div`
margin-top: 60px;
display: flex;
justify-content: center;
align-items: center;
h3{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 20px;
    color:white;
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
    color: white; 
    font-size: 30px;
}
>img{
    width: 15%;
    height: 20%;
    border-radius: 20px;
    margin-right: 30px;
}
button{
    border:solid;
    border-radius: 20px;
    border-color: #6495ED;
    opacity:0.4;
    background-color: white;
    width: 140px;
    height: 50px;
    color: white;
    font-size: 20px;
    font-family: 'Lato';
    font-style: normal;
}
button:hover{
    opacity:1.0;
}
hr{
    color:blue;
}
`
const Infos = styled.div`
img{
    margin: 20px 5px;
    width: 12%;

}
`
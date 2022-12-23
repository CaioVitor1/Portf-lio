import styled from "styled-components";
import imagem from "./assets/background.png";
import Header from "./Header";
import Footer from "./Footer";
import profile from "../src/assets/profile.jpeg"
import literaBooks from "../src/assets/fotoLiteraBooks.png"

export default function Home() {

    return (
        <HomeStyle>  
           <Header />
           <Main>
                <img src={profile} alt='' />
                <Infos>
                <h3> Olá, meu nome é</h3><b /> 
                <h2>Caio Vitor</h2> <b />
                <h3> e eu sou um desenvolvedor Full-stack</h3>
                </Infos>
           </Main>
           <Description>
            <h3> 
                Venha conhecer alguns dos mais de 23 projetos que já desenvolvi.
            </h3>
            <Projects>
                <ProjectsDescription>
                    <h4> LiteraBooks</h4>
                    <img src={literaBooks} alt='' />
                </ProjectsDescription>
                <ProjectsDescription>
                    <h4> Trackit</h4>
                    <img src={literaBooks} alt='' />
                </ProjectsDescription>
                <ProjectsDescription>
                    <h4> Sing Me a Song</h4>
                    <img src={literaBooks} alt='' />
                   
                </ProjectsDescription>
            </Projects>
            

           </Description>   
        </HomeStyle>
    )
}


const ProjectsDescription = styled.div`
border: solid;
border-width: 0px 1px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
    width: 75%;
    margin: 15px;
   
}
h4{
   
    font-size: 20px;
    color: #FFD700;
}
`

const Projects = styled.div`
margin-top: 20px;
display: flex;
`
const Description = styled.div`

margin-top: 90px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h3{
font-size: 20px;
font-style: italic;
color: white;   
}
`
const HomeStyle = styled.div`
width: 100%;
height: 170vh;
background-image: url(${imagem});
background-color: white;
`

const Main = styled.div`
margin-top: 60px;
display: flex;
justify-content: center;
align-items: center;
border-color: white;
color: white;
h3{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 20px;
}
h2{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 40px;
    color: #FFD700; 
    margin-bottom: 30px;
}
img{
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
    color: black;
    font-size: 20px;
    font-family: 'Lato';
    font-style: normal;
}
button:hover{
    opacity:1.0;
}
`
const Infos = styled.div`

`
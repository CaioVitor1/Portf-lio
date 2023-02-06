import Header from "./Header";
import styled from "styled-components";
import imagem from "./assets/background.png";
import profile from "./assets/profile.jpeg"
import Footer from "./Footer";
import { GrCertificate } from "react-icons/gr"
export default function About() {
    return (
        <AboutStyle>     
            <AboutMain>
                <Description>
                    <AboutMe> 
                        <h4> Sobre mim</h4>
                        <h3>Sou uma pessoa curiosa por natureza e apaixonada por desafios e resolver problemas. A curiosidade me levou a carreira 
                            cietífica e a ambição por resolver problemas me trouxe a tecnologia. Acredito que a comunicação é uma das melhores 
                            habilidades que uma pessoa pode conseguir desenvolver e trabalho diariamente nisso.
                        </h3>               
                    </AboutMe>
                    <AcademicLife>
                        <h4> Vida acadêmica</h4>  
                        <Certificates>
                            <Certificate>
                                <GrCertificate size={100}/>
                                <InfosCertificate>
                                    <h3> Bacharelado em Física</h3>
                                    <h4> Finalizado em Dezembro de 2021</h4>
                                    <h4>Duração: 4,5 anos</h4>
                                    <h5> Acessar certificado</h5>
                                </InfosCertificate>
                            </Certificate>

                            <Certificate>
                                <GrCertificate size={100}/>
                                <InfosCertificate>
                                <h3> Desenvolvimento Full-Stack</h3>
                                <h4> Finalizado em Dezembro de 2021</h4>
                                <h4>Duração: 9 meses (1200h)</h4>
                                <h5> Acessar certificado</h5>
                                </InfosCertificate>
                            </Certificate>

                            <Certificate>
                                <GrCertificate size={100}/>
                                <InfosCertificate>
                                    <h3> Iniciações científicas</h3>
                                    <h4> Finalizado em Novembro de 2021</h4>
                                    <h4>Duração: 4 anos</h4>
                                    <h4>Área: Física-computacional</h4>
                                    <h5> Acessar certificado</h5>
                                </InfosCertificate>
                            </Certificate>

                        </Certificates>
                    </AcademicLife>
                </Description>
            </AboutMain>
           
        </AboutStyle>
    )
}


const AboutStyle = styled.div`
width: 100%;
height: 100vh;

`
const Certificates = styled.div`
display: flex;

`

const Certificate = styled.div`
display: flex;
background-color: white;
border:solid;
border-color: pink;
box-shadow: 5px 5px grey;
`

const AcademicLife = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:white;
width: 80%;
>h4{
   font-size: 40px;
   display:flex;
   align-items: center;
   justify-items: center;
   color: white;
   text-align: center;
   margin-bottom: 10px;
}
`
const InfosCertificate = styled.div`
margin: 10px;
position: relative;
padding-bottom: 40px;
h3{
    font-size: 30px;
    color:black;
}
h4{
    font-size: 20px;
    color:black;
}
h5{
    color:black;
    margin-top: 30px;
    text-decoration: underline;
    text-decoration-color: blue;
    position: absolute;
    bottom: 0px;
}
`
const AboutMain = styled.div`
display: flex;
height: 100%;
background-color: #191919;
`

const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin:0px auto;

`

const AboutMe = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 40px;
margin-top:40px;

border-color: white;
width: 50%;
>h3{
   display:flex;
   align-items: center;
   justify-items: center;
   color: white;
   font-size: 20px;
   margin-bottom: 70px;
}
h4{
   font-size: 40px;
   display:flex;
   align-items: center;
   justify-items: center;
   color: white;
   text-align: center;
   margin-bottom: 10px;
}
p{
    text-align: justify;
    line-height: normal;
    color:#929d8d;
    font-size: 17px;
}
span{
    font-weight: bold;
    
}
`

const Image = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
img{
    width: 50%;
    
}
`
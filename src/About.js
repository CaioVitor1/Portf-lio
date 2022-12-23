import Header from "./Header";
import styled from "styled-components";
import imagem from "./assets/background_port.jpg";
import profile from "./assets/profile.jpeg"
import Footer from "./Footer";
export default function About() {
    return (
        <AboutStyle>
            <Header />
            <AboutMain>
                <img src={profile} />
                <Description>
                    <Title>
                        <h3>Sobre</h3>
                        <h4> Vou contar um pouco sobre minha história..</h4>
                        <p> Formado em Física pela Universidade Federal do Piauí, tive meu primeiro contato com programação através
                            de matérias como iniciação à ciência da computação e métodos de Física computacional. O interesse por programação cresceu
                            e ingressei na área de Física computacional realizando 4 inicações científicas na área. 
                        </p>
                        <p> Ao finalizar o curso eu já havia percebido que, apesar de amar física, era como desenvolvedor que eu me sentia verdadeiramente realizado,
                            pois além de continuar resolvendo problemas, eu poderia impactar mais diretamente a vida das pessoas.
                        </p>
                        <p> Assim, ingressei no bootcamp de Web Full-Stack da <span>Driven Education</span> e dei inicio a minha transição de carreira. </p>
                        <p> Com 6 meses de curso consegui finalizar mais de <span>17 projetos</span> nas stacks: <span> JavaScript Vanilla,
                            css, html, react, styled components, NodeJs, express, postgresSQL, MongoDB e versionamento utilizando Git.</span></p>
                            <p> Além das hard-skills, as aulas de soft-skills foram fundamentais para aprender a trabalhar em equipe e saber como pedir e receber feedbacks.

                            </p>
                    </Title>
                </Description>
            </AboutMain>
            <Footer />
        </AboutStyle>
    )
}

const AboutStyle = styled.div`
width: 100%;
height: 100vh;
background-color: white;
`

const AboutMain = styled.div`
display: flex;
margin: 120px 20px 20px 80px;

img{
    margin-top: 60px;
    width: 200px;
    height: 300px;
    border-radius: 100px;
}
`

const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin:0px auto;
border:solid;
color:white;

`

const Title = styled.div`
width: 800px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h3{
   display:flex;
   align-items: center;
   justify-items: center;
   color: #6495ED;
   font-size: 20px;
}
h4{
    font-size: 40px;
    display:flex;
   align-items: center;
   justify-items: center;
   color: #191970;
   text-align: center;
   margin-bottom: 10px;
}
p{
    text-align: justify;
    line-height: normal;
    color:gray;
}
span{
    font-weight: bold;
    
}
`
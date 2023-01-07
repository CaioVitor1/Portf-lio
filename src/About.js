import Header from "./Header";
import styled from "styled-components";
import imagem from "./assets/background.png";
import profile from "./assets/profile.jpeg"
import Footer from "./Footer";
export default function About() {
    return (
        <AboutStyle>
            <Header />
            <AboutMain>
                <Image>
                    <img src={profile} alt='' />
                </Image>
                
                <Description>
                    <Title>
                       
                        <h4> Vou contar um pouco sobre minha história..</h4>
                        
                        <p> Formado em Física pela Universidade Federal do Piauí, tive meu primeiro contato com programação através
                            de matérias como iniciação à ciência da computação e métodos de Física computacional. O interesse por programação cresceu
                            e ingressei na área de Física computacional realizando 4 inicações científicas na área. 
                        </p>
                        <p> Ao finalizar o curso eu já havia percebido que, apesar de amar física, era como desenvolvedor que eu me sentia verdadeiramente realizado,
                            pois além de continuar resolvendo problemas, eu poderia impactar mais diretamente a vida das pessoas.
                        </p>
                        <p> Assim, ingressei no bootcamp de Web Full-Stack da <span>Driven Education</span> e dei inicio a minha transição de carreira. </p>
                        <p> Em 9 meses de curso consegui finalizar <span>23 projetos</span> nas stacks: <span> JavaScript Vanilla,
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
background-image: url(${imagem});
`

const AboutMain = styled.div`
display: flex;
height: 79%;
background-color: #191919;
`

const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin:0px auto;

`

const Title = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 40px;
margin-top:40px;
h3{
   display:flex;
   align-items: center;
   justify-items: center;
   color: yellow;
   font-size: 20px;
}
h4{
   font-size: 40px;
   display:flex;
   align-items: center;
   justify-items: center;
   color: yellow;
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
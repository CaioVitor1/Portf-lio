import Header from "./Header"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import literaBooksThumb from "../src/assets/leitor.jpg"
import trackitLogo from "../src/assets/trackitLogo.png"
import signmeasong from "../src/assets/signmeasong.svg"
function RenderProjects({ projectId, name, image, description, navigate}){
    console.log("oi")
    return (
          <OneMainProject>
            <h3> {name}</h3>
            <img src={image} alt='' />
            <h4> {description}</h4>
            <KnowMore onClick={() => navigate(`/description/${projectId}`)}>Saiba mais</KnowMore>
          </OneMainProject>
          
    )
  }

export const MainProject = () => {
  const navigate = useNavigate()
    const url = [  	
        {id: 1,
        name:	"LiteraBooks",
        banner:	literaBooksThumb,
        description:	"Projeto autoral e Full-Stack onde desenvolvi uma plataforma para usuários compartilharem suas experiências literárias!"
        },
        {id: 2,
        name:	"Trackit",
        banner:	trackitLogo,
        description:	"Projeto Front-End onde o objetivo foi contruir uma aplicação completa de acompanhamento de hábitos! Com direito a cadastro, login e muitas bibliotecas!!"
        },
        {id: 3,
        name:	"Sing me a Song",
        banner:	signmeasong,
        description:	"Neste projeto recebi um front-end e back-end completamente implementados e fui responsável pela implementação de todos os testes automatizados do projeto!! "
        } 
        ];
    return(
        <>
        <Header />
        <ProjectStyle>
            <Title>
                Principais Projetos
            </Title>
            <MainProjects>
            {url.map((item) => <RenderProjects projectId={item.id} navigate={navigate} name={item.name} image={item.banner} description={item.description}/>)}
            </MainProjects>
           
            <Title>
            Front-End
            </Title>
            <MainProjects>
            {url.map((item) => <RenderProjects projectId={item.id} navigate={navigate} name={item.name} image={item.banner} description={item.description}/>)}
            </MainProjects>
            <Title>
                Back-End
            </Title>
            <MainProjects>
            {url.map((item) => <RenderProjects projectId={item.id} navigate={navigate} name={item.name} image={item.banner} description={item.description}/>)}
            </MainProjects>
        </ProjectStyle>
       
         </>
    )
}

const ProjectStyle = styled.div`
    

`

const Title = styled.div`

    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:20px;
    color: yellow;

`
const MainProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
`
const OneMainProject = styled.div`
  margin: 50px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: yellow;
  border:solid;
  border-width: 0px 5px 0px 0px;
  width: 30%;
  background-color: black;
  padding:11px;
  border-color:yellow;
  height: 500px;
  img{
    width: 90%;
    margin:10px;
    height: 50%;
  }
  h3{
    font-size: 30px;
    color:yellow;
  }
  h4{
    color:white;
    font-size: 20px;
    text-align: justify;
    
  }
`

const KnowMore = styled.div`
color:white;
font-size: 25px;
margin-top:20px;
:hover{
    color: yellow;
}
`
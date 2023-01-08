import Header from "./Header"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import literaBooksThumb from "../src/assets/literaBooks/leitor.jpg"
import trackitLogo from "../src/assets/Trackit/trackitLogo.png"
import signmeasong from "../src/assets/singme/signmeasong.svg"
import * as dataProject from "./dataProjects" 
import { useState, useEffect } from "react";
function RenderProjects({ projectId, name, image, description, navigate}){
    
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
  const [main, setMain] = useState([])
  const [front, setFront] = useState([])
  const [back, setBack] = useState([])

  useEffect(() => {
    async function getProject() {

      const responseMain = await dataProject.projectsMain()
      const responseFront = await dataProject.projectsFront()
      const responseBack = await dataProject.projectsBack()

      console.log(responseMain)
      setMain(responseMain)
      setFront(responseFront)
      setBack(responseBack)
      
    }
    getProject();
  }, []);

// FALTA ADICIONAR O MYWALLET E O SHORTLY!!!!
  const navigate = useNavigate()
  
    return(
        <>
        <Header />
        <ProjectStyle>
            <Title>
                Principais Projetos
            </Title>
            <MainProjects>
            {main.map((item) => <RenderProjects projectId={item.id} navigate={navigate} name={item.name} image={item.banner} description={item.description}/>)}
            </MainProjects>
           
            <Title>
            Front-End
            </Title>
            <MainProjects>
            {front.map((item) => <RenderProjects projectId={item.id} navigate={navigate} name={item.name} image={item.banner} description={item.description}/>)}
            </MainProjects>
            <Title>
                Back-End
            </Title>
            <MainProjects>
            {back.map((item) => <RenderProjects projectId={item.id} navigate={navigate} name={item.name} image={item.banner} description={item.description}/>)}
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
  border:solid;
  margin: 20px 0px;
  border-color: yellow;
  border-width: 1px 0px;
  
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
  width: 25%;
  background-color: black;
  padding:11px;
  border-color:yellow;
  height: 400px;
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
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
            (Veja tecnologias utilizadas!)
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
        <ProjectStyle>
            <Title>
               Projetos
            </Title>
            <MainProjects>
            {main.map((item) => <RenderProjects projectId={item.id} navigate={navigate} name={item.name} image={item.banner} description={item.description}/>)}
            </MainProjects>
           
            
            <MainProjects>
            {front.map((item) => <RenderProjects projectId={item.id} navigate={navigate} name={item.name} image={item.banner} description={item.description}/>)}
            </MainProjects>
            
            <MainProjects>
            {back.map((item) => <RenderProjects projectId={item.id} navigate={navigate} name={item.name} image={item.banner} description={item.description}/>)}
            </MainProjects>
        </ProjectStyle>
       
         </>
    )
}

const ProjectStyle = styled.div`
background-color: black;

`

const Title = styled.div`
    padding-top: 60px;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
   

`
const MainProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-color: pink;
  background-color: black;
`
const OneMainProject = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: black;
  border:solid;
  width: 25%;
  background-color: white;
  padding:11px;
  border-color:pink;
  height: 400px;
  
  box-shadow: 5px 5px grey;
  img{
    width: 90%;
    margin:10px;
    height: 50%;
  }
  h3{
    font-size: 30px;
    color:black;
  }
  h4{
    color:black;
    font-size: 20px;
    text-align: justify;
    
  }
`

const KnowMore = styled.div`
color:black;
font-size: 25px;
margin-top:20px;
:hover{
    color: blue;
}
`
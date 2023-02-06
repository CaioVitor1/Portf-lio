import styled from "styled-components"
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as dataProject from "./dataDescription" 

function RenderTechnologies({tech}){
    return(
        <>
        <h3>- {tech}</h3> <br />
        </>
    )
}

export const ProjectDescription = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState([]);
    const [technologies, setTechnologies] = useState([])
    const [functionalities, setFunctionalities] = useState([])
    const [deploy, setDeploy] = useState("")
    const [repository, setRepository] = useState("")
    const [back, setBack] = useState("")
    const [front, setFront] = useState("")

    useEffect(() => {
        async function getProject() {
          const response = await dataProject.getProjects(projectId)
          console.log(response)
          setProject(response)
          setTechnologies(response.technologies)
          setFunctionalities(response.functionalities)
          setDeploy(response.deploy)
          setRepository(response.repository)
          setFront(response.front)
          setBack(response.back)
        }
        getProject();
      }, []);

    return(
        <>
        <ProjectDescriptionBody>
            {(project) && (
            <BodyProject>
                <TitleProject>
                    <h2> {project.name}</h2>
                </TitleProject>
                <SeeMore>
                    {(repository !== "") && ( 
                    <Repository onClick={() => window.open(repository)}>
                        <h3> Repositório</h3>
                    </Repository>)}

                    {(repository === "") && ( 
                        <>
                    <Repository onClick={() => window.open(front)}>
                        <h3> Front-End</h3>
                    </Repository>
                    <Repository onClick={() => window.open(back)}>
                    <h3> Back-End</h3>
                </Repository>
                     </>)}

                   
                    {(deploy !== "") && (<Repository onClick={() => window.open(deploy)}>
                    <h3> Deploy</h3>
                    </Repository>)}
                    
                </SeeMore>
                <InfoProject>
                    <ImageProject>
                        <img src={project.image1} alt='' />
                    </ImageProject>
                    
                        <Description>
                            <h3> {project.description}</h3>
                            <About>
                                <Technologies>
                                        <h2> Tecnologias utilizadas</h2>
                                        {technologies.map((tech) => <RenderTechnologies key={tech.id} tech={tech}/>)}
                                        
                                </Technologies>
                                <Technologies>
                                        <h2> Funcionalidades</h2>
                                        {functionalities.map((tech) => <RenderTechnologies key={tech.id} tech={tech}/>)}
                                        
                                </Technologies>
                            </About>
                            
                        </Description>
                  
                </InfoProject>
                
            </BodyProject>)}
        </ProjectDescriptionBody>
        </>
        
    )
}

const ProjectDescriptionBody = styled.div`
background-color: black;

`
const BodyProject = styled.div`
background-color: black;
`
const TitleProject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color:white;
    
`
const InfoProject = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    
`
const ImageProject = styled.div`
    width: 55%;
    height: 450px;
    img{
        height: 100%;
        width: 100%;
        border:solid;
        margin-top: 20px;
    }
`

const Description = styled.div`
    margin-left: 10px;
    width: 70%;
    margin-top:20px;
    background-color: #191919;
    padding: 10px;

    >h3{
        font-size: 25px;
        color:white;
        text-align: justify;
        line-height: normal;
    }
`
const About = styled.div`
    display: flex;
    justify-content: space-around;
   
`

const Technologies = styled.div`
margin-top: 20px;

h2{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color:yellow;
    margin-bottom: 30px;
}
>h3{
    font-size: 25px;
    color:white;
}
`

const SeeMore = styled.div`
 display: flex;   
 justify-content: center;
 margin-top: 30px;
`

const Repository = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 40px;
    background-color: white;
    color:white;
    border-radius: 20px;
    margin-right: 30px;
    h3{
        color:black;
    }
`

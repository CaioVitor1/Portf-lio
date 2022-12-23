import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const [changeVisibility, setChangeVisibility] = useState("hidden")
    function change() {
        //setChangeVisibility("visible")
        //changeVisibility = "hidden" ? setChangeVisibility("visible") : setChangeVisibility("hidden")
    if(changeVisibility === "hidden") {
        setChangeVisibility("visible")
    }else{
        setChangeVisibility("hidden")
    }
    }
    return(
        <HeaderStyle>
                <Name onClick={() => navigate('/')}> caioVitor</Name>
                <Options>
                    <Sobre onClick={() => navigate('/about')}> Sobre</Sobre>
                    <Projetos> 
                        <h3 onClick={change}>Projetos</h3>
                        <ProjetosOptions visibility={changeVisibility}>
                            <h3>Principais projetos</h3>
                            <h3> Front-End</h3>
                            <h3> Back-End</h3>
                            <h3> Full-Stack</h3>
                        </ProjetosOptions>
                    </Projetos>
                    
                    <Contato> Contato</Contato>
                </Options>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Name = styled.div`
color: white;
font-size: 24px;
border-radius: 50px;


display: flex;
justify-content: center;
align-items: center;
::before {
    content: "<";
    font-size: 2rem;
    color:#FFD700;
    font-weight: 700;
}

::after {
    content: "/>";
    font-size: 2rem;
    color: #FFD700;
    font-weight: 700;
}
`

const Options = styled.div`
border-color: yellow;
display: flex;
justify-content: center;
align-items: center;



width: 600px;

color: white;
font-size: 24px;
`

const Projetos = styled.div`
margin-top:138px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`

const ProjetosOptions = styled.div`
visibility: ${props => props.visibility};
margin-top: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
border-radius: 20px;
h3{
    
    
    border-radius: 20px;
   
    border-width: 2px;
    margin-bottom: 5px;
    padding: 1px;
    opacity: 0.5;
}
h3:hover{
    opacity: 1.0;
}
`

const Sobre = styled.div`
`
const Contato = styled.div`
`
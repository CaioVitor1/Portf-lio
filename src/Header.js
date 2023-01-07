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
                    <Sobre onClick={() => navigate('/about')}> Quem sou eu</Sobre>
                    <Projetos> 
                        <h3 onClick={() => navigate('/mainproject')}>Projetos</h3>
                        <ProjetosOptions visibility={changeVisibility}>
                            <h3 onClick={() => navigate('/mainproject')}>Principais projetos</h3>
                            <h3 onClick={() => navigate('/frontend')}> Front-End</h3>
                            <h3 onClick={() => navigate('/backend')}> Back-End</h3>
                
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
border:solid;
border-color: #FFD700; 
border-width: 0px 0px 1px 0px;
padding:0px 70px;
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
justify-content: space-around;
align-items: center;
color: white;
font-size: 20px;
margin-right: 20px;
`

const Projetos = styled.div`
margin-top:112px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
:hover{
    color: #FFD700;
}

`

const ProjetosOptions = styled.div`
visibility: ${props => props.visibility};
margin-top: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
:hover{
    color: #FFD700;
}
h3{
    border-radius: 20px;
   color: white;
    border-width: 2px;
    margin-bottom: 5px;
    padding: 1px;
    opacity: 0.5;
}
h3:hover{
    opacity: 1.0;
    color: #FFD700;
}
`

const Sobre = styled.div`
:hover{
    color: #FFD700;
}
`
const Contato = styled.div`
:hover{
    color: #FFD700;
}
`
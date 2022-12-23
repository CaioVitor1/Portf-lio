import styled from "styled-components";
export default function Footer() {
    return (
        <FooterStyle> 
                <img onClick={() => window.open('https://www.linkedin.com/in/caiovitor33/')} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />         
                <img onClick={() => window.open('https://github.com/CaioVitor1')} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
         </FooterStyle>
    )
}

const FooterStyle = styled.div`

display: flex;
justify-content: center;
align-items: center;
img{
    width: 45px;
    height: 45px;
    margin-right: 40px;
}

`
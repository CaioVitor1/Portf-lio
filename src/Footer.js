import styled from "styled-components";
export default function Footer() {
    return (
        <FooterStyle> 
            <FooterImage>
                <img onClick={() => window.open('https://www.linkedin.com/in/caiovitor33/')} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
            </FooterImage>
            <FooterImage>
                <img onClick={() => window.open('https://github.com/CaioVitor1')} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
            </FooterImage>             
          
         </FooterStyle>
    )
}

const FooterStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
border:solid;
border-color: #FFD700; 
border-width: 1px 0px 0px 0px;
width: 100%;
position: fixed;
bottom: 0px;
height: 8%;


`

const FooterImage = styled.div`
background-color: white;
width: 3%;
margin:5px;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 100%;
    @media (max-width: 600px) {
    flex-direction: column;
  }

}
`
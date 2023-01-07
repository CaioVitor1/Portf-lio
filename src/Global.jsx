import { createGlobalStyle } from "styled-components"
import image from "../src/assets/background.png"

export const GlobalStyled = createGlobalStyle`
    body{
        background-image: url(${image});
        font-family: 'Saira Condensed', sans-serif;
    }
    *{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Saira Condensed', sans-serif;
}
`
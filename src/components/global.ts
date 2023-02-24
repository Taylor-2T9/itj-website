import { createGlobalStyle } from 'styled-components'
import logo from '../assets/background.png'

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    color: 'black';
    background-image: url(${logo});
    background-repeat: repeat;
    background-attachment: fixed;
    background-size: cover;
    -webkit-animation: backgroundScroll 15s linear 1;
    -webkit-animation-fill-mode: forwards;
    animation: backgroundScroll 15s linear 1;
    animation-fill-mode: forwards;
    font-family: 'Roboto', sans-serif;
}
`

export default GlobalStyle;
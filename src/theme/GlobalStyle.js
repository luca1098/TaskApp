import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}
body {
    background : ${props => props.theme.body}
}
p {
    color : ${props => props.theme.text}
}
h1 {
    text-align:center;
    color: ${props => props.theme.text}
}

input, button {
    border-radius: 7px;
}
button{
    cursor:pointer;
}

.loader {
    margin: 0 0 2em;
    height: 100px;
    width: 20%;
    text-align: center;
    padding: 1em;
    margin: 0 auto 1em;
    display: inline-block;
    vertical-align: top;
  }
  
  svg path,
  svg rect {
    fill: ${props => props.theme.primaryButton};
  }
`
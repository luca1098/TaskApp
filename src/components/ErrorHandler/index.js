import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

export const ErrorMessage = () => {

    const stateError = useSelector(state => state) 
    let dispatch = useDispatch()
    let { errorText} = stateError
    return (
        <>
       {errorText && 
        <ErrorWrap>
            {errorText}
        </ErrorWrap>}
        </>
    )
}

export const ServerError = (props) => {
    return (
        <ServerErrorWrap>
            <Title>Hei! Come va? Non penso che vada proprio tutto bene... 👻 <br/> da quello che vedo siamo in 
            un {props.message}...🥵
            </Title>
            <p><b>Hai provato per caso a far partire il server? </b> </p>
            <TryText>Lancia il comando <FalseButton>yarn server 🚀</FalseButton></TryText>
                <p>vedrai che il tuo problema sarà risolto!!</p>
        
            <p>In caso contrario non esitare a contattarmi!<br />👇 Giù, puoi trovare il mio linkedin 👇</p>
        </ServerErrorWrap>
    )
}

const ErrorWrap = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
border-radius: 7px;
padding:.8rem 1rem;
background:#FF8E8E;
opacity:.8;
margin-top:1rem;
`
const ServerErrorWrap = styled.div`
    text-align:center;
`

const Title = styled.h2`
    color: ${props => props.theme.text}
`
const FalseButton = styled.span `
    background: #F5F5F5;
    padding:.5rem .8rem;
    border-radius:7px;
    color:#1c1c1c;
    marign: 0 1.5rem;
    box-shadow: 0px 0px 10px rgb(232,232,232)
`
const TryText = styled.p`
    margin: 1rem 0;
    display:block;
`




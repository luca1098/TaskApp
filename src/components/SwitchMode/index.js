import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { changeTheme } from '../../reducer/reducerTodo'


export const SwitchMode = ({mode}) => {
    let dispatch = useDispatch()

    const dispatchMode = () => {
        let theme = mode === 'light' ?  'dark' : 'light'
        dispatch(changeTheme(theme))
        localStorage.setItem('mode', theme)
        }
 
    return (
        <ButtonMode onClick={dispatchMode}> 
            {mode === 'light' ?  <MoodIcon className="fas fa-moon" /> : <MoodIcon className="fas fa-sun" /> }
        </ButtonMode>
    )
}

const ButtonMode = styled.button`
    position:absolute;
    top:10px;
    background:none;
    border:none;
    right:0;
    color:${props => props.theme.text};
    &:focus {
        outline:none;
    }
`

const MoodIcon = styled.i`
    font-size:1.2rem;
    cursor:pointer;
    &:hover{
        opacity:.9;
    };
    &:active{
        transform:scale(.90)
    }
`
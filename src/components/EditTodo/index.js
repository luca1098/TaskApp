import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { EditTodosLabel } from '../../function/asyncro'
import { getOpenTools, getEditable } from '../../reducer/reducerTodo'

export const EditTodo = ({todo}) => {
    let dispatch = useDispatch()
    const [newValue, setNewValue] = useState('')
    let refInput = useRef();
    let payload = {
        url : 'http://localhost:3001/todos',
        todo:todo,
        value: newValue
    }

    //dispatch update
    const SetNewValue = (e) => {
        e.preventDefault()  
        if(newValue){  
            dispatch(EditTodosLabel(payload))}
        //     //chiude la barra dei tools dopo l'update
            dispatch(getOpenTools(todo.id))
            //chiude l'input dopo l'update 
            dispatch(getEditable(todo.id))

        }

    useEffect(()=> {
        if(todo.editable){
            refInput.current.focus()
        }
    },[todo.editable])
    
    return(
        <form onSubmit={SetNewValue}>
            <EditInput type="text"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    ref={refInput}
                    />
            <EditButton type='submit'>Update</EditButton>
        </form>
    )
}

const EditInput = styled.input`
    border:none;
    border-bottom:1px solid;
    outline:none;
    color:${props => props.theme.text};
    background:transparent;
    border-color:${props => props.theme.text};
    margin: 1rem .5rem 0rem 1rem;
    border-radius:0;
    font-size:1rem;
    padding-bottom:1rem
`

const EditButton = styled.button`
    border:none;
    color:${props => props.theme.text};
    background: ${props => props.theme.filterButton};
    border-radius:7px;
    padding: 1rem 1.8rem;
    transition: ${props => props.theme.transition};
    &:focus{
        outline:none;
    };
    &:active{
        transform: scale(.95);
    };
    &:hover{
        background: ${props => props.theme.filterButtonActive};
    }

`
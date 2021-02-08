import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { saveTodoState } from '../../function/asyncro'
import { mediaQueries } from '../../theme/MediaQueries'
import { setFilterState } from '../../reducer/reducerTodo'


export const SearchBar = () => {
    let dispatch = useDispatch()
    let filterState = useSelector(state => state.activeFilter)
    const [todoValue, setTodoValue] = useState('')
    const [priority, setPriority] = useState(false)

    //handle value input
    const ChangeTodoValue = (e) => setTodoValue(e.target.value)
    //handle value select
    const ChangePriorityValue = () => {
        setPriority(!priority)
    }
    //add todo dispatch 
    const AddTodoAndMore = (e) => {
        e.preventDefault()
        if(todoValue){
            let todoWillAdd = {
                url :'http://localhost:3001/todos',
                task :{
                    id:RandomId(),
                    todo:todoValue, 
                    chekched:false,
                    order:priority,
                    editable: false,
                    opentool:false  
            }  }
            dispatch(saveTodoState( todoWillAdd)) 
         }
        setTodoValue('')
        if (filterState === 'DONE') {
            dispatch(setFilterState('TODO'))
        }

         setPriority(false)
    }
    //generate random id
    const RandomId = () => {
        let randomNumber = Math.floor(Math.random() * 1000)
        return randomNumber
    }


    return (
        <AddItemWrapper onSubmit={AddTodoAndMore}>
            <WrapInput>
                <AddInput type='text'
                        placeholder='Che task vuoi aggiungere?'
                        value={todoValue}
                        onChange={ChangeTodoValue}
                        
                        />
            
            <Priority>
                <div onClick={ChangePriorityValue}>
                    {priority ?<IconCheck className="fas fa-check-square" /> : <IconCheck className="far fa-square" />}
                </div>
                <p>Aggiungi Priorità</p>
                
            </Priority>
           </WrapInput>
            <AddButton type='submit'>Aggiungi</AddButton>
        </AddItemWrapper>
    )
}

const AddItemWrapper = styled.form`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:flex-start;
    width:100%;
    
`
const WrapInput = styled.div`
    flex-grow:2;
    ${mediaQueries('sm')`
        width:100%;
    `}
`
const AddInput = styled.input`
    padding: 1rem;
    border:none;
    width:100%;
    margin-bottom:.5rem;
    &:focus{
        outline:none;
    }
`
const AddButton = styled.button`
    padding: 1rem;
    max-width:200px;
    margin-left:.8rem;
    flex-grow:1;
    background: ${props => props.theme.primaryButton};
    color : ${props => props.theme.textButton};
    border:none;
    ${mediaQueries('sm')`
        margin-bottom:2rem;
    `}
`
const Priority = styled.i `
    margin: .2rem 1rem 1rem 0 ;
    display:flex;
    align-items:center;
    p{
        margin:0 0 0 .5rem
    }
`
const IconCheck = styled.i`
    color: ${props => props.theme.text}
`
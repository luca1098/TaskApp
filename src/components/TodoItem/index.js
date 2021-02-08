import React from 'react'
import styled from 'styled-components'
import { Badge } from '../BadgePriority'
import { EditTodo } from '../EditTodo'

export const TodoItem = (props) =>{
    let {todo} = props
    return(
        <FlexWrapTodo>
            <FlexWrapTodo onClick={props.onClick}>
                <CheckTodo todo={todo.chekched}/>
                {!todo.editable && <TodoName isDone={todo.chekched} >{todo.todo}</TodoName> } 
            </FlexWrapTodo>
            {todo.editable &&  <EditTodo todo={todo} />}                        
            <Badge todo={todo}/>
        </FlexWrapTodo>

    )
}


const CheckTodo = (props) => {
    let {todo} = props

    return(
        <div onClick={props.action}>
        {todo ? <IconCheck className="fas fa-check-square" isDone /> : <IconCheck className="far fa-square" />}
        </div>
    )
}
const TodoName = (props) => {
    let {children, isDone} = props;
    console.log(isDone, 'isDone')
    return (
    <TodoPara isDone={isDone}>
        {children}
    </TodoPara>
        
        )

}
const FlexWrapTodo = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
`
const TodoPara = styled.p`
    margin-left: 1rem;
    color: ${props => props.theme.text};
    opacity: ${props => props.isDone ? '.5' : '1'};
    text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
`
const IconCheck = styled.i`
    color: ${props => props.theme.text};
    opacity: ${props => props.isDone ? '.5' : '1'};
`
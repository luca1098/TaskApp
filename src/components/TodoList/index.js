import React  from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ChangeTodoStatus, deleteTask, RemovePriorityAsnc } from '../../function/asyncro'
import { getOpenTools, 
        getEditable, 
        removePriority} from '../../reducer/reducerTodo'
import { mediaQueries } from '../../theme/MediaQueries'
import { EmptyTodos } from '../EmptyTodos'
import { TodoItem } from '../TodoItem'

export const TodoList = (props) => {
    let {todos, filterStatus} = props
  
    return(
        <>
        {todos.length == 0 && <EmptyTodos filterStatus={filterStatus} />}
        <TodoContainer>
            {todos && todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </TodoContainer>
        </>
    )
}


const Todo = ({todo}) =>{
    let dispatch = useDispatch()
    let payload = {
        url : "http://localhost:3001/todos",
        todo 
    }

    const HandleCheck = () => {
       
        dispatch(ChangeTodoStatus(payload))
        if (todo.order) {
                 dispatch(RemovePriorityAsnc(payload))
        }
    }
    
    return(
        <TodoItemWrap> 
           <TodoItem todo={todo} 
                     onClick={HandleCheck}
                     editable={todo.editable}
                     openTools={todo.opentool}
                    />


            <EditBlock todo={todo} />
        </TodoItemWrap>
    )
}



const EditBlock = ({todo}) => {
    let dispatch = useDispatch()
    let payload = {
        url: 'http://localhost:3001/todos',
        task : todo
    }
    //delete todo
    const RemoveTodoFuncion = () => {
        dispatch(deleteTask(payload))
    }
    //open input editable
    const HandleEditable = () => {
        dispatch(getEditable( todo.id))
    }
    //open tools
    const HandleEdit = () => {
        dispatch(getOpenTools(todo.id))
    }

    return(
        <FlexIcon>
        { todo.opentool && 
            <FlexIcon>
                <IconEdit className="fas fa-edit" 
                        onClick={HandleEditable}
                        />
                 <IconEdit className="fas fa-trash-alt" 
                            onClick={RemoveTodoFuncion}
                            /> 
                        
            </FlexIcon>
             } 
            <IconEdit className="fas fa-ellipsis-v"
                        onClick={HandleEdit} 
                        active={todo.opentool}
                        />
         
        </FlexIcon>
    )
}

const TodoContainer = styled.ul`
    background:${props => props.theme.main};
    padding:0 1rem;
    border-radius: 7px
`

const TodoItemWrap = styled.li`
    display:flex;
    justify-content:space-between;
    align-items:center:
    list-style:none;
    padding:.8rem 1rem;
    &:not(:last-child){
        border-bottom: 1px solid #ccc;
    };
    ${mediaQueries('sm')`
        align-items:flex-start;
    `}
`

const FlexIcon = styled.div`
    display:flex;
    align-items:center;
    color: ${props => props.theme.text};
    ${mediaQueries('sm')`

        flex-direction:column-reverse;
    `}
`
const IconEdit = styled.i`
    width:35px;
    height:30px;
    align-items:center;
    justify-content:center;
    display:flex;
    cursor:pointer;
    transition:all .2s ease-in-out;
    transform: ${props => props.active ? 'rotate(-90deg)' : 'rotate(0)' };
    &:active{
        transform:scale(.9)
    }
`
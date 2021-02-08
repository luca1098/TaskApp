import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { RemovePriorityAsnc } from '../../function/asyncro'



export const Badge = ({todo}) => {
    let dispatch = useDispatch()
    let payload = {
        url : 'http://localhost:3001/todos',
        todo
    }

    const handleRemove = () => {
        dispatch(RemovePriorityAsnc(payload))

    }
    return (
        <BadgeWrap type={todo.order ? 'priority' : '' }>
            { todo.order && <div> Priorità <RemoveIcon className ="fas fa-times-circle"
                                                onClick={handleRemove}
                                                /></div>}
        </BadgeWrap>
    )
}

const BadgeWrap = styled.div`
    padding:.3rem .8rem;
    border-radius: 50px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:.5rem 1rem;
    font-size:.9rem;
    font-weight:600;
    background: ${props => {
        if(props.type === 'priority'){
      
                return 'red'
        }
        return null

    }}
`
const RemoveIcon = styled.i`
    margin-right:-3px;
    &:active{
        transform:scale(.95)
    }
`


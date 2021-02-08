import React from 'react'
import styled from 'styled-components'
import { statusEmptyTodo } from '../../function'

export const EmptyTodos = ({filterStatus}) => {

    let messageByFiltrer = statusEmptyTodo(filterStatus)
    return(
        <EmptyWrap>
            <EmptyTag>
                { messageByFiltrer }
            </EmptyTag>
        </EmptyWrap>
    )
}



const EmptyWrap = styled.div`
    margin-top:30px;
`

const EmptyTag = styled.p`
    text-align:center;
    font-weight:700;
    font-size:1.8rem;

`
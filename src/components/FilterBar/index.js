import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setFilterState } from '../../reducer/reducerTodo'





export const FilterBar = () => {

  
    return(
        <FlexFliter>
            <FilterButton label="All"  filterName='Tutti'/>
            <FilterButton label="Todo" filterName='Da fare'/>
            <FilterButton label="Done" filterName='Fatti' />
        </FlexFliter>
    )
}


const FilterButton = (props) => {
    let {label, filterName} = props
    const filterStatus = useSelector(state => state.activeFilter)
    let dispatch = useDispatch()
    const [activeFilter, setActiveFilter] = useState(true)
    let labelType = label.toUpperCase();


    useEffect(()=>{
        
            if (filterStatus === labelType) {
                setActiveFilter(true)
            } else{
                setActiveFilter(false)
            }
            
    }, [filterStatus])
     

    const handleFilter = () => {
        dispatch(setFilterState(labelType))
    }
    return(
        <StyledButton onClick={handleFilter}
                        active={activeFilter}
                        label={label}
                        >
                            {filterName}
        </StyledButton>
    )
}
const FlexFliter =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    
`
const StyledButton = styled.button`
        margin: 0 .3rem;
        cursor:pointer;
        transition: ${props => props.theme.transition};
        background:${props => props.active ? props.theme.filterButtonActive : props.theme.filterButton};
        color:${props => props.theme.text};
        border:none;
        padding: .5rem 1rem;
        border-radius:50px;
            &:focus{
                outline:none;
            }
    `

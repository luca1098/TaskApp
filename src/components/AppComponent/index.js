import React from 'react'
import { useSelector } from 'react-redux'
import { filterTodo } from '../../function'
import { SearchBar } from '../AddBar'
import { ErrorMessage } from '../ErrorHandler'
import { FilterBar } from '../FilterBar'
import { Loader } from '../Loader';
import { TodoList } from '../TodoList'

export const AppComponent = () => {
    let state = useSelector(state => state)
    let filter = state.activeFilter
    let todos  = filterTodo(filter,state.todos)
    todos = todos.slice().reverse()
    todos = todos.slice().sort((a, b) =>  {
      if (a.order && !a.chekched ) return -1
      if (!a.chekched && b.chekched) return  a.chekched - b.chekched
      return 0
    })

    return (
        <> 
            <div>
                {state.loading ? <Loader /> :<SearchBar />}
                <FilterBar />
                <ErrorMessage />
                <TodoList todos={todos} filterStatus={filter}/>
            </div>
        </>
       
    )
}
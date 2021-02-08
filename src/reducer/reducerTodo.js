import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../state"
import { ChangeTodoStatus, 
         deleteTask,
         EditTodosLabel,
         fetchEndpoint,
         RemovePriorityAsnc, 
         saveTodoState } from '../function/asyncro'



const SliceApp = createSlice({
    name: 'todo',
    reducers:{

        getOpenTools(state,action){
            state.todos = state.todos.map(todo => {
                if ( todo.id === action.payload  ) {
                    todo.opentool =  !todo.opentool
                }
                return todo
            }) 
    },
        getEditable( state, action ) {
            state.todos = state.todos.map(todo => {
                if ( todo.id === action.payload  ) {
                    todo.editable =  !todo.editable
                }
                return todo
            }) 
    },
 
        setFilterState(state, action) {
            state.activeFilter = action.payload
            return state
        },
        changeTheme(state, action) {
            state.theme = action.payload
        }

    },
    extraReducers:{
        //fetch todo from server
        [fetchEndpoint.pending] : state => {
            state.loading = true;
        },
        [fetchEndpoint.fulfilled] : (state, {payload}) => {    
               state.todos = payload  
                state.serverError = ''
                state.loading = false
             
        },
        [fetchEndpoint.rejected] : (state, action) => {
                state.serverError = action.payload
                state.loading = false
        },

        //add todo 
        [saveTodoState.pending] : state => {
            state.loading = true;
        },
        [saveTodoState.fulfilled] : (state , action) => {
                    state.todos.push(action.payload)
                    state.loading = false
                
        },
        [saveTodoState.rejected] : (state, action) => {
                state.errorText = action.payload;
                state.loading = false
        },
        //delete task
      
        [deleteTask.fulfilled] : (state , action) => {
           let deleteItem = action.meta.arg.task
            state.todos = state.todos.filter(todo => todo.id != deleteItem.id)

        },
        [deleteTask.rejected] : (state, action) => {
            state.errorText = action.payload;
            state.loading = false
         },
        // change todo
      
        [EditTodosLabel.fulfilled] : (state,action) => {
            state.todos.map( todo => {
                if (todo.id === action.payload.id) {
                    todo.todo = action.payload.todo
                }
                return todo
            }) 
        },
        [EditTodosLabel.rejected] : (state, action) => {
            state.errorText = action.payload;
            state.loading = false
         },
        //chande state done
       
        [ChangeTodoStatus.fulfilled] : (state, action) => {
            state.todos.map( todo => {
                if (todo.id === action.payload.id) {
                    todo.chekched = action.payload.chekched
                }
                return todo
            }) 
        },
        [ChangeTodoStatus.rejected] : (state, action) => {
            state.errorText = action.payload;
            state.loading = false
         },
        //remove priority
      
        [RemovePriorityAsnc.fulfilled] : (state, action) => {
            state.todos.map( todo => {
                if (todo.id === action.payload.id) {
                    todo.order = action.payload.order
                    }
                return todo
                }) 
            },
        [RemovePriorityAsnc.rejected] : (state, action) => {
            state.errorText = action.payload;
            state.loading = false
        },
        },
            
  
    initialState
}) 

export const {  addTodo, 
                removeTodo,
                getOpenTools,
                getEditable,
                checkTodo,
                updateTodo,
                setFilterState,
                changeTheme,
                removePriority
            } = SliceApp.actions

export default  SliceApp.reducer

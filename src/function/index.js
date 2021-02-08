
import { ACTIVE_TODO, ALL_TODO, DONE_TODO } from "../action/type"

    
    export const filterTodo  = (filter = 'ALL', todos ) => {

        switch(filter){
            case  ALL_TODO :
                return todos
            case ACTIVE_TODO :
                return todos.filter(todo => !todo.chekched)
            case DONE_TODO: 
            return todos.filter(todo => todo.chekched)
            default : 
                return todos
        }
    }

    export const  statusEmptyTodo = (statusFilter) => {
        
        switch(statusFilter){
            case ACTIVE_TODO: 
                return 'Hai fatto tutti i task pianificati 🏆'

            case DONE_TODO: 
                return 'Hai ancora tanto da fare, fatti forza!💪'

            default :
            return 'Ancora nessun Task!🥸'
            }
        } 


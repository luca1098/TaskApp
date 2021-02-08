import { ALL_TODO } from "../action/type";


export const initialState = {
    activeFilter: ALL_TODO,
    theme : 'light',
    todos : [],
    errorText: '',
    serverError:'',
    // errorState: true,
    loading: false,
}
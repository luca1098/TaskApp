

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchEndpoint = createAsyncThunk(
    'todo/getTodo',
      (url, thunkApi) => {
       return axios.get(url)
        .then(res =>  res.data)
        .catch( err => thunkApi.rejectWithValue(err.message))
    }
)
//
export const saveTodoState = createAsyncThunk(
        'todo/saveTodo',
        (payload, thunkApi) => {
        return axios.post(payload.url, payload.task)
        .then( res => res.data)
        .catch(err => thunkApi.rejectWithValue( err.message ))
})

export const deleteTask = createAsyncThunk (
    'todo/deleteTodo',
    (payload, thunkApi) => {
        return axios.delete(`${payload.url}/${payload.task.id}`, payload)
        .then(res => res.data)
        .catch(err => thunkApi.rejectWithValue( err.message ))
    }
)

export const EditTodosLabel = createAsyncThunk (
    'todo/EditTodosLabel',
    (payload,thunkApi ) => {
        let newTodo = payload.value
        return axios.patch(`${payload.url}/${payload.todo.id}`, {todo: newTodo})
       .then(res => {
           return  res.data
       })
       .catch(err => thunkApi.rejectWithValue( err.message ))

    }
)

export const ChangeTodoStatus = createAsyncThunk(
    'todo/ChangeTodoStatus',
    (payload, thunkApi) => {
        return axios.patch( `${payload.url}/${payload.todo.id}` , {chekched : !payload.todo.chekched})
        .then(res => res.data)
        .catch(err => thunkApi.rejectWithValue( err.message ))
    }
)

export const RemovePriorityAsnc = createAsyncThunk(
    'todo/removePriorityAsc', 
    (payload, thunkApi) => {
        return axios.patch(`${payload.url}/${payload.todo.id}`, {order: !payload.todo.order})
        .then(res => res.data)
        .catch(err => thunkApi.rejectWithValue( err.message ))
    }
)
import { createSlice,nanoid } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:"todos",
    initialState:{
        todos:[
            {
                id:1,
                text:"Hello world"
            }
        ]
    },
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(newTodo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{
                return todo.id!==action.payload
            })
        }
    }
})

export const {addTodo,removeTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
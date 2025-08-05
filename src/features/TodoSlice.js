import { createSlice,nanoid } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:"todos",
    initialState:{
        todos:[
            {
                id:1,
                text:"First Task"
            }
        ],
        comp:[
            
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
        },
        editTodo:(state,action)=>{
            for(let i=0;i<state.todos.length;i++){
                if(state.todos[i].id===action.payload.id){
                    state.todos[i].text=action.payload.text
                }
            }
        },
        comptodo:(state,action)=>{
            const newcomptodo={
                id:nanoid(),
                text:action.payload
            }
            state.comp.push(newcomptodo)
        },
        removecompTodo:(state,action)=>{
            state.comp=state.comp.filter((elem)=>{
                return elem.id!==action.payload
            })
        },
    }
})

export const {addTodo,removeTodo,editTodo,comptodo,removecompTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
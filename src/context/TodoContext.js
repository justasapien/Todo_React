import { createContext,useContext } from "react";

export const TodoContext= createContext({
        todos:[
            {
                id:1,
                todo:"Task completed",
                completed: false,
            }
        ],
        addTodo: (todo)=>{},
        deleteTodo: (id)=>{},
        changeTodo:(id,todo) => {},
        yessno: (id)=>{}

})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const Todoprovider= TodoContext.Provider 
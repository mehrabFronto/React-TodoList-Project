import React, { useContext, useReducer } from "react";
import todosData from "../../db/Todos/TodosData";

const TodosContext = React.createContext();
const TodosContextDispatcher = React.createContext();

const reducer = (state, action) => {
   switch (action.type) {
      case "addTodo": {
         if (!action.title) {
            alert("please enter the todo title...");
            return state;
         }

         return [
            ...state,
            {
               id: Math.floor(Math.random() * 1000),
               title: action.title,
               createdAt: new Date().toISOString(),
               isCompleted: false,
            },
         ];
      }
      case "removeTodo": {
         return state.filter((todo) => todo.id !== action.id);
      }

      case "completeTodo": {
         const index = state.findIndex((todo) => todo.id === action.id);

         const selectedTodo = { ...state[index] };

         selectedTodo.isCompleted = !selectedTodo.isCompleted;

         const updatedTodos = [...state];
         updatedTodos[index] = selectedTodo;
         return updatedTodos;
      }

      case "editTodo": {
         const index = state.findIndex((todo) => todo.id === action.id);

         const selectedTodo = { ...state[index] };

         selectedTodo.title = action.todoTitle;

         const updatedTodos = [...state];
         updatedTodos[index] = selectedTodo;
         return updatedTodos;
      }

      case "filterTodo": {
         switch (action.value) {
            case "completed":
               return state.filter((todo) => todo.isCompleted);
            case "uncompledted":
               return state.filter((todo) => !todo.isCompleted);
            default:
               return state;
         }
      }

      default:
         return state;
   }
};

const TodosProvider = ({ children }) => {
   const [todos, dispatch] = useReducer(reducer, todosData);

   return (
      <TodosContext.Provider value={todos}>
         <TodosContextDispatcher.Provider value={dispatch}>
            {children}
         </TodosContextDispatcher.Provider>
      </TodosContext.Provider>
   );
};

export const useTodos = () => useContext(TodosContext);

export const useTodosActions = () => useContext(TodosContextDispatcher);

export default TodosProvider;

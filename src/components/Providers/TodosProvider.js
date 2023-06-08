import React, { useContext, useReducer } from "react";
import { toast } from "react-toastify";

const TodosContext = React.createContext();
const TodosContextDispatcher = React.createContext();

const reducer = (state, action) => {
   switch (action.type) {
      case "addTodo": {
         const todos = JSON.parse(localStorage.getItem("todos")) || [];
         const newTodoList = [
            ...todos,
            {
               id: new Date().getTime(),
               title: action.title,
               createdAt: new Date().toISOString(),
               isCompleted: false,
            },
         ];
         localStorage.setItem("todos", JSON.stringify(newTodoList));
         toast.success("comment successfully added");
         return newTodoList;
      }

      case "removeTodo": {
         // update localStorage
         {
            const todos = JSON.parse(localStorage.getItem("todos"));
            const filteredTodos = todos.filter((todo) => todo.id !== action.id);
            localStorage.setItem("todos", JSON.stringify(filteredTodos));
         }

         toast.success("comment successfully deleted");
         // update state
         {
            const filteredTodos = state.filter((todo) => todo.id !== action.id);
            return filteredTodos;
         }
      }

      case "completeTodo": {
         // update localStorage
         {
            const todos = JSON.parse(localStorage.getItem("todos"));
            const todoIndex = todos.findIndex((todo) => todo.id === action.id);
            const selectedTodo = todos[todoIndex];
            selectedTodo.isCompleted = !selectedTodo.isCompleted;
            const updatedTodos = todos;
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
         }

         // update state
         {
            const todoIndex = state.findIndex((todo) => todo.id === action.id);
            const selectedTodo = { ...state[todoIndex] };
            selectedTodo.isCompleted = !selectedTodo.isCompleted;
            const updatedTodos = [...state];
            updatedTodos[todoIndex] = selectedTodo;
            return updatedTodos;
         }
      }

      case "editTodo": {
         {
            const todos = JSON.parse(localStorage.getItem("todos"));
            const index = todos.findIndex((todo) => todo.id === action.id);
            const selectedTodo = todos[index];
            selectedTodo.title = action.todoTitle;
            const updatedTodos = todos;
            updatedTodos[index] = selectedTodo;
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
         }

         toast.success("comment successfully edited");

         {
            const index = state.findIndex((todo) => todo.id === action.id);
            const selectedTodo = { ...state[index] };
            selectedTodo.title = action.todoTitle;
            const updatedTodos = [...state];
            updatedTodos[index] = selectedTodo;
            return updatedTodos;
         }
      }

      case "filterTodo": {
         const todos = JSON.parse(localStorage.getItem("todos")) || [];
         switch (action.value) {
            case "completed":
               return todos.filter((todo) => todo.isCompleted);
            case "uncompledted":
               return todos.filter((todo) => !todo.isCompleted);
            default:
               return todos;
         }
      }

      default:
         return state;
   }
};

const TodosProvider = ({ children }) => {
   const [todos, dispatch] = useReducer(
      reducer,
      JSON.parse(localStorage.getItem("todos")) || [],
   );

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

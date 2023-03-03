import React, { useContext, useReducer } from "react";

const TodosContext = React.createContext();
const TodosContextDispatcher = React.createContext();

const reducer = (state, action) => {
   switch (action.type) {
      case "addTodo": {
         if (!action.title) {
            alert("please enter the todo title...");
            return state;
         }

         localStorage.setItem("todos", JSON.stringify(state));

         const newTodo = [
            ...state,
            {
               id: Math.floor(Math.random() * 1000),
               title: action.title,
               createdAt: new Date().toISOString(),
               isCompleted: false,
            },
         ];
         localStorage.setItem("todos", JSON.stringify(newTodo));
         return newTodo;
      }
      case "removeTodo": {
         const filteredTodos = state.filter((todo) => todo.id !== action.id);
         localStorage.setItem("todos", JSON.stringify(filteredTodos));
         return filteredTodos;
      }

      case "completeTodo": {
         const index = state.findIndex((todo) => todo.id === action.id);

         const selectedTodo = { ...state[index] };

         selectedTodo.isCompleted = !selectedTodo.isCompleted;

         const updatedTodos = [...state];
         updatedTodos[index] = selectedTodo;
         localStorage.setItem("todos", JSON.stringify(updatedTodos));
         return updatedTodos;
      }

      case "editTodo": {
         const index = state.findIndex((todo) => todo.id === action.id);

         const selectedTodo = { ...state[index] };

         selectedTodo.title = action.todoTitle;

         const updatedTodos = [...state];
         updatedTodos[index] = selectedTodo;
         localStorage.setItem("todos", JSON.stringify(updatedTodos));
         return updatedTodos;
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

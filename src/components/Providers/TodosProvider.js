import React, { useContext, useReducer } from "react";
import todosData from "../../db/Todos/TodosData";

const TodosContext = React.createContext();
const TodosContextDispatcher = React.createContext();

const reducer = (state, action) => {};

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

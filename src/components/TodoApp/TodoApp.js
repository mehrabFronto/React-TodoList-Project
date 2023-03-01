import Header from "../Header/Header";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { useTodosActions } from "../Providers/TodosProvider";

const TodoApp = () => {
   const dispatch = useTodosActions();
   return (
      <div className="app">
         <Header />
         <TodoForm
            onSubmitTodo={(title) => dispatch({ type: "addTodo", title })}
         />
         <TodoList />
      </div>
   );
};

export default TodoApp;

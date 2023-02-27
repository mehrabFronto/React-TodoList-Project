import Header from "../Header/Header";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
   return (
      <div>
         <Header />
         <TodoForm />
         <TodoList />
      </div>
   );
};

export default TodoApp;

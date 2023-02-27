import Todo from "../Todo/Todo";

const TodoList = () => {
   const renderTodos = () => {
      return (
         <div>
            <Todo />
         </div>
      );
   };

   return <>{renderTodos()}</>;
};

export default TodoList;

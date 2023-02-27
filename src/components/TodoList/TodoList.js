import { useTodos } from "../Providers/TodosProvider";
import Todo from "../Todo/Todo";

const TodoList = () => {
   const todos = useTodos();

   const renderTodos = () => {
      if (todos.length === 0)
         return (
            <div>
               <p>there are no todos yet</p>
               <span>add some todos</span>
            </div>
         );

      return (
         <div>
            {todos.map((todo) => {
               return (
                  <Todo
                     todo={todo}
                     key={todo.id}
                  />
               );
            })}
         </div>
      );
   };

   return <>{renderTodos()}</>;
};

export default TodoList;

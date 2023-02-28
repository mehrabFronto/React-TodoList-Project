import { useTodos } from "../Providers/TodosProvider";
import Todo from "../Todo/Todo";
import styles from "./todoList.module.css";

const TodoList = () => {
   const todos = useTodos();

   const renderTodos = () => {
      if (todos.length === 0)
         return (
            <div className={styles.Message}>
               <p>there are no todos yet</p>
               <span>add some todos</span>
            </div>
         );

      return (
         <div className={styles.todo__list}>
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

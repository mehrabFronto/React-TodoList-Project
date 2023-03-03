import { useTodos, useTodosActions } from "../Providers/TodosProvider";
import Todo from "../Todo/Todo";
import styles from "./todoList.module.css";
import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
   const todos = useTodos();
   const dispatch = useTodosActions();
   const [edit, setEdit] = useState({
      id: null,
      title: "",
      updated: "",
      isCompleted: false,
   });

   const editTodoHandler = (todoTitle) => {
      if (!todoTitle) return alert("please enter a todo...");
      dispatch({ type: "editTodo", id: edit.id, todoTitle });
      setEdit({
         id: null,
         title: "",
         updated: "",
         isCompleted: false,
      });
   };

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
                     onRemove={() =>
                        dispatch({ type: "removeTodo", id: todo.id })
                     }
                     onComplete={() =>
                        dispatch({ type: "completeTodo", id: todo.id })
                     }
                     onEdit={() => setEdit(todo)}
                  />
               );
            })}
         </div>
      );
   };

   return (
      <>
         {edit.id ? (
            <TodoForm
               onSubmitTodo={(todoTitle) => editTodoHandler(todoTitle)}
               edit={edit}
            />
         ) : (
            renderTodos()
         )}
      </>
   );
};

export default TodoList;

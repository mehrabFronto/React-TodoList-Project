import { useEffect, useRef, useState } from "react";
import { useTodos, useTodosActions } from "../Providers/TodosProvider";
import Todo from "../Todo/Todo";
import { BiX } from "react-icons/bi";
import styles from "./todoList.module.css";
import FormComponent from "../../common/Form/FormComponent";

const TodoList = () => {
   const todos = useTodos();
   const dispatch = useTodosActions();
   const [isEdit, setIsEdit] = useState(false);
   const [todoId, setTodoId] = useState(0);

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
                     onEdit={() => {
                        setIsEdit((prevState) => !prevState);
                        setTodoId(todo.id);
                     }}
                  />
               );
            })}
         </div>
      );
   };

   return (
      <>
         {renderTodos()}
         {isEdit && (
            <EditForm
               setIsEdit={setIsEdit}
               id={todoId}
            />
         )}
      </>
   );
};

export default TodoList;

const EditForm = ({ setIsEdit, id }) => {
   const [todoTitle, setTodoTitle] = useState("");
   const dispatch = useTodosActions();

   const submitHandler = (e) => {
      if (!todoTitle) {
         return alert("please enter the todo title...");
      }
      e.preventDefault();
      dispatch({ type: "editTodo", todoTitle, id });
      setIsEdit(false);
   };

   return (
      <div>
         {/* backdrop */}
         <div
            className={styles.backdrop}
            onClick={() => setIsEdit((prevState) => !prevState)}></div>
         {/* edit from */}
         <div className={styles.edit__form}>
            {/* header */}
            <div className={styles.edit__header}>
               <h2>Edit Todo</h2>
               <button
                  className={styles.x}
                  onClick={() => setIsEdit((prevState) => !prevState)}>
                  <BiX />
               </button>
            </div>
            {/* form */}
            <FormComponent
               onSubmit={submitHandler}
               inputValue={todoTitle}
               setTodoTitle={setTodoTitle}
               btnText="Update"
               isEdit={true}
            />
         </div>
      </div>
   );
};

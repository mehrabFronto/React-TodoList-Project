import styles from "./todoForm.module.css";
import { useState, useEffect, useRef } from "react";
import { useTodos, useTodosActions } from "../Providers/TodosProvider";

const TodoForm = ({ edit }) => {
   const [todoTitle, setTodoTitle] = useState("");

   const dispatch = useTodosActions();

   useEffect(() => {
      inpuRef.current.focus();
   }, []);

   const inpuRef = useRef(null);

   const submitHandler = (e) => {
      e.preventDefault();
      if (!todoTitle) {
         return alert("please enter the todo title...");
      }
      dispatch({ type: "addTodo", todoTitle });
      setTodoTitle("");
   };

   const changeHandler = (e) => {
      setTodoTitle(e.target.value);
   };

   return (
      <form onSubmit={submitHandler}>
         {!edit ? (
            <>
               <h2 className={styles.form__label}>todo title:</h2>
               <div className={styles.from__warpper}>
                  <input
                     type="text"
                     className={styles.form__input}
                     placeholder="todo..."
                     onChange={changeHandler}
                     value={todoTitle}
                     ref={inpuRef}
                  />
                  <button
                     type="submit"
                     className={styles.form__button}>
                     Add
                  </button>
               </div>
            </>
         ) : (
            <>
               <h2 className={styles.form__label}>update:</h2>
               <div className={styles.from__warpper}>
                  <input
                     type="text"
                     className={styles.form__input}
                     placeholder="update todo title..."
                     onChange={changeHandler}
                     value={todoTitle}
                     ref={inpuRef}
                  />
                  <button
                     type="submit"
                     className={styles.form__button}>
                     update
                  </button>
               </div>
            </>
         )}
      </form>
   );
};

export default TodoForm;

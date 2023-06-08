import { useTodosActions } from "../Providers/TodosProvider";
import styles from "./todoForm.module.css";
import { useState, useEffect, useRef } from "react";

const TodoForm = ({ edit }) => {
   const [todoTitle, setTodoTitle] = useState("");

   const dispatch = useTodosActions();

   const filterValue = JSON.parse(localStorage.getItem("filterValue"));

   useEffect(() => {
      inpuRef.current.focus();
   }, []);

   const inpuRef = useRef(null);

   const submitHandler = (e) => {
      if (!todoTitle) {
         return alert("please enter the todo title...");
      }
      e.preventDefault();
      dispatch({ type: "addTodo", title: todoTitle });
      dispatch({ type: "filterTodo", value: filterValue });
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

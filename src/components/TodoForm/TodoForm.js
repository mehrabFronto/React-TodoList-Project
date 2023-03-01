import styles from "./todoForm.module.css";
import { useState, useEffect, useRef } from "react";

const TodoForm = ({ onSubmitTodo }) => {
   const [todoTitle, setTodoTitle] = useState("");

   useEffect(() => {
      inpuRef.current.focus();
   }, []);

   const inpuRef = useRef(null);

   const submitHandler = (e) => {
      e.preventDefault();
      onSubmitTodo(todoTitle);
      setTodoTitle("");
   };

   const changeHandler = (e) => {
      setTodoTitle(e.target.value);
   };

   return (
      <form onSubmit={submitHandler}>
         <h2 className={styles.form__label}>todo title:</h2>
         <div className={styles.from__warpper}>
            <input
               type="text"
               className={styles.form__input}
               placeholder="todo..."
               value={todoTitle}
               onChange={changeHandler}
               ref={inpuRef}
            />
            <button
               type="submit"
               className={styles.form__button}>
               Add
            </button>
         </div>
      </form>
   );
};

export default TodoForm;

import styles from "./todoForm.module.css";

const TodoForm = () => {
   return (
      <form>
         <h2 className={styles.form__label}>todo title:</h2>
         <div className={styles.from__warpper}>
            <input
               type="text"
               className={styles.form__input}
               placeholder="todo..."
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

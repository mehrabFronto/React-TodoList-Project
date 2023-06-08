import { useEffect, useRef } from "react";
import styles from "./formComponent.module.css";

const FormComponent = ({
   onSubmit,
   inputValue,
   setTodoTitle,
   btnText,
   isEdit = "",
}) => {
   useEffect(() => {
      inpuRef.current.focus();
   }, []);

   const inpuRef = useRef(null);

   return (
      <form
         onSubmit={onSubmit}
         style={{ marginBottom: isEdit ? "2rem" : "" }}>
         <h2 className={styles.form__label}>todo title:</h2>
         <div className={styles.from__warpper}>
            <input
               style={{ border: isEdit ? "1px solid #11123b" : "" }}
               type="text"
               className={styles.form__input}
               placeholder="todo..."
               onChange={({ target }) => setTodoTitle(target.value)}
               value={inputValue}
               ref={inpuRef}
            />
            <button
               style={{ marginTop: isEdit ? "1px" : "" }}
               type="submit"
               className={styles.form__button}>
               {btnText}
            </button>
         </div>
      </form>
   );
};

export default FormComponent;

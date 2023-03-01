import styles from "./todo.module.css";
import { BiCheckCircle } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

const Todo = ({ todo, onRemove }) => {
   return (
      <div
         className={`${styles.todo} ${
            todo.isCompleted ? styles.complete : null
         }`}>
         {/* tood details */}
         <div className={styles.todo__detail}>
            {/* todo title */}
            <h2>{todo.title}</h2>

            {/* todo careted date */}
            <p>
               {new Date(todo.createdAt).toLocaleString("en", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
               })}
            </p>

            {/* completed line  */}
            <span
               className={`${
                  todo.isCompleted ? styles.lineThrow : null
               }`}></span>
         </div>
         {/* todo buttons */}
         <div className={styles.todo__buttonsConatiner}>
            {/* remove butoon */}
            <button
               className={styles.btn}
               onClick={onRemove}>
               <BiTrash />
            </button>

            {/* edit butoon */}
            <button className={styles.btn}>
               <BiEdit />
            </button>

            {/* complete butoon */}
            <button className={styles.btn}>
               <BiCheckCircle />
            </button>
         </div>
      </div>
   );
};

export default Todo;

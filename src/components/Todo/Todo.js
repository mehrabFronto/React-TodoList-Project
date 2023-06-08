import { useEffect, useState } from "react";
import styles from "./todo.module.css";
import {
   BiCheckCircle,
   BiDotsVerticalRounded,
   BiTrash,
   BiEdit,
} from "react-icons/bi";

const Todo = ({ todo, onRemove, onComplete, onEdit }) => {
   const [isOpen, setIsOpen] = useState(false);
   // get the window size
   const [windowSize, setWindowSize] = useState(getWindowSize());

   // get the window size on resize
   useEffect(() => {
      function handleWindowResize() {
         setWindowSize(getWindowSize());
      }

      window.addEventListener("resize", handleWindowResize);

      return () => {
         window.removeEventListener("resize", handleWindowResize);
      };
   }, []);

   function getWindowSize() {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
   }

   return (
      <div
         style={{
            marginBottom: isOpen && windowSize.innerWidth < 768 ? "6rem" : "",
         }}
         className={`${styles.todo} ${
            todo.isCompleted ? styles.complete : ""
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
         {/* todo buttons desktop */}
         <div className={styles.todo__buttonsConatiner}>
            {/* remove butoon */}
            <button
               className={styles.btn}
               onClick={onRemove}>
               <BiTrash />
            </button>

            {/* edit butoon */}
            <button
               className={styles.btn}
               onClick={onEdit}>
               <BiEdit />
            </button>

            {/* complete butoon */}
            <button
               className={styles.btn}
               onClick={onComplete}>
               <BiCheckCircle />
            </button>
         </div>
         {/* todo buttons mobile */}
         <div className={styles.todo__buttonsConatinerOnMobile}>
            <button
               className={`${styles.btn} ${styles.moreBtn}`}
               onClick={() => setIsOpen((prevState) => !prevState)}>
               <BiDotsVerticalRounded />
            </button>
            {isOpen && (
               <div className={styles.buttonsOnMobile}>
                  {/* remove butoon */}
                  <button
                     className={styles.btn}
                     onClick={onRemove}>
                     <BiTrash />
                  </button>

                  {/* edit butoon */}
                  <button
                     className={styles.btn}
                     onClick={onEdit}>
                     <BiEdit />
                  </button>

                  {/* complete butoon */}
                  <button
                     className={styles.btn}
                     onClick={onComplete}>
                     <BiCheckCircle />
                  </button>
               </div>
            )}
         </div>
      </div>
   );
};

export default Todo;

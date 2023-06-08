import FormComponent from "../../common/Form/FormComponent";
import { useTodosActions } from "../Providers/TodosProvider";
import { useState } from "react";

const TodoForm = () => {
   const [todoTitle, setTodoTitle] = useState("");

   const dispatch = useTodosActions();

   const filterValue = JSON.parse(localStorage.getItem("filterValue"));

   const submitHandler = (e) => {
      if (!todoTitle) {
         return alert("please enter the todo title...");
      }
      e.preventDefault();
      dispatch({ type: "addTodo", title: todoTitle });
      dispatch({ type: "filterTodo", value: filterValue });
      setTodoTitle("");
   };

   return (
      <FormComponent
         onSubmit={submitHandler}
         inputValue={todoTitle}
         setTodoTitle={setTodoTitle}
         btnText="Add"
      />
   );
};

export default TodoForm;

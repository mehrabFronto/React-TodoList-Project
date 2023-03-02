import { useEffect, useState } from "react";
import { useTodosActions } from "../Providers/TodosProvider";
import SelectComponent from "../../common/Select/Select";
import styles from "./filter.module.css";

const options = [
   { value: "", label: "All" },
   { value: "completed", label: "Completed" },
   { value: "uncompledted", label: "Uncompledted" },
];

const Filter = () => {
   const [value, setValue] = useState("");

   const dispatch = useTodosActions();

   const changeHandler = (selectedOption) => {
      setValue(selectedOption);
      dispatch({ type: "filterTodo", value: selectedOption.value });
   };

   useEffect(() => {
      setValue({ value: "", label: "All" });
   }, []);

   return (
      <div className={styles.filter}>
         <SelectComponent
            title="order by :"
            value={value}
            onChange={changeHandler}
            options={options}
         />
      </div>
   );
};

export default Filter;

const TodoForm = () => {
   return (
      <form>
         <h2>todo title:</h2>
         <div>
            <input
               type="text"
               placeholder="todo..."
            />
            <button type="submit">Add</button>
         </div>
      </form>
   );
};

export default TodoForm;

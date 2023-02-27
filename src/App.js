import TodosProvider from "./components/Providers/TodosProvider";
import TodoApp from "./components/TodoApp/TodoApp";

const App = () => {
   return (
      <div>
         <TodosProvider>
            <TodoApp />
         </TodosProvider>
      </div>
   );
};

export default App;

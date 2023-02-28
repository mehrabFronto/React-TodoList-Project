import TodosProvider from "./components/Providers/TodosProvider";
import TodoApp from "./components/TodoApp/TodoApp";
import "./app.css";

const App = () => {
   return (
      <div className="app">
         <TodosProvider>
            <TodoApp />
         </TodosProvider>
      </div>
   );
};

export default App;

import TodosProvider from "./components/Providers/TodosProvider";
import TodoApp from "./components/TodoApp/TodoApp";
import "./app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
   return (
      <div className="app">
         <ToastContainer style={{ fontSize: "1.6rem" }} />
         <TodosProvider>
            <TodoApp />
         </TodosProvider>
      </div>
   );
};

export default App;

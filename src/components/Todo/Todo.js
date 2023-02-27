import { BiCheckCircle } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

const Todo = () => {
   return (
      <div>
         {/* tood details */}
         <div>
            {/* todo title */}
            <h2>todo title</h2>

            {/* todo careted date */}
            <p>23/2/20</p>

            {/* completed line  */}
            <span></span>
         </div>
         {/* todo buttons */}
         <div>
            {/* remove butoon */}
            <button>
               <BiTrash />
            </button>

            {/* edit butoon */}
            <button>
               <BiEdit />
            </button>

            {/* complete butoon */}
            <button>
               <BiCheckCircle />
            </button>
         </div>
      </div>
   );
};

export default Todo;

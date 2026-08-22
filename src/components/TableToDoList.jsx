import { useDispatch, useSelector } from "react-redux";
import { removeToDoListThunk, toggleToDoListThunk } from "../redux/slice/toDoListSlice";

function TableReviewFilm() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.toDoState);

  return (
    <table className="self-start border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="border">Title</th>
          <th className="border px-3 py-2">To Do</th>
          <th className="border px-3 py-2">Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {todo.todolist.map((data, idx) => (
          <tr key={idx} className="border-b hover:bg-gray-50">
            <td className="border px-3 py-2">{data.title}</td>
            <td className="border px-3 py-2">{data.todo}</td>
            <td className="border px-3 py-2 grid gap-2">
              <button
                onClick={() => dispatch(removeToDoListThunk(data.title))}
                className="px-4 py-1 bg-red-500 text-white rounded-lg cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() => dispatch(toggleToDoListThunk(data.title))}
                className={`px-4 py-1 text-white rounded-lg cursor-pointer ${data.status === "inactive" ?"bg-green-400"  : "bg-red-400"}`}
              >
                {data.status === "inactive" ? "active" : "inactive"}
              </button>
            </td>            
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableReviewFilm;

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToDoListThunk } from "../redux/slice/toDoListSlice";

function ToDoListForm() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={handleSubmit((form) => {
        const newForm = {
            ...form,
            status: "inactive"
        }
        dispatch(addToDoListThunk(newForm));
        reset();
      })}
      className="px-8 py-4 w-max border border-gray-300 rounded-lg grid gap-4"
    >
      <h2 className="font-bold text-lg">To Do List Form</h2>
      <div className="grid gap-2">
        <label htmlFor="name">Title</label>
        <input
          type="text"
          {...register("title")}
          id="name"
          className="outline-none border border-gray-300 rounded-xl px-4 py-1"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="todo">To Do</label>
        <input
          type="text"
          {...register("todo")}
          id="todo"
          className="outline-none border border-gray-300 rounded-xl px-4 py-1"
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="bg-orange-600 text-white rounded-xl py-2 cursor-pointer"
      />
    </form>
  );
}

export default ToDoListForm;

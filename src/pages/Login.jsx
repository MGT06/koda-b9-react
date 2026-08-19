import { useContext } from "react";
import { useForm } from "react-hook-form";
import authContext from "../context/authContext";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (dataInput) => {
    dispatch({
      type: "login",
      payload: dataInput,
    });
    navigate("/profile")
  };
  return (
    <>
      <section className="h-full flex items-center justify-center">
        <div className="max-w-xl py-6 px-8 h-max bg-white rounded shadow-xl grow">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">
                Name:
              </label>
              <input
                type="text"
                {...register("username",{ required: "username is required"})}
                id="name"
                placeholder="username"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
            <button
              onClick={handleSubmit(onSubmit)}
              className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;

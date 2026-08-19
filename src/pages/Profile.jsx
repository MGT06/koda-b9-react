import { useContext } from "react";
import authContext from "../context/authContext";
import { useForm } from "react-hook-form";
import Header from "../components/Header";

function Profile() {
  const { state, dispatch } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (dataInput) => {
    dispatch({
      type: "update",
      payload: dataInput,
    });
  };
  return (
    <>
      <Header />
      <div className="min-h-screen bg-neutral-50 flex items-center mt-5 justify-center px-4">
        <div className="w-full max-w-md bg-white border border-neutral-200 rounded-2xl shadow-sm p-6">
          <h1 className="text-xl font-semibold text-neutral-900 mb-1">
            Edit Profil
          </h1>
          <p className="text-sm text-neutral-500 mb-6">
            Perbarui foto profil dan username kamu.
          </p>

          <div className="flex flex-col items-center mb-6">
            <div className="h-20 w-20 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center">
              {state.photo_profil ? (
                <img
                  src={state.photo_profil}
                  alt={state.username}
                  className="rounded-full"
                />
              ) : (
                <span className="text-xs text-neutral-400">Tidak ada foto</span>
              )}
            </div>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="photoUrl"
                className="text-sm font-medium text-neutral-700"
              >
                URL Foto Profil
              </label>
              <input
                id="photoUrl"
                type="url"
                {...register("urlPhoto", { required: "URL photo is required" })}
                placeholder="https://contoh.com/foto.jpg"
                className="border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-900 focus:outline-none"
              />
              {errors.urlPhoto && (
                <p className="text-red-500 text-sm">
                  {errors.urlPhoto.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="username"
                className="text-sm font-medium text-neutral-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="username"
                {...register("username", { required: "username is required" })}
                value={state.username}
                className="border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-blue-500"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="mt-2 bg-blue-600 text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-blue-700"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;

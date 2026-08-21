import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addReview } from "../redux/slice/filmSlice";

function FormFilm() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  //   const onSubmit = (dataInput) => {

  //     console.log(dataInput);
  //     // dispatch({
  //     //   type: "update",
  //     //   payload: dataInput,
  //     // });
  //   };

  return (
    <form
      onSubmit={handleSubmit((form) => {
        dispatch(addReview(form));
        reset();
      })}
      className="px-8 py-4 w-max border border-gray-300 rounded-lg grid gap-4"
    >
      <h2 className="font-bold text-lg">Survey Form</h2>
      <div className="grid gap-2">
        <label htmlFor="name">Nama</label>
        <input
          type="text"
          {...register("name")}
          id="name"
          className="outline-none border border-gray-300 rounded-xl px-4 py-1"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="umur">Umur</label>
        <input
          type="number"
          {...register("umur")}
          id="umur"
          className="outline-none border border-gray-300 rounded-xl px-4 py-1"
        />
      </div>
      <div className="flex gap-3">
        <p>Jenis Kelamin :</p>
        <label htmlFor="p">Perempuan</label>
        <input type="radio" {...register("jk")} value="perempuan" id="p" />
        <label htmlFor="l">laki-laki</label>
        <input type="radio" {...register("jk")} value="laki-laki" id="l" />
      </div>
      <div className="grid gap-2">
        <p>Apakah anda hobi menonton film?</p>
        <select
          {...register("hobi")}
          defaultValue="pilih"
          className="border border-gray-400 outline-none py-1 rounded-lg"
        >
          <option value="pilih" disabled>
            Pilih
          </option>
          <option value="ya">Ya</option>
          <option value="tidak">Tidak</option>
        </select>
      </div>
      <div className="grid gap-2">
        <p>Pilih Genre:</p>
        <div className="flex justify-between">
          <label htmlFor="action">Action</label>
          <input
            type="checkbox"
            {...register("genre")}
            value="action"
            id="action"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="horor">Horor</label>
          <input
            type="checkbox"
            {...register("genre")}
            value="horor"
            id="horor"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="komedi">Komedi</label>
          <input
            type="checkbox"
            {...register("genre")}
            value="komedi"
            id="komedi"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="drama">Drama</label>
          <input
            type="checkbox"
            {...register("genre")}
            value="Drama"
            id="drama"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="romance">Romance</label>
          <input
            type="checkbox"
            {...register("genre")}
            value="romance"
            id="romance"
          />
        </div>
      </div>
      <input
        type="submit"
        value="Submit"
        className="bg-orange-600 text-white rounded-xl py-2 cursor-pointer"
      />
    </form>
  );
}

export default FormFilm;

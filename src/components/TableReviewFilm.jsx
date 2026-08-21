import { useDispatch, useSelector } from "react-redux";
import { removeReview } from "../redux/slice/filmSlice";

function TableReviewFilm() {
  const dispatch = useDispatch();
  const review = useSelector((state) => state.filmState);

  return (
    <table className="self-start border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="border">Nama</th>
          <th className="border px-3 py-2">Umur</th>
          <th className="border px-3 py-2">Jenis Kelamin</th>
          <th className="border px-3 py-2">Apakah Hobi</th>
          <th className="border px-3 py-2">Genre</th>
          <th className="border px-3 py-2">Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {review.data.map((data) => (
          <tr key={data.name} className="border-b hover:bg-gray-50">
            <td className="border px-3 py-2">{data.name}</td>
            <td className="border px-3 py-2">{data.umur}</td>
            <td className="border px-3 py-2">{data.jk}</td>
            <td className="border px-3 py-2">{data.hobi}</td>
            <td className="border px-3 py-2">{data.genre.join(", ")}</td>
            <td className="border px-3 py-2">
              <button
                onClick={() => dispatch(removeReview(data.name))}
                className="px-4 py-1 bg-red-500 text-white rounded-lg cursor-pointer"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableReviewFilm;
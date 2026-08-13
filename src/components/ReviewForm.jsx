/**
 *  Form for submitting a new review (name & message).
 * @param {Object} props 
 * @param {import("react").Dispatch<import("react").SetStateAction<String>>} props.onAddReview
 * @returns 
 */

function ReviewForm({ onAddReview }) {
  function handleSubmit(e) {
    e.preventDefault();
    
    onAddReview((prevReviews) => [...prevReviews, {
        name: e.target.name.value,
        message: e.target.message.value,
    }]);

 
    e.target.reset();
  }
 
  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-5"
    >
      <h2 className="font-semibold text-slate-700">Berikan Review</h2>
 
      <div>
        <label className="text-sm text-slate-600 block mb-1">Nama</label>
        <input
          type="text"
          name="name"
          placeholder="Nama kamu"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
        />
      </div>
 
      <div>
        <label className="text-sm text-slate-600 block mb-1">Review</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tulis review kamu di sini..."
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
        />
      </div>
 
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm py-2 rounded-lg"
      >
        Kirim Review
      </button>
    </form>
  );
}

export default ReviewForm 
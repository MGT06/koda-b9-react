/**
 * Displays the list of submitted reviews.
 * @param {Object} props
 * @param {Object[]} props.reviews
 * @returns 
 */

function ReviewList({ reviews }) {
  return (
    <div>
      <h2 className="font-semibold text-slate-700 mb-3">
        Semua Review ({reviews.length})
      </h2>
 
      {reviews.length === 0 ? (
        <p className="text-sm text-slate-400 italic">Belum ada review.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-4"
            >
              <p className="font-medium text-slate-800">{review.name}</p>
              <p className="text-sm text-slate-600 mt-1">{review.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewList
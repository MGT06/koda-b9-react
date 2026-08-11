import { useState, useEffect } from "react";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Review() {
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem("product_reviews")),
  );

  useEffect(() => {
    localStorage.setItem("product_reviews", JSON.stringify(reviews));
  }, [reviews]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 py-10 px-4">
        <div className="max-w-2xl mx-auto ">
          <h1 className="text-2xl font-bold text-slate-800 mb-5">Product Review</h1>

          <ReviewForm onAddReview={setReviews} />

          <ReviewList reviews={reviews} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Review;

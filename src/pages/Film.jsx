import FormFilm from "../components/FormFilm";
import Header from "../components/Header";
import TableReviewFilm from "../components/TableReviewFilm";

function Film() {
  return (
    <>
    <Header/>
      <section className=" grid grid-cols-2 gap-3 px-10 py-5 ">
        <FormFilm />
        <TableReviewFilm />
      </section>
    </>
  );
}

export default Film;

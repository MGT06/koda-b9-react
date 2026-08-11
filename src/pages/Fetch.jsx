import { useEffect, useState } from "react";
import fetchPoke from "../utility/fetch";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Fetch() {
  const [datas, setData] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0";
        const data = await fetchPoke(url);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <>
      <Header />
      <div className="h-10">
        <form className="flex justify-center gap-3 mt-5">
          <input
            onChange={(e) => {
              setFilter(e.target.value.toLowerCase());
            }}
            type="text"
            name="search"
            className="border rounded-lg px-2"
            placeholder="Cari Pokemon"
          />
        </form>
      </div>
      <div className=" w-full grid grid-cols-4 gap-5 p-6">
        {datas
          .filter((data) => data.name.includes(filter))
          .map((data) => {
            return (
              <article
                key={data.id}
                className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-lg hover:border-neutral-300"
              >
                <div className="w-full rounded-xl bg-neutral-100 mb-3">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="h-full w-full"
                  />
                </div>

                <p className="text-2xl font-semibold text-neutral-900 text-center">
                  {data.name}
                </p>

                <div className="flex justify-center gap-1.5 mt-2">
                  {data.types.map((d) => (
                    <div
                      key={d}
                      className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600"
                    >
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
      </div>
      <Footer />
    </>
  );
}

export default Fetch;

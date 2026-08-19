import { useEffect, useState } from "react";
// import fetchPoke from "../utility/fetch";
// import typePoke from "../utility/typePoke";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useSearchParams } from "react-router";
import useFetch from "../hooks/useFetch";

function Fetch() {
  const [datas, setDatas] = useState();
  const [types, setTypes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
  );
  const typesFetch = useFetch("https://pokeapi.co/api/v2/type?limit=21");

  const name = searchParams.get("name") ?? "";
  const type = searchParams.get("type") ?? "";

  useEffect(() => {
    (async () => {
      try {
        // const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
        // const urlType = "https://pokeapi.co/api/v2/type?limit=21";
        // const data = await fetchPoke(url);
        // const dataType = await typePoke(urlType);
        // setData(data);
        if (!typesFetch.data) return;
        const typeReady = typesFetch.data.results.map((type) => {
          return {
            name: type.name,
          };
        });
        setTypes(typeReady);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [typesFetch.data]);
  // console.log(typesFetch)

  useEffect(() => {
    (async () => {
      try {
        if (!data) return;
        const getDetailPoke = data.results.map(async (poke) => {
          const detailResponse = await fetch(poke.url);
          if (!detailResponse) throw "gagal fetching";

          const detailResponseJSON = await detailResponse.json();

          const getId = detailResponseJSON.id;
          const spritesImage = detailResponseJSON.sprites.front_shiny;
          const arrayOfTypes = detailResponseJSON.types;

          const getTypesName = arrayOfTypes.map((pokemonTypes) => {
            return pokemonTypes.type.name;
          });

          const getAbilities = detailResponseJSON.abilities.map((ability) => {
            return ability.ability.name;
          });

          const getMove = detailResponseJSON.moves.map((move) => {
            return move.move.name;
          });

          const getStats = detailResponseJSON.stats.map((stat) => {
            return {
              name: stat.stat.name,
              base: stat.base_stat,
            };
          });

          return {
            id: getId,
            name: poke.name,
            ability: getAbilities,
            move: getMove,
            stats: getStats,
            types: getTypesName,
            img: spritesImage,
            weight: detailResponseJSON.weight,
          };
        });
        const pokePromise = await Promise.all(getDetailPoke);
        setDatas(pokePromise);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [data]);

  return (
    <>
      {loading && (
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      )}
      <Header />
      <div className="h-10">
        <form className="flex justify-center gap-3 mt-5">
          <input
            onChange={(e) => {
              searchParams.set("name", `${e.target.value}`);
              setSearchParams(searchParams);
            }}
            type="text"
            name="search"
            className="border rounded-lg px-2"
            placeholder="Cari Pokemon"
          />
          <select
            onChange={(e) => {
              searchParams.set("type", `${e.target.value}`);
              setSearchParams(searchParams);
            }}
            className="border rounded-lg px-2"
          >
            <option value="">Semua Tipe</option>
            {types &&
              types.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.name}
                </option>
              ))}
          </select>
        </form>
      </div>
      <div className=" w-full grid grid-cols-4 gap-5 p-6">
        {datas &&
          datas
            .filter((data) => data.name.includes(name.toLowerCase()))
            .filter((data) => (type ? data.types.includes(type) : true))
            .map((data) => {
              return (
                <article
                  key={data.id}
                  className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-lg hover:border-neutral-300"
                >
                  <Link to={`/pokemon/${data.id}/${data.name}`}>
                    <div className="w-full rounded-xl bg-neutral-100 mb-3 cursor-pointer">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="h-full w-full"
                      />
                    </div>
                  </Link>

                  <p className="text-2xl font-semibold text-neutral-900 text-center">
                    {data.name}
                  </p>

                  <div className="flex justify-center gap-1.5 mt-2">
                    {data.types.map((t) => (
                      <div
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600"
                      >
                        <span>{t}</span>
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

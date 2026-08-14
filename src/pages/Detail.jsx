import { useState, useEffect } from "react";
import pokeDetail from "../utility/pokeDetail";
import { useParams, Link } from "react-router";

function Detail() {
  const [datas, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const data = await pokeDetail(url);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [id]);

  if (!datas) return;

  return (
    <>
      <header className="text-center my-5">
        <Link to={"/pokemon"}  className="px-4 py-2 border  bg-neutral-100 rounded-2xl">Back</Link>
      </header>
      <main className="w-full flex justify-center">
        <div className="flex flex-col items-center rounded-xl w-1/2 border border-gray-200 p-4 shadow-sm bg-white">
          <img
            src={datas.img}
            alt={datas.name}
            className="w-32 h-32 object-contain mx-auto"
          />

          <h2 className="text-lg font-semibold text-center capitalize mt-2">
            {datas.name}{" "}
            <span className="text-gray-400 text-sm">#{datas.id}</span>
          </h2>

          <div className="flex justify-center gap-2 mt-2">
            {datas.types.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 capitalize"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="text-center mt-4 space-y-1 text-sm text-gray-700">
            <p><span className="font-medium">Weight:</span> {datas.weight / 10}kg</p>
            <p>
              <span className="font-medium">Ability:</span>{" "}
              {datas.ability.join(", ")}
            </p>
          </div>

          <div className="mt-4 w-80">
            <p className="text-sm font-medium text-gray-700 mb-1">Stats</p>
            <ul className="text-sm text-gray-600 space-y-0.5">
              {datas.stats.map((s) => (
                <li key={s.name} className="flex justify-between">
                  <span className="capitalize">{s.name}</span>
                  <span>{s.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-1">Moves</p>
            <div className="flex flex-wrap gap-1.5">
              {datas.move.map((m) => (
                <span
                  key={m}
                  className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 capitalize"
                >{m}</span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Detail;

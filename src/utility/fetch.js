async function fetchPoke(url, option = {}) {
  const response = await fetch(url, option);
  if (!response.ok) throw "Gagal Fetching";

  const firstData = await response.json();
  const getDetailPoke = firstData.results.map(async (poke) => {
    const detailResponse = await fetch(poke.url);
    if (!detailResponse) throw "gagal fetching";

    const detailResponseJSON = await detailResponse.json();

    const getId = detailResponseJSON.id
    const spritesImage = detailResponseJSON.sprites.front_shiny;
    const arrayOfTypes = detailResponseJSON.types;

    const getTypesName = arrayOfTypes.map((pokemonTypes) => {
      return pokemonTypes.type.name;
    });

    return{
        id: getId,
        name: poke.name,
        types: getTypesName,
        img: spritesImage,
    }
  });
  const pokePromise = await Promise.all(getDetailPoke)
  return pokePromise;
}

export default fetchPoke;

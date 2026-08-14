/**
 * 
 * @param {string} url 
 * @param {Object} option 
 * @returns 
 */

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

    const getAbilities = detailResponseJSON.abilities.map((ability) => {
      return ability.ability.name
    })

    const getMove = detailResponseJSON.moves.map((move) => {
        return move.move.name
    })

    const getStats = detailResponseJSON.stats.map((stat) => {
      return {
        name: stat.stat.name,
        base: stat.base_stat,
      }
    })

    return{
        id: getId,
        name: poke.name,
        ability: getAbilities,
        move: getMove,
        stats: getStats,
        types: getTypesName,
        img: spritesImage,
        weight: detailResponseJSON.weight
    }
  });
  const pokePromise = await Promise.all(getDetailPoke)
  return pokePromise;
}

export default fetchPoke;

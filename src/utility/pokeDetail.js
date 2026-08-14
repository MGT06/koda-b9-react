async function pokeDetail(url) {
  const response = await fetch(url);
  if (!response.ok) throw "Gagal Fetching";
  const detailResponseJSON = await response.json();

  return {
    id: detailResponseJSON.id,
    name: detailResponseJSON.name,
    ability: detailResponseJSON.abilities.map((a) => a.ability.name),
    move: detailResponseJSON.moves.map((m) => m.move.name),
    stats: detailResponseJSON.stats.map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
    types: detailResponseJSON.types.map((t) => t.type.name),
    img: detailResponseJSON.sprites.front_shiny,
    weight: detailResponseJSON.weight,
  };
}

export default pokeDetail;

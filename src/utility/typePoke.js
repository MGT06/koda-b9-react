async function typePoke(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Gagal fetch data: ${response.status}`);
  }

  const responseJSON = await response.json();

  return responseJSON.results.map((type) => ({
    name: type.name
  }));
}

export default typePoke;
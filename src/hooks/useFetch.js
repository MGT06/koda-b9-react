import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        if (!response) throw "gagal fetching";
        const readyData = await response.json();
        setData(readyData);

      } catch (e) {
        setError(e);
      }

      return setLoading(false);
    })();
  }, [url]);

  return {
    data,
    loading,
    error,
    setError,
  };
}

export default useFetch;

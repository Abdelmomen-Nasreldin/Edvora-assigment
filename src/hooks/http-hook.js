import axios from "axios";
import { useState, useEffect } from "react";

const useHttp = (url = null,  dependencies = [], method = 'get', data = null) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setLoading(true);
    let HTTP;
    if (method === "get") {
      HTTP = axios.get(url);
    } else if (method === "post") {
      HTTP = axios.post(url, data);
    }
    HTTP.then((response) => {
      setResponse(response.data);
    })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return [response, error, loading];
};

export default useHttp;

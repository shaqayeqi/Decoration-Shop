import React, { useEffect, useState } from "react";
import axios from "axios";
export default function useGetAPI(URL) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (URL) => {
      try {
        const response = await axios(URL);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    getData(URL);
  }, []);

  return { data, loading, error };
}

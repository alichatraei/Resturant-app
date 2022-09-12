import { useEffect, useState } from "react";
import yelp from "../Api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const searchApi = async (term) => {
    try {
      const resultAPI = await yelp.get("/search", {
        params: {
          term,
          location: "NewYork",
          limit: "50",
        },
      });
      setResult(resultAPI.data?.businesses);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    searchApi();
  }, []);
  return [result, searchApi];
};

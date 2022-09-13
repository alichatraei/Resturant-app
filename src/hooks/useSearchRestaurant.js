import { useEffect, useState } from "react";
import yelp from "../Api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [eachRestaurant, setEachRestaurant] = useState(null);
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
  const searchRestaurantApi = async (id) => {
    try {
      const resultApi = await yelp.get(`${id}`);
      resultApi && setEachRestaurant(resultApi.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchApi();
  }, []);
  return [result, searchApi, searchRestaurantApi, eachRestaurant];
};

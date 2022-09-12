import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer OnUQ1NIwpQvcTtAH3rRu4_xtgkOz9ddeBgbPOj6OifyS4mL8v3jkwpk9YgQU6M4KwgA3dU2JBzMBjaaWLP3PGrGlIiffvj-ooh2jCnrHMkc7MJDbqyYOwSL1Ft4eY3Yx",
  },
});

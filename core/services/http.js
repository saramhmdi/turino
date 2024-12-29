import QueryString from "qs";
import api from "../config/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const serverFetch = async (
  endpoint,
  query,
  cache = { cache: "force-cache" }
) => {
  let url = BASE_URL;
  if (endpoint) url += endpoint;
  if (query) url += `?${QueryString.stringify(query)}`;

  console.log(url)

  try {
    const res = await fetch(`${url}`, cache);
    const json = await res.json();
    // const json = api.get(`${url}`, cache)
    return json;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const serverPost = async (endpoint, body = {}, query = {}, headers = {}) => {
  let url = BASE_URL;
  if (endpoint) url += endpoint;
  if (query) url += `?${QueryString.stringify(query)}`;

  console.log(url);

  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });

    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return false;
  }
};



export { serverFetch , serverPost };

import axios from "axios";

const BASE_URL = "https://api.airtable.com/v0/";
const BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const TABLE_NAME = process.env.REACT_APP_TABLE_NAME;
const API_TOKEN = process.env.REACT_APP_AIRTABLE_API_TOKEN;
const URL = `${BASE_URL}${BASE_ID}/${TABLE_NAME}`;

const fetchAirtableData = async ({ method, url, body }) => {
  const headers = {
    "Content-Type": "application/json",

    Authorization: `Bearer ${API_TOKEN}`,
  };

  const config = {
    method: method,
    url: `${URL}${url ?? ""}`,
    headers: headers,
    ...(body ? { data: body } : {}),
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw new Error(
      `Error: ${error.response ? error.response.status : "Unknown"}`
    );
  }
};

export default fetchAirtableData;

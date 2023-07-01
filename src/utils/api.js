import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTQ2NzM2NDk2MTZjYmExMDg2MDU5MWU2YWU0NTcyNCIsInN1YiI6IjY0OTQ1OTQzZTIyZDI4MDBhZTk1ZDBmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-l_6Myl4q67GNCUv7QfIObhTu_k82oxVmvzoqtHnORo";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

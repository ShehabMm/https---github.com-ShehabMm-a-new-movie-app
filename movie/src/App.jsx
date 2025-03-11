import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import {useDebounce} from'react-use';


const API = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzUzYjk1MDkzMjdkNjE1YzJkNzg5MDY3ZDE0ZjUyNSIsIm5iZiI6MTY5NzgwOTQyMy40NDgsInN1YiI6IjY1MzI4NDBmZWZlMzdjMDExZTc0M2RhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4gADEfWobO0d-nfG2F5PJyUroKA4A58mbuCblJV4se0",
  },
};

const App = () => {
  const [searchword, setsearch] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [movies, setmovies] = useState([]);
  const [isLoading, setISloading] = useState(false);
const [deboucesearch, setdebounce]=useState('')
  const API_Base_URL = "https://api.themoviedb.org/3";
  const searchList = `https://api.themoviedb.org/3/search/movie?query=${searchword}&include_adult=false&language=en-US&page=1`;
  const API_KEY = import.meta.env.VITE_TMDB_API;

  const fetchPosts = async () => {
    setISloading(true);
    try {
      const response = await axios.get(
        searchword
          ? searchList
          : "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      setmovies(response.data.results);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [searchword]);
  useDebounce(()=>setdebounce(searchword),500, [searchword])

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./public/assets/hero-img.png" alt="hero banner" />
          <h1>
            Find
            <span className="text-gradient ml-2">Movies</span>You'll Enjoy
            without the Hussle
          </h1>
          <Search searchTerm={searchword} setsearchTerm={setsearch}  fetchPosts={fetchPosts} />
        </header>
        <section className="all-movies">
          <ul>
            {movies.map((all) => {
              return <MovieCard key={all.id} movie={all} />;
            })}

            {errorMessage && <p>{errorMessage}</p>}
          </ul>
        </section>
      </div>
  
    </main>
  );
};

export default App;

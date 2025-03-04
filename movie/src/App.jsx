import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import axios from 'axios';
import Spinner from './components/Spinner'

const API="https://api.themoviedb.org/3"

const API_KEY = import.meta.env.TMDB_API



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer meta.env.TMDB_API'
  }
};

// const fetchMovies = ()=>{get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//   .then(res => res.json())
//   .then( res => console.log(res))
 
//   .catch(err => console.error(err))
// }
const App = () => {
  const [search, setsearch] = useState("")
 const [errorMessage, seterrorMessage]=useState('')
 const [movies, setmovies]=useState([])

 const fetchPosts = async()=>{

  try {
    
  const response = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  setmovies(response.data.results)
  console.log(response.data.results)
  } catch (err) {
    console.log(err.response.data)
  }
  
  
  
      }

  useEffect(()=>{

   

    fetchPosts()
  },[])
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./public/assets/hero-img.png" alt="hero banner" />
          <h1>
            Find
            <span className="text-gradient ml-2">Movies</span>You'll Enjoy without
            the Hussle
          </h1>
          <Search searchTerm={search}  setsearchTerm={setsearch}/>

        </header> 
        <section className="all-movies">

{movies.map((all)=>{
return(

  <h1 key={all.id}>{all.title}</h1>
)


})}

<Spinner/>
<h2>All Movies</h2>

{errorMessage && <p>{errorMessage}</p>}
        </section>
      </div>
    </main>
  );
};

export default App;

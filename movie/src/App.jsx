import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [search, setsearch] = useState("Search")
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
        </header> 
       <Search searchTerm={search}  setsearchTerm={setsearch}/>
      </div>
    </main>
  );
};

export default App;

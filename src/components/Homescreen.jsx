import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";

function Homescreen() {
  return (
    <div>
      <Nav />

      <Banner />
      <div className="homescreen">
        <Row
          title="Popular Now On Netflix"
          fetchUrl={
            "https://api.themoviedb.org/3/movie/popular?api_key=b37f3ca0ea1516c056a240d6ba783991&language=en-US&page=1"
          }
          type="Popular"
        />
        <Row
          title="Popular Action Movies"
          fetchUrl={
            "https://api.themoviedb.org/3/discover/movie?api_key=b37f3ca0ea1516c056a240d6ba783991&with_genres=28"
          }
          type="Action"
        />
        <Row
          title="Popular Romantic Movies"
          fetchUrl={
            "https://api.themoviedb.org/3/discover/movie?api_key=b37f3ca0ea1516c056a240d6ba783991&with_genres=10749"
          }
          type="Romantic"
          className="mb-6"
        />
      </div>
    </div>
  );
}

export default Homescreen;

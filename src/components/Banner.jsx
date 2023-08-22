import React, { useState, useEffect } from "react";

function Banner() {
  const apiKey = "b37f3ca0ea1516c056a240d6ba783991";

  const [randomMovie, setRandomMovie] = useState(null);

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  }

  useEffect(() => {
    async function fetchRandomMovie() {
      // Schimbăm numele funcției pentru a evita ambiguitățile
      try {
        const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

        const response = await fetch(popularMoviesUrl);
        const data = await response.json();
        const popularMovies = data.results;

        const randomIndex = Math.floor(Math.random() * popularMovies.length);
        const randomMovie = popularMovies[randomIndex];

        setRandomMovie(randomMovie);
      } catch (error) {
        console.error("Eroare:", error.message);
      }
    }

    fetchRandomMovie();
  }, []);

  return (
    <header
      className="object-contain h-[500px] mt-[-100px] relative text-white"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="ml-[30px] pt-[140px] h-[190px]">
        <h1 className="text-[3rem] font-[800] pb-[0.3rem]">
          {randomMovie?.title}
        </h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="w-[45rem] leading-[1.3] pt-4 text-[0.8rem] max-w-[360px] h-[80px]">
          {randomMovie?.overview ? truncateText(randomMovie.overview, 150) : ""}
        </h1>
      </div>

      <div className="banner--fadeBottom pt-[310px]"></div>
    </header>
  );
}

export default Banner;

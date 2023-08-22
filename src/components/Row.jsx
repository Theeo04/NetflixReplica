import React, { useState, useEffect } from "react";

function Row({ title, fetchUrl, type }) {
  const [data, setData] = useState([]); // Stocăm datele în starea componentei

  useEffect(() => {
    // Efectuăm cererea API și actualizăm starea cu datele primite
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data:", data); // Afișăm datele primite în consolă
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [fetchUrl]); // Acest efect se declanșează când fetchUrl se schimbă

  return (
    <div>
      <h1 className="text-white text-[35px] pt-[45px] pl-[40px] pb-3 font-bold">
        {title}
      </h1>
      <div className="pl-[25px] flex overflow-x-auto space-x-7 custom-scrollbar text-xl">
        {data.results &&
          data.results.map((item) => (
            <div key={item.id}>
              <img
                className="w-[200px] container"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={`Movie backdrop ${item.id}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Row;

import styles from "./App.module.css";
import Sidebar from "./assets/pages/Sidebar.jsx";
import Infos from "./assets/pages/Infos.jsx";
import { useState, useEffect } from "react";
import { PostContext } from "./PostContext.jsx";

function App() {
  const apiKey = "e034ea8257004f52a81222112242312";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isCityValid, setIsCityValid] = useState(false);

  useEffect(() => {
    async function FetchData() {
      if (city.trim() === "") return;
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=6`
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          setIsCityValid(true);
        } else {
          setIsCityValid(false);
        }
      } catch (error) {
        alert(`Error fetching data: ${error}`);
        setIsCityValid(false);
      }
    }

    FetchData();
  }, [city]);

  console.log(weatherData);

  return (
    <PostContext.Provider value={{ city, setCity, weatherData, isCityValid }}>
      <div className={styles.container}>
        <Sidebar />
        <Infos />
      </div>
    </PostContext.Provider>
  );
}

export default App;

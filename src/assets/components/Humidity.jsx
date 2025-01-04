import styles from "./Humidity.module.css";
import { WiHumidity } from "react-icons/wi";
import { PostContext } from "../../PostContext";
import { useContext } from "react";

function Humidity() {
  const { weatherData } = useContext(PostContext);
  let iconStyle = {
    fontSize: "6rem",
    color: "#4fa3ff",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.3s ease-in-out",
  };
  return (
    <div className={styles.humidity}>
      <p>Humidity</p>
      <WiHumidity style={iconStyle} />
      {!weatherData ? "" : <h1>{weatherData.current.humidity}%</h1>}
      <progress
        id="file"
        value={weatherData.current.humidity}
        min="1"
        max="100"
      ></progress>
    </div>
  );
}

export default Humidity;

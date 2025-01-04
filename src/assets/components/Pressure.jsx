import styles from "./Pressure.module.css";
import { BiBarChart } from "react-icons/bi";
import { PostContext } from "../../PostContext";
import { useContext } from "react";

function Pressure() {
  const { weatherData } = useContext(PostContext);
  let iconStyle = {
    fontSize: "6rem",
    color: "#4fa3ff",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.3s ease-in-out",
  };
  return (
    <div className={styles.boxInfoDetails}>
      <p>Pressure</p>
      <BiBarChart style={iconStyle} />
      {!weatherData ? "" : <h1>{weatherData.current.pressure_mb} mb</h1>}
    </div>
  );
}

export default Pressure;

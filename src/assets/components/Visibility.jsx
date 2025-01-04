import styles from "./Visibility.module.css";
import { MdOutlineVisibility } from "react-icons/md";
import { PostContext } from "../../PostContext";
import { useContext } from "react";

function BoxInfoDetails() {
  const { weatherData } = useContext(PostContext);
  let iconStyle = {
    fontSize: "6rem",
    color: "#4fa3ff",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.3s ease-in-out",
  };
  return (
    <div className={styles.boxInfoDetails}>
      <p>Visibility</p>
      <MdOutlineVisibility style={iconStyle} />
      {!weatherData ? "" : <h1>{weatherData.current.vis_km} km</h1>}
    </div>
  );
}

export default BoxInfoDetails;

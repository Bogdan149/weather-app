import styles from "./WindStatus.module.css";
import Icon from "./Icon";
import { PostContext } from "../../PostContext";
import { useContext } from "react";

function WindStatus() {
  const { weatherData } = useContext(PostContext);
  return (
    <div className={styles.windstatus}>
      <p>Wind Status</p>
      <Icon weatherType="Wind" />
      {!weatherData ? "" : <h1>{weatherData.current.wind_mph}mph</h1>}
    </div>
  );
}

export default WindStatus;

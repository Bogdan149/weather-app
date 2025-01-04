import BoxInfo from "../components/BoxInfo";
import Day from "../components/Day";
import WindAndHumidity from "../components/WindAndHumidity";
import styles from "./Infos.module.css";
import { PostContext } from "../../PostContext";
import { useContext } from "react";

function Infos() {
  const weatherData = useContext(PostContext);

  if (!weatherData || !weatherData.weatherData) {
    return <div></div>;
  }

  return (
    <div className={styles.infos}>
      <Day />
      <h1 className={styles.headerSection}>Today&apos;s Highlights</h1>
      <WindAndHumidity />
      <BoxInfo />
    </div>
  );
}

export default Infos;

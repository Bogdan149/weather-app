import WindStatus from "./WindStatus";
import Humidity from "./Humidity";
import styles from "./WindAndHumidity.module.css";

function WindAndHumidity() {
  return (
    <div className={styles.windandhumidity}>
      <WindStatus />
      <Humidity />
    </div>
  );
}

export default WindAndHumidity;

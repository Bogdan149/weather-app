import styles from "./BoxInfo.module.css";
import Pressure from "./Pressure";
import Visibility from "./Visibility";

function BoxInfo() {
  return (
    <div className={styles.boxInfo}>
      <Visibility />
      <Pressure />
    </div>
  );
}

export default BoxInfo;

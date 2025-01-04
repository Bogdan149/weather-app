import Icon from "./Icon";
import styles from "./Today.module.css";
import { useContext } from "react";
import { PostContext } from "../../PostContext.jsx";

function Today() {
  const { city, isCityValid, weatherData } = useContext(PostContext);

  if (!weatherData) {
    return (
      <div className={styles.futureDay}>
        <p>Please search for a city</p>
      </div>
    );
  }

  if (!city) {
    return (
      <div className={styles.futureDay}>
        <p>City not found!</p>
      </div>
    );
  }

  return (
    <div className={styles.futureDay}>
      {isCityValid ? (
        <>
          <h1>{weatherData.location.name}</h1>
          <h2 className={styles.country}>{weatherData.location.country}</h2>
          <Icon
            weatherType={weatherData.current.condition.text}
            style={{
              fontSize: "8.6rem",
            }}
          />
          <p>{weatherData.current.condition.text}</p>
          <div className={styles["futureDay-info"]}>
            <h1>{Math.round(weatherData.current.temp_c)} &deg;</h1>
          </div>
        </>
      ) : (
        <p>City not Found</p>
      )}
    </div>
  );
}

export default Today;

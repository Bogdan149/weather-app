import Icon from "./Icon";
import styles from "./Day.module.css";
import { PostContext } from "../../PostContext";
import { useContext } from "react";

function Day() {
  const weatherData = useContext(PostContext);

  if (
    !weatherData ||
    !weatherData.weatherData ||
    !weatherData.weatherData.forecast
  ) {
    return <div></div>;
  }

  const forecast = weatherData.weatherData.forecast.forecastday;
  const forecastCorrected = forecast.slice(1, 6);

  const getDayOfWeek = (dateString) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    return daysOfWeek[date.getDay()];
  };

  console.log(weatherData);

  return (
    <div className={styles.forecastContainer}>
      {forecastCorrected.map((day, index) => (
        <div key={index} className={styles.futureDay}>
          <p>{index === 0 ? "Tomorrow" : getDayOfWeek(day.date)}</p>
          <Icon weatherType={day.day.condition.text} />
          <span>{day.day.condition.text}</span>
          <div className={styles["futureDay-info"]}>
            <p>Day</p>
            <p>Night</p>
          </div>
          <div className={styles["futureDay-info"]}>
            <span>{Math.round(day.day.maxtemp_c)} &deg;</span>
            <span>{Math.round(day.day.mintemp_c)} &deg;</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Day;

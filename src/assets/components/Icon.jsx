import { LuSnowflake } from "react-icons/lu";
import { TiWeatherShower } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherCloudy } from "react-icons/ti";
import { LuWind } from "react-icons/lu";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Icon({ weatherType, style }) {
  let iconStyle = {
    fontSize: "6rem",
    color: "#4fa3ff",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.3s ease-in-out",
    ...style,
  };

  const weatherCategoryMap = {
    Sunny: ["Sunny", "Clear"],
    Rainy: [
      "Rainy",
      "Showers",
      "Patchy rain possible",
      "Light rain",
      "Heavy rain",
      "Moderate rain",
      "Patchy light rain",
      "Moderate rain at times",
      "Heavy rain at times",
      "Light freezing rain",
      "Moderate or heavy freezing rain",
      "Light sleet",
      "Moderate or heavy sleet",
      "Light rain shower",
      "Moderate or heavy rain shower",
      "Torrential rain shower",
      "Light sleet showers",
      "Moderate or heavy sleet showers",
      "Patchy light rain with thunder",
      "Moderate or heavy rain with thunder",
      "Patchy rain nearby",
    ],
    Snow: [
      "Snow",
      "Blizzard",
      "Patchy snow possible",
      "Patchy sleet possible",
      "Patchy freezing drizzle possible",
      "Blowing snow",
      "Heavy snow",
      "Light snow",
      "Moderate snow",
      "Patchy heavy snow",
      "Ice pellets",
      "Patchy light drizzle",
      "Light drizzle",
      "Freezing drizzle",
      "Heavy freezing drizzle",
      "Patchy light snow",
      "Patchy moderate snow",
      "Light snow showers",
      "Moderate or heavy snow showers",
      "Light showers of ice pellets",
      "Moderate or heavy showers of ice pellets",
      "Patchy light snow with thunder",
      "Moderate or heavy snow with thunder",
    ],
    Cloudy: [
      "Cloudy",
      "Overcast",
      "Partly cloudy",
      "Mist",
      "Fog",
      "Freezing fog",
    ],
    Wind: ["Windy", "Gale", "Breezy", "Thundery outbreaks possible"],
  };

  const weatherIcons = {
    Sunny: <TiWeatherSunny style={iconStyle} />,
    Rainy: <TiWeatherShower style={iconStyle} />,
    Snow: <LuSnowflake style={iconStyle} />,
    Cloudy: <TiWeatherCloudy style={iconStyle} />,
    Wind: <LuWind style={iconStyle} />,
    Default: <TiWeatherPartlySunny style={iconStyle} />,
  };

  let category = Object.keys(weatherCategoryMap).find((key) =>
    weatherCategoryMap[key].includes(weatherType)
  );

  return weatherIcons[category] || weatherIcons.Default;
}

export default Icon;

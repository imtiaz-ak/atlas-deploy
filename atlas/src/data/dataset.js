import hotWeather from "../assets/hot_weather.svg";
import coldWeather from "../assets/cold_weather.svg";
import temperature from "../assets/temperature.svg";
import precipitation from "../assets/precipitation.svg";
import agriculture from "../assets/agriculture.svg";

const dataset = {
    "HOT WEATHER": {
        options: [
            "Longest Spell of +30 °C Days",
            "Number of Cooling degree days",
            "Extremely Hot Days",
            "Westboro",
            "Downtown",
            "Extremely Hot Days",
        ],
        bg: "rgba(252, 112, 136, 0.16)",
        icon: hotWeather,
    },
    "COLD WEATHER": {
        options: [
            "Byward Market",
            "Centretown",
            "Hintonburg",
            "Westboro",
            "Downtown",
            "Richmond Hill",
        ],
        bg: "rgba(27, 227, 215, 0.16)",
        icon: coldWeather,
    },
    TEMPERATURE: {
        options: [
            "Byward Market",
            "Centretown",
            "Hintonburg",
            "Westboro",
            "Downtown",
            "Richmond Hill",
        ],
        bg: "rgba(243, 195, 24, 0.16)",
        icon: temperature,
    },
    PRECIPITATION: {
        options: [
            "Byward Market",
            "Centretown",
            "Hintonburg",
            "Westboro",
            "Downtown",
            "Richmond Hill",
        ],
        bg: "rgba(73, 141, 242, 0.16)",
        icon: precipitation,
    },
    AGRICULTURE: {
        options: [
            "Byward Market",
            "Centretown",
            "Hintonburg",
            "Westboro",
            "Downtown",
            "Richmond Hill",
        ],
        bg: "rgba(71, 200, 120, 0.16)",
        icon: agriculture,
    },
};

export default dataset;

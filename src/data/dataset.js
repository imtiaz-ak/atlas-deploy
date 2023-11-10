import hotWeather from "../assets/hot_weather.svg";
import coldWeather from "../assets/cold_weather.svg";
import temperature from "../assets/temperature.svg";
import precipitation from "../assets/precipitation.svg";
import agriculture from "../assets/agriculture.svg";

const dataset = {
    "HOT WEATHER": {
        options: [
            "Cooling Degree Days",
            "Hot Days Over 35°C",
            "Hot Days Over 40°C",
            "Hot Days Over 45°C",
            "Summer Days"
        ],
        bg: "rgba(252, 112, 136, 0.16)",
        icon: hotWeather,
    },
    // "COLD WEATHER": {
    //     options: [
    //         "Byward Market",
    //         "Centretown",
    //         "Hintonburg",
    //         "Westboro",
    //         "Downtown",
    //         "Richmond Hill",
    //     ],
    //     bg: "rgba(27, 227, 215, 0.16)",
    //     icon: coldWeather,
    // },
    TEMPERATURE: {
        options: [
            "Surface Air Maximum",
            "Surface Air Minimum",
            "Maximum Over 26°C",
            "Maximum Over 29°C",
            "Single Day Maximum"
        ],
        bg: "rgba(243, 195, 24, 0.16)",
        icon: temperature,
    },
    PRECIPITATION: {
        options: [
            "Precipitation Percent Change",
            "Above 50mm",
            "Largest 1-Day Precipitation",
            "Largest 5-Day Precipitation",
        ],
        bg: "rgba(73, 141, 242, 0.16)",
        icon: precipitation,
    },
    // AGRICULTURE: {
    //     options: [
    //         "Byward Market",
    //         "Centretown",
    //         "Hintonburg",
    //         "Westboro",
    //         "Downtown",
    //         "Richmond Hill",
    //     ],
    //     bg: "rgba(71, 200, 120, 0.16)",
    //     icon: agriculture,
    // },
};

export default dataset;

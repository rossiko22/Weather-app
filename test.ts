import { run } from "./functions.js";
import { getMonthName } from "./functions.js";
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("submit");

  button?.addEventListener("click", async () => {
    const cityInput = document.getElementById("cityInput") as HTMLInputElement;
    const cityNameElement = document.getElementById("cityName");

    if (!cityNameElement) {
      return;
    }
    if (cityInput.value === "") {
      return;
    }
    const cityNameValue = cityInput.value;
    cityNameElement.textContent = cityInput.value;
    cityInput.value = "";

    const data = await run(cityNameValue);
    const [currentWeather, summaryForFourDays] = data;

    const topWeatherImageElement = document.getElementById("topWeatherImage");
    const downImageHabitatElement = document.getElementById("habitatimage"); // this is img
    const countryFlagImage = document.getElementById("countryFlag");

    const currentCityElement = document.getElementById("cityName");
    const currentTimeElement = document.getElementById("currentTimeId");
    const currentFeelsLikeElement = document.getElementById("feelsLike");
    const currentMaxTemperatureElement = document.getElementById("maxtemp");
    const currentMinTemperatureElement = document.getElementById("mintemp");
    const currentTemperatureElement =
      document.getElementById("currentTemperature");
    const currentWeatherMainElement =
      document.getElementById("currentWeatherMain");

    const currentTime = currentWeather.date;
    const feelsLike = currentWeather.feelsLike;
    const temp_max = summaryForFourDays[0].maxtemp;
    const temp_min = summaryForFourDays[0].mintemp;
    const temp = currentWeather.temp;
    const currentWeatherMain = currentWeather.main;

    const values = [
      cityNameValue[0].toUpperCase() +
        cityNameValue.substring(1, cityNameValue.length),
      currentTime,
      feelsLike,
      temp_max,
      temp_min,
      temp,
      currentWeatherMain,
    ];

    const elements = [
      currentCityElement,
      currentTimeElement,
      currentFeelsLikeElement,
      currentMaxTemperatureElement,
      currentMinTemperatureElement,
      currentTemperatureElement,
      currentWeatherMainElement,
    ];

    if (elements.length === values.length) {
      for (let i = 0; i < elements.length; i++) {
        if (elements[i] != null) {
          (elements[i] as HTMLElement).textContent = values[i];
        }
      }
    } else {
      console.log(
        "Element and values array not the same length, element or value missing !!!"
      );
    }

    countryFlagImage?.setAttribute(
      "src",
      `https://flagsapi.com/${currentWeather.countryCode}/flat/48.png`
    );
    switch (currentWeatherMain) {
      case "Clouds": {
        topWeatherImageElement?.setAttribute("src", "../images/cloudy.png");
        downImageHabitatElement?.setAttribute(
          "src",
          "../images/cloudyhouse.png"
        );
        break;
      }
      case "Rain": {
        topWeatherImageElement?.setAttribute("src", "../images/rainy.png");
        downImageHabitatElement?.setAttribute(
          "src",
          "../images/rainyhouse.png"
        );
        break;
      }
      case "Snow": {
        topWeatherImageElement?.setAttribute("src", "../images/snowy.png");
        downImageHabitatElement?.setAttribute(
          "src",
          "../images/snowyhouse.png"
        );
        break;
      }
      case "Clear": {
        topWeatherImageElement?.setAttribute("src", "../images/clear-day.png");
        downImageHabitatElement?.setAttribute("src", "../images/habitat.png");
        break;
      }
      default: {
        console.log("Current Weather");
      }
    }

    const days: string[] = [];
    const months: string[] = [];

    const lowerFourDayContainer = document.getElementById(
      "lowerfourdaycontainer"
    );
    lowerFourDayContainer!.textContent = "";
    for (const weatherHour of summaryForFourDays) {
      const dayDate = weatherHour.date.split(" ")[0].substring(8, 10);
      const monthDate = weatherHour.date.split(" ")[0].substring(5, 7);

      if (!days.includes(dayDate)) {
        days.push(dayDate);
      }

      if (!months.includes(monthDate)) {
        months.push(monthDate);
      }

      const newDiv = document.createElement("div");
      newDiv.classList.add("nexthour");

      const daycelsius = document.createElement("div");
      daycelsius.classList.add("daycelsius");
      daycelsius.textContent = weatherHour.temp;

      const daystatus = document.createElement("div");
      daystatus.classList.add("daystatus");
      const statusImage = document.createElement("img");

      switch (weatherHour.main) {
        case "Clouds": {
          statusImage?.setAttribute("src", "../images/cloudy.png");
          break;
        }
        case "Rain": {
          statusImage?.setAttribute("src", "../images/rainy.png");
          break;
        }
        case "Snow": {
          statusImage?.setAttribute("src", "../images/snowy.png");
          break;
        }
        case "Clear": {
          statusImage?.setAttribute("src", "../images/clear-day.png");
          break;
        }
        case "Sun": {
          statusImage?.setAttribute("src", "../images/sun.png");
          break;
        }
        default: {
          console.log("Current Weather");
        }
      }
      daystatus.appendChild(statusImage);

      const time = weatherHour.date.split(" ")[1].substring(0, 5);
      const dayhour = document.createElement("div");
      dayhour.classList.add("dayhour");
      dayhour.textContent = time;

      newDiv.appendChild(daycelsius);
      newDiv.appendChild(daystatus);
      newDiv.appendChild(dayhour);

      lowerFourDayContainer?.appendChild(newDiv);
    }

    const daysString = days.join(" & ");
    const monthNames = months.map((month) => getMonthName(parseInt(month)));

    const leftStringToPlace = days.length === 1 ? "Today" : "Today & Tommorow";
    const righthStringToPlace = `${monthNames.join(",")}, ${daysString}`;

    const todayTommorowMiddle = document.getElementById("todaytommorowmiddle");
    const dateMiddle = document.getElementById("datemiddle");

    if (todayTommorowMiddle && dateMiddle) {
      todayTommorowMiddle.textContent = leftStringToPlace;
      dateMiddle.textContent = righthStringToPlace;
    } else {
      console.log(
        "In middle date or todaytommorow element doesnt exist, line 185"
      );
    }
  });
});

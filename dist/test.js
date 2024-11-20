var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { run } from "./functions.js";
import { getMonthName } from "./functions.js";
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("submit");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        const cityInput = document.getElementById("cityInput");
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
        const data = yield run(cityNameValue);
        const [currentWeather, summaryForFourDays] = data;
        const topWeatherImageElement = document.getElementById("topWeatherImage");
        const downImageHabitatElement = document.getElementById("habitatimage"); // this is img
        const countryFlagImage = document.getElementById("countryFlag");
        const currentCityElement = document.getElementById("cityName");
        const currentTimeElement = document.getElementById("currentTimeId");
        const currentFeelsLikeElement = document.getElementById("feelsLike");
        const currentMaxTemperatureElement = document.getElementById("maxtemp");
        const currentMinTemperatureElement = document.getElementById("mintemp");
        const currentTemperatureElement = document.getElementById("currentTemperature");
        const currentWeatherMainElement = document.getElementById("currentWeatherMain");
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
                    elements[i].textContent = values[i];
                }
            }
        }
        else {
            console.log("Element and values array not the same length, element or value missing !!!");
        }
        countryFlagImage === null || countryFlagImage === void 0 ? void 0 : countryFlagImage.setAttribute("src", `https://flagsapi.com/${currentWeather.countryCode}/flat/48.png`);
        switch (currentWeatherMain) {
            case "Clouds": {
                topWeatherImageElement === null || topWeatherImageElement === void 0 ? void 0 : topWeatherImageElement.setAttribute("src", "../images/cloudy.png");
                downImageHabitatElement === null || downImageHabitatElement === void 0 ? void 0 : downImageHabitatElement.setAttribute("src", "../images/cloudyhouse.png");
                break;
            }
            case "Rain": {
                topWeatherImageElement === null || topWeatherImageElement === void 0 ? void 0 : topWeatherImageElement.setAttribute("src", "../images/rainy.png");
                downImageHabitatElement === null || downImageHabitatElement === void 0 ? void 0 : downImageHabitatElement.setAttribute("src", "../images/rainyhouse.png");
                break;
            }
            case "Snow": {
                topWeatherImageElement === null || topWeatherImageElement === void 0 ? void 0 : topWeatherImageElement.setAttribute("src", "../images/snowy.png");
                downImageHabitatElement === null || downImageHabitatElement === void 0 ? void 0 : downImageHabitatElement.setAttribute("src", "../images/snowyhouse.png");
                break;
            }
            case "Clear": {
                topWeatherImageElement === null || topWeatherImageElement === void 0 ? void 0 : topWeatherImageElement.setAttribute("src", "../images/clear-day.png");
                downImageHabitatElement === null || downImageHabitatElement === void 0 ? void 0 : downImageHabitatElement.setAttribute("src", "../images/habitat.png");
                break;
            }
            default: {
                console.log("Current Weather");
            }
        }
        const days = [];
        const months = [];
        const lowerFourDayContainer = document.getElementById("lowerfourdaycontainer");
        lowerFourDayContainer.textContent = "";
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
                    statusImage === null || statusImage === void 0 ? void 0 : statusImage.setAttribute("src", "../images/cloudy.png");
                    break;
                }
                case "Rain": {
                    statusImage === null || statusImage === void 0 ? void 0 : statusImage.setAttribute("src", "../images/rainy.png");
                    break;
                }
                case "Snow": {
                    statusImage === null || statusImage === void 0 ? void 0 : statusImage.setAttribute("src", "../images/snowy.png");
                    break;
                }
                case "Clear": {
                    statusImage === null || statusImage === void 0 ? void 0 : statusImage.setAttribute("src", "../images/clear-day.png");
                    break;
                }
                case "Sun": {
                    statusImage === null || statusImage === void 0 ? void 0 : statusImage.setAttribute("src", "../images/sun.png");
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
            lowerFourDayContainer === null || lowerFourDayContainer === void 0 ? void 0 : lowerFourDayContainer.appendChild(newDiv);
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
        }
        else {
            console.log("In middle date or todaytommorow element doesnt exist, line 185");
        }
    }));
});

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { apiKey } from "./api.js";
export const getCurrentTimezoneDT = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = yield fetch(url);
    if (!response.ok) {
        console.log("Error getCurrentTimezoneDT");
        throw new Error("error");
    }
    const data = yield response.json();
    console.log(data);
    return data.dt;
});
export const getMonthName = (monthNumber) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return months[monthNumber - 1];
};
export const getTime = (timestamp, timezoneOffset) => {
    const utcDate = new Date(timestamp * 1000);
    const date = new Date(utcDate.getTime() + timezoneOffset * 1000);
    return date;
};
export const getLatLon = (cityName) => __awaiter(void 0, void 0, void 0, function* () {
    const urlGeoEncoding = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
    try {
        const response = yield fetch(urlGeoEncoding);
        if (!response.ok) {
            throw new Error("Error fetching, getLatLon()");
        }
        const data = yield response.json(); // Type the response data correctly
        if (data.length === 0) {
            throw new Error("Data is empty");
        }
        const { name, lat, lon, country } = data[0];
        return { name, lat, lon, country };
    }
    catch (error) {
        console.log(error);
        throw error; // Re-throw the error if the caller needs to handle it
    }
});
export const getSummary = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
    const summaryUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
        const response = yield fetch(summaryUrl);
        if (!response.ok) {
            console.log("Response not ok:", response);
            throw new Error("Error fetching getSummary()");
        }
        const data = yield response.json();
        const unique = [];
        for (const element of data.list) {
            if (!unique.includes(element.weather[0].main)) {
                unique.push(element.weather[0].main);
            }
        }
        const arr = data.list;
        const currentDt = yield getCurrentTimezoneDT(lat, lon);
        const currentTimezoneOffset = data.city.timezone;
        const currentData = getTime(currentDt, currentTimezoneOffset);
        const neededDates = [];
        for (const o of arr) {
            if (neededDates.length === 4) {
                break;
            }
            const dataDate = new Date(o.dt_txt);
            if (currentData > dataDate) {
                continue;
            }
            neededDates.push(o);
        }
        const currentDataUTCString = currentData.toUTCString();
        const newData = data.list.filter((podatoci) => currentDataUTCString.split(" ")[1] ===
            getTime(podatoci.dt, currentTimezoneOffset).toUTCString().split(" ")[1]);
        const maxic = Math.max(...newData.map((obj) => obj.main.temp_max));
        const minic = Math.min(...newData.map((obj) => obj.main.temp_min));
        console.log(maxic);
        console.log(minic);
        console.log(newData);
        const structuredDates = [];
        for (const date of neededDates) {
            const obj = {
                temp: `${Math.round(date.main.temp - 273.15)}°C`,
                mintemp: `Min : ${Math.round(minic - 273.15)}°C`,
                maxtemp: `Max : ${Math.round(maxic - 273.15)}°C`,
                feelsLike: `${Math.round(date.main.feels_like - 273.15)}°C`,
                main: date.weather[0].main,
                date: date.dt_txt,
            };
            structuredDates.push(obj);
        }
        return structuredDates;
    }
    catch (error) {
        throw new Error("Unknown error");
    }
});
export const currentWeather = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error("Response is not ok currentWeather()");
        }
        const data = yield response.json();
        const date = getTime(data.dt, data.timezone);
        const obj = {
            temp: `${Math.floor(data.main.temp - 273.15)}°C`,
            mintemp: `Min: ${Math.floor(data.main.temp_min - 273.15)}°C`,
            maxtemp: `Max: ${Math.floor(data.main.temp_max - 273.15)}°C`,
            feelsLike: `Feels like: ${Math.floor(data.main.feels_like - 273.15)}°C`,
            main: data.weather[0].main,
            date: date.toUTCString(),
            countryCode: data.sys.country,
        };
        return obj;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
export const run = (cityName) => __awaiter(void 0, void 0, void 0, function* () {
    const latlon = yield getLatLon(cityName);
    const summaryForFourDays = yield getSummary(latlon.lat, latlon.lon);
    const currentWeatherStatus = yield currentWeather(latlon.lat, latlon.lon);
    return [currentWeatherStatus, summaryForFourDays];
});

export interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherList[];
}

interface WeatherList {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}
//Sub interfaces
interface Main {
  temp: number;
  feels_line: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Sys {
  pod: string;
}
//Sub interfaces

export interface LatLon {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

export interface SummaryWithCountry {
  temp: string;
  mintemp: string;
  maxtemp: string;
  feelsLike: string;
  main: string;
  date: string;
  countryCode: string;
}

export interface Summary {
  temp: string;
  mintemp: string;
  maxtemp: string;
  feelsLike: string;
  main: string;
  date: string;
}

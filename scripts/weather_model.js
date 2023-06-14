export class WeatherModel {

    constructor(data, dTime, day) {
        this._name = data.location.name;
        this._region = data.location.region;
        this._country = data.location.country;
        this._localTime = data.forecast.forecastday[day].hour[dTime].time;
        this._temp_c = data.forecast.forecastday[day].hour[dTime].temp_c;
        this._text = data.forecast.forecastday[day].hour[dTime].condition.text;
        this._icon = `https:${data.forecast.forecastday[day].hour[dTime].condition.icon}`;
        this._wind_dir = data.forecast.forecastday[day].hour[dTime].wind_dir;
        this._wind_kph = data.forecast.forecastday[day].hour[dTime].wind_kph;
        this._vis_km = data.forecast.forecastday[day].hour[dTime].vis_km;
    }

    get name() { return this._name }
    get region() { return this._region }
    get country() { return this._country }
    get localTime() { return this._localTime }
    get temp_c() { return this._temp_c }
    get text() { return this._text }
    get icon() { return this._icon }
    get wind_dir() { return this._wind_dir }
    get wind_kph() { return this._wind_kph }
    get vis_km() { return this._vis_km }

}
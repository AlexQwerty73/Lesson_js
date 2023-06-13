export class Visualizer {
    generateHtml(weather) {
        return `
        <img src="${weather.icon}" class="icon">
        <table width="100%" border="1">
        <tr>
        <th>Параметр</th>
        <th>Значення</th>
        </tr>

        <tr>
        <td class="param">Місто</td>
        <td class="value">${weather.name}</td>
        </tr>
        <tr>
        <td class="param">Регіон</td>
        <td class="value">${weather.region}</td>
        </tr>
        <tr>
        <td class="param">Країна</td>
        <td class="value">${weather.country}</td>
        </tr>
        
        <tr>
        <td class="param">Час</td>
        <td class="value">${weather.localTime}</td>
        </tr>
        <tr>
        <td class="param">Температура</td>
        <td class="value">${weather.temp_c}</td>
        </tr>
        <tr>
        <td class="param">Хмарність</td>
        <td class="value">${weather.text}</td>
        </tr>
        
        <tr>
        <td class="param">Швидкість вітру</td>
        <td class="value">${weather.wind_kph}</td>
        </tr>
        <tr>
        <td class="param">Напрям вітру</td>
        <td class="value">${weather.wind_dir}</td>
        </tr>
        <tr>
        <td class="param">Видимість</td>
        <td class="value">${weather.vis_km}</td>
        </tr>
        </table>
        `;
    }
}
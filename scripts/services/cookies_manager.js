export class CookiesManager {

    static setCookie(key, val, exp) {
        let _key = encodeURIComponent(key);
        let _val = encodeURIComponent(val);
        let _exp = parseInt(exp) * 24 * 3600;

        let cookies_string = `${_key}=${_val}`;
        if (exp > 0) {
            cookies_string += `; max-ege=${_exp}`
        }

        document.cookie = cookies_string;
        let massege = `Запис: ${key}=${val} - успішно збережений на термін ${exp} днів!`;
        alert(massege);
    }

    static getCookies() {
        let cookies = document.cookie
        let parts = cookies.split(';');
        let display_html = ``;

        for (let item of parts) {
            let params = item.trim().split('=');
            let _key = decodeURIComponent(params[0]);
            let _val = decodeURIComponent(params[1]);

            display_html += `
                <tr>
                    <td>${_key}</td>
                    <td>${_val}</td>
                </tr>
            `;
        }
        return display_html;
    }

}
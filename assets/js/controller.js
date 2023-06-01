import { Drawer } from "./drawer.js";

export class Controller {
    names = [];
    results = [];
    source = 'server/data.json';
    drawer=new Drawer();

    constructor() { }

    loadData() {
        $.getJSON(this.source, (json) => {
            let out = '';
            let name = '';
            let result = 0;
            for (let item of json.results) {
                name = item.name;
                result = item.result;
                this.names.push(name);
                this.results.push(result);

                out += `
                    <tr>
                        <td>${name}</td>
                        <td>${result}</td>
                    </tr>
                    `;
            }
            $('tbody').html(out);
        });
    }
    resetData() {
        $('tbody').html('');
        this.names.length = 0;
        this.results.length = 0;
    }
    activateLoadButton() {
        $('#load-btn').click(() => {
            this.loadData();
        });
    }
    activateResetButton() {
        $('#reset-btn').click(() => {
            this.resetData();
        });
    }
activateRectButton(){
    $('#rect-btn').click(()=>{
        let context = this.drawer.context
        this.drawer.buildAxios(context);
    });
}
}
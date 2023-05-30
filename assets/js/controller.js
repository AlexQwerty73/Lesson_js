export class Controller {
    names = [];
    results = [];
    context = null;
    source = 'server/data.json';
    colors = [
        'red', 'green', 'blue', 'orange', 'gray', 'purple',
        'bisque', 'lavender', 'navy', 'silver','darkcyan'
    ];

    constructor(){
        console.log('controller => 👍');
    }

    loadData(){
        
    }
}
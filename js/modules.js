const products = [
    { id: 1, title: 'product1', category: 'notebooks', img: 'p1.png', price: 500 },
    { id: 2, title: 'product2', category: 'phone', img: 'p2.png', price: 1000 },
    { id: 3, title: 'product3', category: 'pc', img: 'p3.png', price: 1200 },
    { id: 4, title: 'product4', category: 'ps', img: 'p4.png', price: 1500 },
    { id: 5, title: 'product5', category: 'phone', img: 'p5.png', price: 700 },
    { id: 6, title: 'product6', category: 'pc', img: 'p6.png', price: 2000 },
];

sortPriceToBig = (arr) => arr.sort((a, b) => a.price - b.price);
sortPriceToSmall = (arr) => arr.sort((a, b) => b.price - a.price);

sortCategory = (arr, category) => arr.sort((a) => a.category == category ? -1 : 1);

// renderHTMLSelect = (arr) => {
//     let category = [];
//     for (let item of arr) {
//         if (!(category.includes(item.category))) {
//             category.push(item.category)
//         }
//     }
//     let html = `<select name="category" id="category">`;
//     for (let item of category) {
//         html += `<option value="${item}">${item}</option>`
//     }
//     html += `</select>`;

//     return html;
// }

const renderHTMLSelect = (arr) => {
    const categorySet = new Set(arr.map(item => item.category));
    const options = Array.from(categorySet, item => `<option value="${item}">${item}</option>`);
    return `<select name="category" id="category">${options.join('')}</select>`;
};

document.querySelector('.container').innerHTML = renderHTMLSelect(products);

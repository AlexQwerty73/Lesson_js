const products = [
    { id: 1, title: 'product1', category: 'notebooks', img: 'img.jpg', price: 500 },
    { id: 2, title: 'product2', category: 'phone', img: 'phone.jpg', price: 1000 },
    { id: 3, title: 'product3', category: 'pc', img: 'pc.jpg', price: 1200 },
    { id: 4, title: 'product4', category: 'ps', img: 'img.jpg', price: 1500 },
    { id: 5, title: 'product5', category: 'phone', img: 'phone.jpg', price: 700 },
    { id: 6, title: 'product6', category: 'pc', img: 'pc.jpg', price: 2000 },
];

sortPriceToBig = (arr) => arr.sort((a, b) => a.price - b.price);
sortPriceToSmall = (arr) => arr.sort((a, b) => b.price - a.price);

sortCategory = (arr, category) => arr.sort((a) => a.category == category ? -1 : 1);

const renderHTMLSelect = (arr) => {
    const categorySet = new Set(arr.map(item => item.category));
    const options = Array.from(categorySet, item => `<option value="${item}">${item}</option>`);
    return `<select name="category" id="category"><option value="none">none</option>${options.join('')}<option value="ToSmallPrice">ToSmallPrice</option><option value="ToBigPrice">ToBigPrice</option></select>`;
};


document.querySelector('.select-container').innerHTML = renderHTMLSelect(products);

const renderHTMLShop = (arr) => {
    let html = ``;
    for (let item of arr) {
        html += `
            <div class="shop-item" id="${item.id}">
                <img src="../img/${item.img}" alt="#">
                <p>Title: <span>${item.title}</span></p>
                <p>Category: <span>${item.category}</span></p>
                <p>price: <span>${item.price}</span></p>
            </div>
        `
    }
    return html;
}

document.querySelector('.shop-container').innerHTML = renderHTMLShop(products);

const selectChangeCategory = (arr) => {
    const category = document.querySelector('#category').value;
    if (category != 'ToSmallPrice' && category != 'ToBigPrice') {
        return category == 'none' ? renderHTMLShop(arr) : renderHTMLShop(sortCategory(arr, category));
    } else {
        if (category == 'ToSmallPrice') {
            return renderHTMLShop(sortPriceToSmall(arr));
        } else if (category == 'ToBigPrice') {
            return renderHTMLShop(sortPriceToBig(arr));
        }
    }
}

category.addEventListener('change', () => {
    document.querySelector('.shop-container').innerHTML = selectChangeCategory(products);
});
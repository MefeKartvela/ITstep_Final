const product = [
    {
        id: 0,
        image: 'img/img1.png',
        title: 'Chocholate Cake',
        price: 120,
    },
    {
        id: 1,
        image: 'img/cake.jpg',
        title: 'Fruit Cake',
        price: 60,
    },
    {
        id: 2,
        image: 'img/chs.jpg',
        title: 'Cheese Cake',
        price: 230,
    },
    {
        id: 3,
        image: 'img/muffin.jpg',
        title: 'Muffin',
        price: 100,
    },
    {
        id: 4,
        image: 'img/skakee.JPG',
        title: 'Cake With Waffles',
        price: 230,
    },
    {
        id: 5,
        image: 'img/sckae.jpg',
        title: 'Dark Chocolate Cake',
        price: 100,
    },
    {
        id: 6,
        image: 'img/img1.png',
        title: 'Tart',
        price: 120,
    },
    {
        id: 7,
        image: 'img/cake.jpg',
        title: 'Fruit Tart',
        price: 60,
    },
    {
        id: 8 ,
        image: 'img/chs.jpg',
        title: 'Japphanese CheaseCake',
        price: 230,
    },
    {
        id: 9,
        image: 'img/muffin.jpg',
        title: 'Muffin With Dark Chocolate',
        price: 100,
    },
    {
        id:10,
        image: 'img/skakee.JPG',
        title: 'Cake With fruit And Chocolate',
        price: 230,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);

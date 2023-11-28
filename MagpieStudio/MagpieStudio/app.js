const product = [
    {
        id: 0,
        image: 'brekkyfaveearrings.jpg',
        title: 'Brekky Earrings',
        price: 20,
    },
    {
        id: 1,
        image: 'watermelonearrings.jpg',
        title: 'Watermelon Earrings',
        price: 15,
    },
    {
        id: 2,
        image: 'redtassleearrings.jpg',
        title: 'Red Tassle Earrings',
        price: 18,
    },
    {
        id: 3,
        image: 'burgerearrings.jpg',
        title: 'Burger Earrings',
        price: 20,
    },
     {
        id: 4,
        image: 'sunshinecactusearrings.jpg',
        title: 'Cactus Sunshine Earrings',
        price: 20,
    },
    {
        id: 5,
        image: 'icecreamearrings.jpg',
        title: 'Ice-cream Earrings',
        price: 18,
    },
    {
        id: 6,
        image: 'blacktasslepeacockearrings.jpg',
        title: 'Black Tassle Peacock Earrings',
        price: 20,
    },
    {
        id: 7,
        image: 'cuteskullearrings.jpg',
        title: 'Cute Skull Earrings',
        price: 15,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
                <div class='bottom'>
                <p>${title}</p>
                <h2>$${price}.00</h2>
                `+ "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" + `
            </div> 
        </div>`
    )
}).join('');
    
var cart = [];

function addtocart(a){
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0, total=0;
    document.getElementById("count").innerHTML = cart.length;
    document.getElementById("total").innerHTML = "$ " +0+".00";
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
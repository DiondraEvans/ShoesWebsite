let discountedPrice;
const newPrice = (price) => {
    discountedPrice = Math.abs(price / 2);

    return discountedPrice;
}

newPrice(250.30);
console.log(discountedPrice);

let price = document.getElementById("price");
price.innerHTML = `$${discountedPrice}`;

let pastPrice = document.getElementById("past-price");
pastPrice.innerHTML = `$250.30`
//connecting the js to server using fetch to send a model to the server

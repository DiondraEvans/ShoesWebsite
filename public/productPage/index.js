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
let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', async() =>{
    let brand = document.getElementById('brandString-input').value;
    let price = +document.getElementById('priceString-input').value;
    let description = document.getElementById('desString-input').value;
    let image = document.getElementById('image-input').value
    let stock = document.getElementById('stock-bool').value === "true" ? true : false;

    const shoe = {
        brand,
        price,
        description,
        image,
        stock
    }

    let response = await fetch('http://localhost:5000/create_shoes', {
        method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(shoe)
    })
})



let discountedPrice;
const newPrice = (price) => {
    discountedPrice = Math.abs(price / 2);

    return discountedPrice;
}


console.log(discountedPrice);

let price = document.getElementById("price");
price.innerHTML = `$${discountedPrice}`;

let pastPrice = document.getElementById("past-price");




let homeLink =  document.getElementById('Home');
homeLink.addEventListener('click', ()  => {
   window.location.href ="../index.html"
})
let databaseLink =  document.getElementById('Add-Shoes');
databaseLink.addEventListener('click', ()  => {
   window.location.href ="../DatabaseForm/index.html"
})



//connecting the js to server using fetch to send a model to the server
//http://localhost:5000/productpage/?idOfClickedItem=63cedc1130cea2493aa71119
const params = new Proxy(new URLSearchParams (window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
})
//Get the value of "some_key" in eg "https://example.com/?some_key=some_value" 
let id = params.idInQuery;
console.log(id)
//make sure to use the full address when fetching
const getData = async() =>{
    let data = await fetch (`http://localhost:5000/productPage/${id}`);
    let parsedData = await data.json()
        console.log(parsedData)

        let shoeInfo = document.getElementById('shoe-info')
        shoeInfo.innerHTML = parsedData.description


        let price = document.getElementById('price')
        newPrice(parsedData.price);
        price.innerHTML = `$${discountedPrice}`
        pastPrice.innerHTML = parsedData.price

        let brand = document.getElementById('shoe-brand')
        brand.innerHTML = parsedData.brand

        let image = document.getElementById('img-1')
        image.src = parsedData.img

        let shoeProductTitle = document.getElementById('shoe-product-title')
        shoeProductTitle.innerHTML = parsedData.product

}
getData();
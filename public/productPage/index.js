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
let UpdateShoeLink = document.getElementById('update-shoe');
UpdateShoeLink.addEventListener('click', ()  => {
    window.location.href ="../DatabaseForm/index.html"
 })
let image = document.getElementById('img-1')
let image1a = document.getElementById('img-1a')
let image2 = document.getElementById('img-2')
let image3 = document.getElementById('img-3')
let image4 = document.getElementById('img-4')




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
    // console.log(data)
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

        let image1a = document.getElementById('img-1a')
        image1a.src = parsedData.img

        let image2 = document.getElementById('img-2')
        image2.src = parsedData.img2

        let image3 = document.getElementById('img-3')
        image3.src = parsedData.img3

        let image4 = document.getElementById('img-4')
        image4.src = parsedData.img4

        let shoeProductTitle = document.getElementById('shoe-product-title')
        shoeProductTitle.innerHTML = parsedData.product


        //first opening the page you be met with whether the product is in or out of stock
        let invAmountDisplay = document.getElementById('invAmountDisplay')
        if (parsedData.invAmount <= 0){
            let addToCartbox = document.getElementById('add-sub-cart')
            addToCartbox.innerHTML = "OUT OF STOCK"
            invAmountDisplay.textContent = ""
        } else{
            invAmountDisplay.textContent = `${parsedData.invAmount} remaining`
        }
       
         //increasing the amount counter while decreasing the remaining inventory amount
        let amountCounter = document.getElementById('amtCounter')
        let firstButton = document.getElementById('first-btn')
        let sndButton = document.getElementById('snd-btn')
       
       amountCounter.textContent = 0
       console.log(parsedData.invAmount)
        sndButton.addEventListener('click', () =>{
            if(parsedData.invAmount > 0){
                amountCounter.textContent++
                parsedData.invAmount--
                console.log(parsedData.invAmount)
                invAmountDisplay.textContent = `${parsedData.invAmount} remaining`
            }else if (parsedData.invAmount = 0){
                invAmountDisplay.textContent = "0 remaining"
            } 
        })
        //increasing the amount counter while decreasing the remaining inventory amount
        firstButton.addEventListener('click', () =>{
            if(amountCounter.textContent > 0){
            amountCounter.textContent--
            parsedData.invAmount++
            console.log(parsedData.invAmount)
            invAmountDisplay.textContent = `${parsedData.invAmount} remaining`
            }
            
            else if(amountCounter.textContent <= 0){
                invAmountDisplay.textContent = ` ${parsedData.invAmount} remaining`
                amountCounter.textContent = 0;
                
            }
        })
        let amtCounter = document.getElementById('amtCounter')
        let cartBtn = document.getElementById('cart-btn')
        let invAmount = parsedData.invAmount
        cartBtn.addEventListener('click', async() =>{
            let newAmt =  invAmount - amtCounter.textContent
                console.log(newAmt)
                let response = await fetch(`http://localhost:5000/update_shoe_inv`,
                
                    {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                        id: id, 
                        invAmount: newAmt
                        })
                    }
                );
            //checking on the front end new inventory amount
                response.json().then((parsedData) =>{
                console.log(parsedData.invAmount)
                })
                let uploadStatusTag = document.getElementById('upload-status');
                console.log(response.status);
                if (response.status === 200) {
                    console.log(response);
                    console.log("upload complete!!!");
                    uploadStatusTag.textContent = "Added To Cart";
                    uploadStatusTag.style.color = "Green";
            
                } else{
                    console.log(response);
                    console.log("upload failed");
                    console.log;
                    uploadStatusTag.textContent = "Failed To add";
                    uploadStatusTag.style.color = "red";
            
                }
            
        })
        

}
getData();
let button = document.getElementById("search-button")


button.addEventListener('click', ()  => {
    let searchInput = document.getElementById('search-input').value
    window.location.href =`../index.html?idInQuery=${searchInput}`
 })


let photoArray = [image1a, image2,image3, image4];

photoArray.forEach((item) =>{
    
        item.addEventListener('click', () =>{
           
            image.src = item.src
     
        })

     

        
})


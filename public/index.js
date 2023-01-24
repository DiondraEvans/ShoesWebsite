console.log("Home Page");


let homeLink =  document.getElementById('Home');
homeLink.addEventListener('click', ()  => {
   window.location.href ="./index.html"
})
let databaseLink =  document.getElementById('Add-Shoes');
databaseLink.addEventListener('click', ()  => {
   window.location.href ="./DatabaseForm/index.html"
})

let display = document.getElementById("grid-of-shoes")
let button = document.getElementById("button")
const getData = async () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
      let value = params.idOfClickedItem; 

   
    let data = await fetch("/get_theShoe_data");
    data.json().then((parsedData) => {
        console.log(parsedData)
        parsedData.forEach((object) => {
        
                let divBox = document.createElement('div');
                divBox.style.width ="100%"
                divBox.style.display ="flex"
                divBox.style.flexDirection ="column"
                divBox.style.justifyContent ="center"
                divBox.style.alignItems ="center"
                let objectId = object._id
                divBox.setAttribute('id',objectId);
               
                
                let image = document.createElement('img');
                    image.src = object.img;
                    image.style.borderRadius ="10px";
                    image.style.width ="40%";
                    divBox.appendChild(image);
                
                    let brand = document.createElement('h3')
                    brand.innerHTML = object.brand;
                    divBox.appendChild(brand);

                    let price  = document.createElement('p')
                    price.innerHTML = `$${object.price}`;
                    divBox.appendChild(price);
                    
                    let description = document.createElement('p')
                    description.innerHTML = ` ${object.description}`;
                    description.style.width="70%";
                    description.style.textAlign ="center";
                    divBox.appendChild(description);

                    
                    let stock = document.createElement('p')
                     if(object.stock == true){
                            stock.innerHTML = "In Stock"
                        } else{
                            stock.innerHTML = "Out of Stock"
                        }
                    divBox.appendChild(stock);
                    display.appendChild(divBox)
                   
                    //now once div populates, use their individual ids to go to the product page and fetch data
                    document.getElementById(objectId).addEventListener('click', (event)  => {
                        window.location.href =`../productpage?idInQuery=${event.target.id}`
                     })
                    

            })
        
            
    })
    
}
getData()




button.addEventListener('click', async() =>{
    //getting rid of the elements that were seen when you first get on page so that the filtered elements can populate
    display.innerHTML = '';
    
    //To be able to store user input in a variable, we need to create a function that is called once the user presses the button. 
    //we stored the user input below to captire the value stores and then proceed with the rest of the function
    searchInput = document.getElementById("search-input").value
    //console.log the search input to certify it was captured (not necessary)
    console.log(searchInput);
    //grabbing data from the server and saving it to a variable
    let data = await fetch("/get_theShoe_data");

    //we need to parse the data from the object so that it is readable. I used the then function
    data.json().then((parsedData) => {

        //for each object in the parsed data, if it matches the user input then display the name in the display box.
        parsedData.forEach((object) =>{
            //filter for price of name
            if(object.brand.toLowerCase() == searchInput.toLowerCase() || object.price == searchInput){
                let divBox = document.createElement('div');
                divBox.style.width ="100%"
                divBox.style.display ="flex"
                divBox.style.flexDirection ="column"
                divBox.style.justifyContent ="center"
                divBox.style.alignItems ="center"
                let objectId = object._id
                divBox.setAttribute('id',objectId);
               
                
                let image = document.createElement('img');
                    image.src = object.img;
                    image.style.borderRadius ="10px";
                    image.style.width ="40%";
                    divBox.appendChild(image);
                
                    let brand = document.createElement('h3')
                    brand.innerHTML = object.brand;
                    divBox.appendChild(brand);

                    let price  = document.createElement('p')
                    price.innerHTML = `$${object.price}`;
                    divBox.appendChild(price);
                    
                    let description = document.createElement('p')
                    description.innerHTML = ` ${object.description}`;
                    description.style.width="70%";
                    description.style.textAlign ="center";
                    divBox.appendChild(description);

                    
                    let stock = document.createElement('p')
                     if(object.stock == true){
                            stock.innerHTML = "In Stock"
                        } else{
                            stock.innerHTML = "Out of Stock"
                        }
                    divBox.appendChild(stock);
                    display.appendChild(divBox)
                   
                    //now once div populates, use their individual ids to go to the product page and fetch data
                    document.getElementById(objectId).addEventListener('click', (event)  => {
                        window.location.href =`../productpage?idInQuery=${event.target.id}`
                     })
                    
              
            }
            //a condition to test that means if user types all or all cars, then put every object in the database in a div to display on the page
            else if (searchInput.toLowerCase() == "all" || searchInput.toLowerCase() == "all cars"){
                let divBox = document.createElement('div');
                divBox.style.width ="100%"
                divBox.style.display ="flex"
                divBox.style.flexDirection ="column"
                divBox.style.justifyContent ="center"
                divBox.style.alignItems ="center"
                let objectId = object._id
                divBox.setAttribute('id',objectId);
               
                
                let image = document.createElement('img');
                    image.src = object.img;
                    image.style.borderRadius ="10px";
                    image.style.width ="40%";
                    divBox.appendChild(image);
                
                    let brand = document.createElement('h3')
                    brand.innerHTML = object.brand;
                    divBox.appendChild(brand);

                    let price  = document.createElement('p')
                    price.innerHTML = `$${object.price}`;
                    divBox.appendChild(price);
                    
                    let description = document.createElement('p')
                    description.innerHTML = ` ${object.description}`;
                    description.style.width="70%";
                    description.style.textAlign ="center";
                    divBox.appendChild(description);

                    
                    let stock = document.createElement('p')
                     if(object.stock == true){
                            stock.innerHTML = "In Stock"
                        } else{
                            stock.innerHTML = "Out of Stock"
                        }
                    divBox.appendChild(stock);
                    display.appendChild(divBox)
                   
                    //now once div populates, use their individual ids to go to the product page and fetch data
                    document.getElementById(objectId).addEventListener('click', (event)  => {
                        window.location.href =`../productpage?idInQuery=${event.target.id}`
                     })
                    

            }    
    
        })        
    })
   
          
})


// divBox.addEventListener('click', ()  => {
//     window.location.href ="./DatabaseForm/index.html"
//  })
// //for each box distribute an object brand name
      // access parsed data object at index one an dhand code it and append to box
   


        // for(let i = 0; i < parsedData.length; i++){
        //     if(parsedData[i] == parsedData[0]){
        //         for(let i = 0; i < arrayOfShoes.length; i++){
        //             if(arrayOfShoes[i] == arrayOfShoes[0]){
        //                 let image = document.createElement('img')
        //                 image.src = parsedData[i].img;
        //                 image.style.borderRadius ="10px";
        //                 image.style.width ="60%";
        //                 arrayOfShoes[i].appendChild(image)
        //                 let brand = document.createElement('p')
        //                 brand.style.fontWeight="bold";
        //                 brand.innerHTML = parsedData[i].brand
        //                 arrayOfShoes[i].appendChild(brand)
        //                 let price = document.createElement('p');
        //                 price.innerHTML = `$${parsedData[i].price}`
        //                 arrayOfShoes[i].appendChild(price)
        //                 let description = document.createElement('p');
        //                 description.innerHTML = parsedData[i].description
                       
        //                 arrayOfShoes[i].appendChild(description)
        //                 let stock = document.createElement('p')
        //                 if( parsedData[i].stock == true){
        //                     stock.innerHTML = "In Stock"
        //                 } else{
        //                     stock.innerHTML = "Out of Stock"
        //                 }
        //                 arrayOfShoes[i].appendChild(stock)
        //                 }
        //         }
                
        //     }
        //     else if(parsedData[i] == parsedData[1]){
        //         for(let i = 0; i < arrayOfShoes.length; i++){
        //             if(arrayOfShoes[i] == arrayOfShoes[1]){
        //                 let image = document.createElement('img')
        //                 image.src = parsedData[i].img;
        //                 image.style.borderRadius ="10px";
        //                 image.style.width ="60%";
        //                 arrayOfShoes[i].appendChild(image)
        //                 let brand = document.createElement('p')
        //                 brand.style.fontWeight="bold";
        //                 brand.innerHTML = parsedData[i].brand
        //                 arrayOfShoes[i].appendChild(brand)
        //                 let price = document.createElement('p');
        //                 price.innerHTML = `$${parsedData[i].price}`
        //                 arrayOfShoes[i].appendChild(price)
        //                 let description = document.createElement('p');
        //                 description.innerHTML = parsedData[i].description
        //                 description.style.width ="90%";
        //                 arrayOfShoes[i].appendChild(description)
        //                 let stock = document.createElement('p')
        //                 if( parsedData[i].stock == true){
        //                     stock.innerHTML = "In Stock"
        //                 } else{
        //                     stock.innerHTML = "Out of Stock"
        //                 }
        //                 arrayOfShoes[i].appendChild(stock)
        //             }
        //         }
                
        //     }
        //     else if(parsedData[i] == parsedData[2]){
        //         for(let i = 0; i < arrayOfShoes.length; i++){
        //             if(arrayOfShoes[i] == arrayOfShoes[2]){
        //                 let image = document.createElement('img')
        //                 image.src = parsedData[i].img;
        //                 image.style.borderRadius ="10px";
        //                 image.style.width ="60%";
        //                 arrayOfShoes[i].appendChild(image)
        //                 let brand = document.createElement('p')
        //                 brand.style.fontWeight="bold";
        //                 brand.innerHTML = parsedData[i].brand
        //                 arrayOfShoes[i].appendChild(brand)
        //                 let price = document.createElement('p');
        //                 price.innerHTML = `$${parsedData[i].price}`
        //                 arrayOfShoes[i].appendChild(price)
        //                 let description = document.createElement('p');
        //                 description.innerHTML = parsedData[i].description
        //                 description.style.width ="70%";
        //                 arrayOfShoes[i].appendChild(description)
        //                 let stock = document.createElement('p')
        //                 if( parsedData[i].stock == true){
        //                     stock.innerHTML = "In Stock"
        //                 } else{
        //                     stock.innerHTML = "Out of Stock"
        //                 }
        //                 arrayOfShoes[i].appendChild(stock)
        //             }
        //         }
                
        //     }
        //     else if(parsedData[i] == parsedData[3]){
        //         for(let i = 0; i < arrayOfShoes.length; i++){
        //             if(arrayOfShoes[i] == arrayOfShoes[3]){
        //                 let image = document.createElement('img')
        //                 image.src = parsedData[i].img;
        //                 image.style.borderRadius ="10px";
        //                 image.style.width ="30%";
        //                 arrayOfShoes[i].appendChild(image)
        //                 let brand = document.createElement('p')
        //                 brand.style.fontWeight="bold";
        //                 brand.innerHTML = parsedData[i].brand
        //                 arrayOfShoes[i].appendChild(brand)
        //                 let price = document.createElement('p');
        //                 price.innerHTML = `$${parsedData[i].price}`
        //                 arrayOfShoes[i].appendChild(price)
        //                 let description = document.createElement('p');
        //                 description.innerHTML = parsedData[i].description
        //                 description.style.width ="70%";
        //                 arrayOfShoes[i].appendChild(description)
        //                 let stock = document.createElement('p')
        //                 if( parsedData[i].stock == true){
        //                     stock.innerHTML = "In Stock"
        //                 } else{
        //                     stock.innerHTML = "Out of Stock"
        //                 }
        //                 arrayOfShoes[i].appendChild(stock)
        //             }
        //         }
                
        //     }

        //     else if(parsedData[i] == parsedData[4]){
        //         for(let i = 0; i < arrayOfShoes.length; i++){
        //             if(arrayOfShoes[i] == arrayOfShoes[4]){
        //                 let image = document.createElement('img')
        //                 image.src = parsedData[i].img;
        //                 image.style.borderRadius ="10px";
        //                 image.style.width ="60%";
        //                 arrayOfShoes[i].appendChild(image)
        //                 let brand = document.createElement('p')
        //                 brand.style.fontWeight="bold";
        //                 brand.innerHTML = parsedData[i].brand
        //                 arrayOfShoes[i].appendChild(brand)
        //                 let price = document.createElement('p');
        //                 price.innerHTML = `$${parsedData[i].price}`
        //                 arrayOfShoes[i].appendChild(price)
        //                 let description = document.createElement('p');
        //                 description.innerHTML = parsedData[i].description
        //                 description.style.width ="70%";
        //                 arrayOfShoes[i].appendChild(description)
        //                 let stock = document.createElement('p')
        //                 if( parsedData[i].stock == true){
        //                     stock.innerHTML = "In Stock"
        //                 } else{
        //                     stock.innerHTML = "Out of Stock"
        //                 }
        //                 arrayOfShoes[i].appendChild(stock)
        //             }
        //         }
                
        //     }
        //     else if(parsedData[i] == parsedData[5]){
        //         for(let i = 0; i < arrayOfShoes.length; i++){
        //             if(arrayOfShoes[i] == arrayOfShoes[5]){
        //                 let image = document.createElement('img')
        //                 image.src = parsedData[i].img;
        //                 image.style.borderRadius ="10px";
        //                 image.style.width ="30%";
        //                 arrayOfShoes[i].appendChild(image)
        //                 let brand = document.createElement('p')
        //                 brand.style.fontWeight="bold";
        //                 brand.innerHTML = parsedData[i].brand
        //                 arrayOfShoes[i].appendChild(brand)
        //                 let price = document.createElement('p');
        //                 price.innerHTML = `$${parsedData[i].price}`
        //                 arrayOfShoes[i].appendChild(price)
        //                 let description = document.createElement('p');
        //                 description.innerHTML = parsedData[i].description
        //                 description.style.width ="70%";
        //                 arrayOfShoes[i].appendChild(description)
        //                 let stock = document.createElement('p')
        //                 if( parsedData[i].stock == true){
        //                     stock.innerHTML = "In Stock"
        //                 } else{
        //                     stock.innerHTML = "Out of Stock"
        //                 }
        //                 arrayOfShoes[i].appendChild(stock)
        //             }
        //         }
                
        //     }

        // }
        

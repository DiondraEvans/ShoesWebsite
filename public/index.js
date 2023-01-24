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
const getData = async () => {
    // let shoe1box = document.getElementById('shoe1')
    // let shoe2box = document.getElementById('shoe2')
    // let shoe3box = document.getElementById('shoe3')
    // let shoe4box = document.getElementById('shoe4')
    // let shoe5box = document.getElementById('shoe5')
    // let shoe6box = document.getElementById('shoe6')
    // let arrayOfShoes = [shoe1box,shoe2box,shoe3box,shoe4box,shoe5box,shoe6box];
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
            })
    })
}
       //for each box distribute an object brand name
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
        
getData()
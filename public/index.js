console.log("Home Page");




const getData = async () => {
    let shoe1box = document.getElementById('shoe1')
    let shoe2box = document.getElementById('shoe2')
    let shoe3box = document.getElementById('shoe3')
    let shoe4box = document.getElementById('shoe4')
    let shoe5box = document.getElementById('shoe5')
    let shoe6box = document.getElementById('shoe6')
    let arrayOfShoes = [shoe1box,shoe2box,shoe3box,shoe4box,shoe5box,shoe6box];
    let data = await fetch("/get_theShoe_data");
    data.json().then((parsedData) => {
        console.log(parsedData)
       //for each box distribute an object brand name
      // access parsed data object at index one an dhand code it and append to box
   


        for(let i = 0; i < parsedData.length; i++){
            if(parsedData[i] == parsedData[0]){
                for(let i = 0; i < arrayOfShoes.length; i++){
                    if(arrayOfShoes[i] == arrayOfShoes[0]){
                        let image = document.createElement('img')
                        image.src = parsedData[i].img;
                        image.style.borderRadius ="10px";
                        image.style.width ="60%";
                        arrayOfShoes[i].appendChild(image)
                        let brand = document.createElement('p')
                        brand.style.fontWeight="bold";
                        brand.innerHTML = parsedData[i].brand
                        arrayOfShoes[i].appendChild(brand)
                        let price = document.createElement('p');
                        price.innerHTML = `$${parsedData[i].price}`
                        arrayOfShoes[i].appendChild(price)
                        let description = document.createElement('p');
                        description.innerHTML = parsedData[i].description
                       
                        arrayOfShoes[i].appendChild(description)
                        let stock = document.createElement('p')
                        if( parsedData[i].stock == true){
                            stock.innerHTML = "In Stock"
                        } else{
                            stock.innerHTML = "Out of Stock"
                        }
                        arrayOfShoes[i].appendChild(stock)
                        }
                }
                
            }
            else if(parsedData[i] == parsedData[1]){
                for(let i = 0; i < arrayOfShoes.length; i++){
                    if(arrayOfShoes[i] == arrayOfShoes[1]){
                        let image = document.createElement('img')
                        image.src = parsedData[i].img;
                        image.style.borderRadius ="10px";
                        image.style.width ="60%";
                        arrayOfShoes[i].appendChild(image)
                        let brand = document.createElement('p')
                        brand.style.fontWeight="bold";
                        brand.innerHTML = parsedData[i].brand
                        arrayOfShoes[i].appendChild(brand)
                        let price = document.createElement('p');
                        price.innerHTML = `$${parsedData[i].price}`
                        arrayOfShoes[i].appendChild(price)
                        let description = document.createElement('p');
                        description.innerHTML = parsedData[i].description
                        description.style.width ="90%";
                        arrayOfShoes[i].appendChild(description)
                        let stock = document.createElement('p')
                        if( parsedData[i].stock == true){
                            stock.innerHTML = "In Stock"
                        } else{
                            stock.innerHTML = "Out of Stock"
                        }
                        arrayOfShoes[i].appendChild(stock)
                    }
                }
                
            }
            else if(parsedData[i] == parsedData[2]){
                for(let i = 0; i < arrayOfShoes.length; i++){
                    if(arrayOfShoes[i] == arrayOfShoes[2]){
                        let image = document.createElement('img')
                        image.src = parsedData[i].img;
                        image.style.borderRadius ="10px";
                        image.style.width ="60%";
                        arrayOfShoes[i].appendChild(image)
                        let brand = document.createElement('p')
                        brand.style.fontWeight="bold";
                        brand.innerHTML = parsedData[i].brand
                        arrayOfShoes[i].appendChild(brand)
                        let price = document.createElement('p');
                        price.innerHTML = `$${parsedData[i].price}`
                        arrayOfShoes[i].appendChild(price)
                        let description = document.createElement('p');
                        description.innerHTML = parsedData[i].description
                        description.style.width ="70%";
                        arrayOfShoes[i].appendChild(description)
                        let stock = document.createElement('p')
                        if( parsedData[i].stock == true){
                            stock.innerHTML = "In Stock"
                        } else{
                            stock.innerHTML = "Out of Stock"
                        }
                        arrayOfShoes[i].appendChild(stock)
                    }
                }
                
            }
            else if(parsedData[i] == parsedData[3]){
                for(let i = 0; i < arrayOfShoes.length; i++){
                    if(arrayOfShoes[i] == arrayOfShoes[3]){
                        let image = document.createElement('img')
                        image.src = parsedData[i].img;
                        image.style.borderRadius ="10px";
                        image.style.width ="30%";
                        arrayOfShoes[i].appendChild(image)
                        let brand = document.createElement('p')
                        brand.style.fontWeight="bold";
                        brand.innerHTML = parsedData[i].brand
                        arrayOfShoes[i].appendChild(brand)
                        let price = document.createElement('p');
                        price.innerHTML = `$${parsedData[i].price}`
                        arrayOfShoes[i].appendChild(price)
                        let description = document.createElement('p');
                        description.innerHTML = parsedData[i].description
                        description.style.width ="70%";
                        arrayOfShoes[i].appendChild(description)
                        let stock = document.createElement('p')
                        if( parsedData[i].stock == true){
                            stock.innerHTML = "In Stock"
                        } else{
                            stock.innerHTML = "Out of Stock"
                        }
                        arrayOfShoes[i].appendChild(stock)
                    }
                }
                
            }

            else if(parsedData[i] == parsedData[4]){
                for(let i = 0; i < arrayOfShoes.length; i++){
                    if(arrayOfShoes[i] == arrayOfShoes[4]){
                        let image = document.createElement('img')
                        image.src = parsedData[i].img;
                        image.style.borderRadius ="10px";
                        image.style.width ="60%";
                        arrayOfShoes[i].appendChild(image)
                        let brand = document.createElement('p')
                        brand.style.fontWeight="bold";
                        brand.innerHTML = parsedData[i].brand
                        arrayOfShoes[i].appendChild(brand)
                        let price = document.createElement('p');
                        price.innerHTML = `$${parsedData[i].price}`
                        arrayOfShoes[i].appendChild(price)
                        let description = document.createElement('p');
                        description.innerHTML = parsedData[i].description
                        description.style.width ="70%";
                        arrayOfShoes[i].appendChild(description)
                        let stock = document.createElement('p')
                        if( parsedData[i].stock == true){
                            stock.innerHTML = "In Stock"
                        } else{
                            stock.innerHTML = "Out of Stock"
                        }
                        arrayOfShoes[i].appendChild(stock)
                    }
                }
                
            }
            else if(parsedData[i] == parsedData[5]){
                for(let i = 0; i < arrayOfShoes.length; i++){
                    if(arrayOfShoes[i] == arrayOfShoes[5]){
                        let image = document.createElement('img')
                        image.src = parsedData[i].img;
                        image.style.borderRadius ="10px";
                        image.style.width ="30%";
                        arrayOfShoes[i].appendChild(image)
                        let brand = document.createElement('p')
                        brand.style.fontWeight="bold";
                        brand.innerHTML = parsedData[i].brand
                        arrayOfShoes[i].appendChild(brand)
                        let price = document.createElement('p');
                        price.innerHTML = `$${parsedData[i].price}`
                        arrayOfShoes[i].appendChild(price)
                        let description = document.createElement('p');
                        description.innerHTML = parsedData[i].description
                        description.style.width ="70%";
                        arrayOfShoes[i].appendChild(description)
                        let stock = document.createElement('p')
                        if( parsedData[i].stock == true){
                            stock.innerHTML = "In Stock"
                        } else{
                            stock.innerHTML = "Out of Stock"
                        }
                        arrayOfShoes[i].appendChild(stock)
                    }
                }
                
            }

        }
        // for (let i = 0; i < parsedData.length; i++){
        //       console.log(parsedData[i].brand)
        // }




        // parsedData.forEach((object) =>{
        //    let brand = document.createElement('p')
        //    brand.innerHTML = `brand: ${object.brand}`
          
        //     shoe1box.appendChild(brand)
        
        // })
    
    })
}

getData()
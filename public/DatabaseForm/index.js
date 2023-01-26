let homeLink =  document.getElementById('Home');
homeLink.addEventListener('click', ()  => {
   window.location.href ="/index.html"
})
let databaseLink =  document.getElementById('Add-Shoes');
databaseLink.addEventListener('click', ()  => {
   window.location.href ="./DatabaseForm/index.html"
})

let arrayOfData = []
console.log(arrayOfData)

let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', async () =>{
    let brand = document.getElementById('brandString-input').value;
    let price = +document.getElementById('priceString-input').value;
    let description = document.getElementById('desString-input').value;
    let image = document.getElementById('image-input').value
    let image2 = document.getElementById('image-input2').value
    let image3 = document.getElementById('image-input3').value
    let image4 = document.getElementById('image-input4').value
    let product = document.getElementById('product-input').value
    let invAmount = document.getElementById('inv-input').value

    const shoe = {
        brand,
        price,
        description,
        image,
        image2,
        image3,
        image4,
        product,
        invAmount
    }

    let response = await fetch('http://localhost:5000/create_shoes', {
        method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(shoe)
    })
        
      
         // now redirecting back to the home page
        // window.location.href ="../index.html"
     
     
})

const getDataForDropdown = async () => {
    let data = await fetch("/get_theShoe_data");
    data.json().then((parsedData) => {
        console.log(parsedData)
       
            parsedData.forEach((object) => {
                let divbox = document.createElement('div')
                
                let product = document.createElement('p')
                product.innerHTML = object.product;
                divbox.appendChild(product)
                let price = document.createElement('p')
                price.innerHTML = ` $${object.price}`;
                divbox.appendChild(price)
                
                let option = document.createElement('option')
                var objectId = object._id
                option.setAttribute('id', object._id);
                option.setAttribute('value', object._id);
          
                // option.setAttribute('id', objectId)
                option.appendChild(divbox)
                let select = document.getElementById('shoe-selector')
                select.appendChild(option);
                
                arrayOfData.push(objectId)
                    
            })
    })
}
getDataForDropdown()



let updateButton = document.getElementById('update-button')
updateButton.addEventListener('click', async()  => {
    for(let i = 0; i< arrayOfData.length; i++){
        if(document.getElementById(arrayOfData[i]).selected == true){
        let id = (arrayOfData[i]);
        
        let brand = document.getElementById('updatebrandString-input').value;
    
        let price = +document.getElementById('updatepriceString-input').value;
        let description = document.getElementById('updatedesString-input').value;
        let image = document.getElementById('updateimage-input').value
        let image2 = document.getElementById('updateimage-input2').value
        let image3 = document.getElementById('updateimage-input3').value
        let image4 = document.getElementById('updateimage-input4').value
        let product = document.getElementById('updateproduct-input').value
        let invAmount = document.getElementById('updateinv-input').value
        console.log(id);
        console.log(stock);
        
        let response = await fetch(`http://localhost:5000/update_shoe`,
        // example of code to update fruit
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                id: id, 
                brand: brand, 
                price: price, 
                description: description,
                image: image,
                image2: image2,
                image3: image3,
                image4: image4,
                product: product,
                invAmount: invAmount
            })
        }
        );
        //using parsed data from the variable of the post request to get the id needed to 
        //pass it to the url as a query to direct me to the product page
        response.json().then((parsedData) =>{
            window.location.href =`../productpage?idInQuery=${parsedData._id}`
        })
        
        }
    }
})

let deleteButton = document.getElementById('delete-button')
deleteButton.addEventListener('click', async()  => {
    for(let i = 0; i< arrayOfData.length; i++){
        if(document.getElementById(arrayOfData[i]).selected == true){
        let id = (arrayOfData[i]);
        
        // let brand = document.getElementById('updatebrandString-input').value;
    
        // let price = +document.getElementById('updatepriceString-input').value;
        // let description = document.getElementById('updatedesString-input').value;
        // let image = document.getElementById('updateimage-input').value
        // let product = document.getElementById('updateproduct-input').value
        // let invAmount = document.getElementById('updateinv-input').value
        console.log(id);
        let response = await fetch(`http://localhost:5000/delete_shoe/${id}`,
        // example of code to update fruit
        {
            method: 'DELETE'
        }
        );

        let finalData = await response.json();

        console.log(finalData);
        // now redirecting back to the home page
        // window.location.href ="../index.html"
        }
    }
})
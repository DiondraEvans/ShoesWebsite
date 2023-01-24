let homeLink =  document.getElementById('Home');
homeLink.addEventListener('click', ()  => {
   window.location.href ="/index.html"
})
let databaseLink =  document.getElementById('Add-Shoes');
databaseLink.addEventListener('click', ()  => {
   window.location.href ="./DatabaseForm/index.html"
})


let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', async () =>{
    let brand = document.getElementById('brandString-input').value;
    let price = +document.getElementById('priceString-input').value;
    let description = document.getElementById('desString-input').value;
    let image = document.getElementById('image-input').value
    let product = document.getElementById('product-input').value
    let stock = document.getElementById('stock-bool').value === "true" ? true : false;

    const shoe = {
        brand,
        price,
        description,
        image,
        product,
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


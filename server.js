//require all documents first
const express = require ('express');
const mongoose = require('mongoose');

 
require('dotenv').config()

//have a create route, create data in mongoDB
let shoes = require('./models/shoes');

//create express app
const app = express();
// write down all app.use
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
//remember to input user and pass variables
let connectionString =`mongodb+srv://${process.env.mongoUsername}:${process.env.mongoPassword}@mongosetupcluster.anqqbl8.mongodb.net/EcommerceSite?retryWrites=true&w=majority`

//mongoose requirements
mongoose.set('strictQuery', false);
//connect expresss to Mongo
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.post('/create_shoes', async (req, res) =>{
    //what ever information we get from the body will be saved to individual variables.
    //destructuring remember the variables must match the index.js file to create/read new model variables to send to MongoDB
    const {id: id, brand: brand, price: price, description: description, image: img, image2: img2, image3: img3, image4: img4, product: product, stock: stock} = req.body;

    //create an object to act as a JSON document to send to the database. we will save it to the returnedValue
    //your going to create an object to send to the database based off of the object you posted to the route. the route will send the object to mongoose aka: fruit.js and verify that it can be sent to the database. so making
    //sure that the await fruit.create variable is the same as the one you required on your server.js is important
    let returnedValue = await shoes.create({
        brand,
        price,
        description,
        img,
        img2,
        img3,
        img4,
        product,
        stock
    })
    console.log(brand)
    console.log(returnedValue);
    if (returnedValue) {
        console.log("upload complete");
    }
    //sending the returned value from the object we created
    res.send(returnedValue);
})
app.get('/get_theShoe_data', async (req, res) => {
    let response = await shoes.find({});
    // console.log(response)
    res.send(response)
   
    // get data from database
    //used an array method to combine both arrays
    // send it back to front end
   
    

})
//get specific shoe data using a parameter
//when testing the server, ake sure you ctrl c and restart it again sometimes that helps
app.get('/productPage/:id', async (req, res) => {
    let id= req.params.id
    // console.log(JSON.stringify(id))
   
   let response = await shoes.findOne({"_id":id});;

    // let response = await shoes.find({_id : JSON.stringify(id)});
    // console.log(response)
    res.send(response)
})


app.put('/update_shoe', async (req, res) => {
    let id = req.body.id
    let brand = req.body.brand
    let price = req.body.price
    let description = req.body.description
    let image = req.body.image
    let image2 = req.body.image2
    let image3 = req.body.image3
    let image4 = req.body.image4
    let product = req.body.product
    let stock = req.body.stock
    let myData = {
        brand: brand, 
        price: price, 
        description: description, 
        img: image, 
        img2: image2,
        img3: image3,
        img4: image4,
        product: product,
        stock: stock
    };

    let response = await shoes.findByIdAndUpdate(id, myData, {new:true});
    console.log(response);
    res.send(response);
})
app.delete('/delete_shoe/:variable', async (req, res) =>{
    let id = req.params.variable
   
    let response = await shoes.deleteOne({_id: id});

   console.log(response);

   res.send({data: `deleted ${response.deletedCount} items.`})
})

app.listen(5000,function (){
    console.log('listening on port');
});


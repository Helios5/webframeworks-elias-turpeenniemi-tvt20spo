

const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

let products = [{
    
    name: 'JBL-kuulokkeet',
    price: '50',
    manufacturer: 'JBL',
    description: 'Bluetooth JBL-kuulokkeet',
    category: 'kuulokkeet'
},
{
    
    name: 'SONY-kuulokkeet',
    price: 500,
    manufacturer: 'SONY',
    description: 'Langalliset SONY-kuulokkeet',
    category: 'kuulokkeet'

}];

//let productIdAccumulator = products.length;

app.get('/',(req, res) => {
    res.send('Hello customer! Type http://localhost:3000/products, to see our products');
    
})

app.get('/products',(req,res) => {
    res.json(products);
})

app.get('/products/:id',(req,res) => {
    console.log(req.params);
    res.json(products[req.params.id]);
})

app.get('/products/:name',(req,res) =>{
    res.json(products[req.params.name]);
})

app.post('/products',(req, res) => {
    console.log('Creating a new product');
    console.log(req.body);
    //productIdAccumulator++;
    products.push({
        //id: productIdAccumulator++,
        name: req.body.name,
        age: req.body.price,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        category: req.body.category
    })
    res.send('product created')
})

app.delete('/products/:id',(req, res) =>{
    res.send('Delete product with id ' + req.params.id);
})

app.delete('/products',(req, res) =>{
    res.send('Delete all products');
})

app.put('/products/:id', (req, res) => {
    res.send('Modifying product')
})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})
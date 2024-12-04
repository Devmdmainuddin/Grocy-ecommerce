require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes=require("./routes/product-routes/index")


const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL ;

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));
app.use(express.json());

mongoose.connect(MONGO_URL)
.then(()=>console.log("Mongodb Connected"))
.catch(error => console.log(error));


app.use('/product', productRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({
        success: false,
        message: 'Something went wrong'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
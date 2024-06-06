const express = require('express');
const mongoose = require('mongoose');


const url = "mongodb+srv://haisamismail71:haisam_71@learn-mongo-db.uumxoe2.mongodb.net/Second_App"
mongoose.connect(url).then(()=> {
    console.log("mongodb server started");
});

//init connect
const app = express();

//middelwere
app.use(express.json());


const productsRouter = require('./routes/products.route');
app.use('/api/products', productsRouter);






app.listen(3002, ()=> {
    console.log("listing on port 3002");
});
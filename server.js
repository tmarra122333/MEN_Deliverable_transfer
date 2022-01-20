// Any imports
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const guitars = require('./models/guitars_model.js')

// const music = require('./models/music_model.js');

// const allProducts = products.find();
// My variables
const PORT = 4000;

// Set our app
app.set('view engine', 'ejs');

// App.use for adding (This is middleware app.use)
app.use(methodOverride('_method'))



app.use((req, res, next) => {    
    console.log("I'm running for another new route")
	console.log(`${req.method} ${req.originalUrl}`);    
	next();
});

// Routes

app.get("/", function(req, res) {
    res.send("Here I am and working :)")
})

// app.get("/new", function(req, res) {
//     res.send("Make me Work now!!")
// })

app.get('/new', (req,res) =>
res.render("new.ejs"));


app.post('/guitars', (req, res) => {
    // Start by console logging things out here for the req, then req.body
    guitars.create(req.body, (error, createdProduct) => {
        if(error) console.log(error);
        console.log(createdProduct);


        res.redirect("/guitars");
    })
})

app.get("/*", (req, res) => {
    const context = { error: req.error };
    return res.status(404).render("404", context);
});
        
app.listen(PORT, function() {
    console.log(`I am listening on port ${PORT}`)
});

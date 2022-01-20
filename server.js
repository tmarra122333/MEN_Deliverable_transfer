// Any imports
const express = require('express');
const app = express();
const methodOverride = require('method-override');

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
        
app.get("/*", (req, res) => {
    const context = { error: req.error };
    return res.status(404).render("404", context);
});
        
app.listen(PORT, function() {
    console.log(`I am listening on port ${PORT}`)
});
const express = require('express');
const { guitars } = require('.');
const router = express.Router();
const { Guitars } = require('../models')

router.get('/', (req,res) => {
    Guitars.find({}, (error, foundGuitars) => {
        res.render("index.ejs", {guitars: foundGuitars})

    })
})



Guitars.deleteMany({}, (error, deletedGuitars) => {
    if(error) console.log(error);
    Guitars.insertMany(
        [
            {
                name: "Tommys Toy Box of Sweet Guitars",
                price: 100,
                image: "https://images.reverb.com/image/upload/s--2wCz2zeN--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1513635526/uq03ed5v5wpacdn6osdv.jpg",
                description: "This guitar is so sweet, it plays itself",
            },
            {
                name: "Donkey Kongs Drum Lab",
                price: 200,
                image: "https://database.blocksrvt.com/CollectionsData/Images/Collection-64/Blks_Decor%20CP_Bongo%20Drum.png",
                description: "bingo bango BONGO drum the night away",
            },
            {
                name: "Condensor Microphones",
                price: 500,
                image: "https://www.audiogearz.com/wp-content/uploads/2019/06/AKG-C414-XLII-Angle-e1561165565694-1.jpg",
                description: "This microphone will sing you to sleep",
            },
        ],
          function (error, createdGuitars) {
            if (error) {
              return console.log(error);
            }
            console.log("=== Seed Complete ===");
            console.log(createdGuitars);
          }
    )
    console.log(deletedGuitars)
}
)

router.post('/', (req, res) => {
    // Start by console logging things out here for the req, then req.body
    Guitars.create(req.body, (error, createdGuitars) => {
        if(error) console.log(error);
        console.log(createdGuitars);
        
        
        res.redirect("/guitars");
    })
})

router.get('/new', (req,res) =>
res.render("new.ejs"));



module.exports = router

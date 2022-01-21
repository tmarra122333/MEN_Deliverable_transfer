require('../config/db.connection');

module.exports = {
    // This is exporting my Product model
    Guitars: require('./guitars_model'),
    // This is exporting my Review model
    Review: require('./review_model'),
    // This is exporting my user model
    User: require('./user_model')
}
const mongoose = require('mongoose');

const connectionStr = 'mongodb+srv://Tmarra122333:Titan15@sei.z1qzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connectionStr)

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
});

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error 😥', error);
});

mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'));

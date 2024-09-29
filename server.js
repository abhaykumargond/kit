const express = require('express');
const path = require('path');
const iotRoutes = require('./iotServer'); // Import IoT routes
const { getBalance, getTotalSupply } = require('./contractInteraction'); // Import contract interaction functions

const app = express();

// Set the views directory to point to your views folder outside of backend
app.set('views', path.join(__dirname, '../views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route for rendering the home page
app.get('/', async (req, res) => {
    // Example call to get balance (replace with actual public key)
    await getBalance('YourPublicKeyHere');
    res.render('home');  // This renders home.ejs
});

// Use IoT routes
app.use('/iot', iotRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/iot-data', (req, res) => {
    const { temperature, soilMoisture } = req.body;
    console.log(`Received IoT data - Temperature: ${temperature}, Soil Moisture: ${soilMoisture}`);
    // Process and store the data
    res.sendStatus(200);
});

module.exports = router;
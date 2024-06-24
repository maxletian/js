// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/airplaneBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    flight: String,
    date: String
});

const Booking = mongoose.model('Booking', bookingSchema);

app.post('/api/book', async (req, res) => {
    const { name, email, flight, date } = req.body;

    const newBooking = new Booking({
        name,
        email,
        flight,
        date
    });

    try {
        await newBooking.save();
        res.json({ message: 'Booking successful!' });
    } catch (error) {
        res.json({ message: 'Booking failed.', error });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

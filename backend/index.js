const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
app.use(cors());

//get routes
const movieRouter = require('./Routes/MovieRoutes');
const bookingRouter = require('./Routes/BookingRoutes');
const priceRouter = require('./Routes/PriceRoutes');
const commentRouter = require('./Routes/CommentRoutes');

//set current database URI
let MONGODB_URI;
const NODE = "prod";
if (NODE == "test") {
    MONGODB_URI = 'mongodb+srv://akam:reactnode@cluster0.ihlmt.mongodb.net/test-cinema';

} else {
    MONGODB_URI = 'mongodb+srv://akam:reactnode@cluster0.ihlmt.mongodb.net/cinema'
}

//Connect to MongoDB database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to database`))
    .catch(error => console.log(`Could not connect to database: ${error}`));

app.use(express.json());
app.use(movieRouter);
app.use(commentRouter);
app.use(bookingRouter);
app.use(priceRouter);
const server = app.listen(PORT, () => console.log(`App running at: ${PORT}`));

module.exports = server;


const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect to database
connectDB();
//end db
//allow return req.body
app.use(express.json({ extended: false }))

//starting route
app.get('/', (req, res) => {
    res.send('hello world');
})
// set routes
app.use('/api/users', require('./Routes/api/users'));


//listen and post
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`connect to server through port ${PORT}`);
})
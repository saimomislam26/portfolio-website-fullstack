const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const app = require('./app');
const DB = process.env.MONGODB_SERVER.replace('<PASSWORD>', process.env.DB_PASSWORD)
mongoose.connect(DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log("Connected to Mongodb Successfully!!"))
    .catch((err) => console.log("Failed To connect"));

app.listen(process.env.PORT, () => {
    console.log(`app is listening on port ${process.env.PORT}...`)
})
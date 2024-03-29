const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5003

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
}).catch((err) => {
    console.log('Not connected')
})

const usersRouter = require('./Routes/users')
const postsRouter = require('./Routes/posts')

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const userRoutes = require('./Routes/User');
const taskRoutes = require('./Routes/Task');

app.use(express.json());

app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.use('/user', userRoutes);
app.use('/task', taskRoutes);

mongoose.connect('mongodb://localhost:27017')
.then(() => {
    console.log("DB Connected");
    // app.listen(PORT, () => {
    //     console.log(`server is running on http://localhost:${PORT}`);
    // });
})
.catch((err)=>{
    console.log(err);
})


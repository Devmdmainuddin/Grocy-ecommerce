require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes=require("./routes/product-routes/index")
const authRoutes = require("./routes/auth-routes/index");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL ;

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));
app.use(express.json());

mongoose.connect(MONGO_URL)
.then(()=>console.log("Mongodb Connected"))
.catch(error => console.log(error));

app.post('/jwt', async (req, res) => {
    const { email, password } = req.body; 

    try {
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).send({ success: false, message: 'Invalid email or password.' });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.send({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Internal server error.' });
    }
});
app.use('/auth', authRoutes);
app.use('/product', productRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({
        success: false,
        message: 'Something went wrong'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
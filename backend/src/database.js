const mongoose = require('mongoose');
const {MONGODB_URI} = process.env;
console.log(MONGODB_URI);
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
	.catch((err) => console.log(err))
	.then(() => console.log('Database connected'));
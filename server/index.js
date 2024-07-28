// const express = require('express');
// const mongoose = require('mongoose');
// const { json, urlencoded } = require('body-parser');
// const { stateRoutes } = require('./routes/stateRoutes');
// const { userRoutes } = require('./routes/userRoutes');
// const { connectToDatabase } = require('./config');
// const { authenticate } = require('./middleware/authMiddleware');

// const app = express();


// app.use(json());
// app.use(urlencoded({ extended: true }));


// connectToDatabase();

// app.use('/api/states', authenticate, stateRoutes);
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const { json, urlencoded } = require('body-parser');
const { connectToDatabase } = require("./config/db");
const { userRoutes } = require('./routes/userRoutes');
const { stateRoutes } = require('./routes/stateRoutes');


const app = express();


app.use(json());
app.use(urlencoded({ extended: true }));
connectToDatabase();


app.use('/api/users', userRoutes);
app.use('/api/state', stateRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

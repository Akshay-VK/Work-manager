const express = require('express');
const app = express();
const port = process.env.port || 3000;
app.use(__dirname+'/public');

app.listen(port => {
    console.log(`Server started at port ${port}`);
})
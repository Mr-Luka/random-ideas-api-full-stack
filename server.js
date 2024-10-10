const express = require('express');
const port = 5001;


// We initialize a variable, usually called app, and we set that to express.
// So now this app/ variable will be an object that has all kinds of methods on it for creating
// routs and just creating our server itself.
const app = express();

// creating a simple route .get() then we pass in a callback, which will always have request and
// response parameters object
// Every rout have a request and response object
// in package.json, in scripts, replace with test to start and write: node server.js
app.get('/', (req, res )=> {
    res.send({message: 'Welcome to the RandomIdeas API'});
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, ()=> { console.log(`Server listening on port ${port}`)});
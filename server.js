const express = require('express');
const port = 5001;

const ideas = [
    {
        id: 1,
        text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
        tag: 'Technology',
        username: 'TonyStark',
        date: '2022-01-02',
    },
    {
        id: 2,
        text: 'Milk cartons that turn a different color the older that your milk is getting',
        tag: 'Inventions',
        username: 'SteveRogers',
        date: '2022-01-02',
    },
    {
        id: 3,
        text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
        tag: 'Software',
        username: 'BruceBanner',
        date: '2022-01-02',
    }
]

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
// Get all ideas
app.get('/api/ideas', (req, res )=> {
    res.send({ success: true, data: ideas});
});

app.get('/api/ideas/:id', (req, res )=> {
    const idea = ideas.find((idea)=> idea.id === +req.params.id); // becasue id is a number we put +

    if(!idea) {
        res.status(404).json({ success: false, error: 'Resource not found'});
    }

    res.send({ success: true, data: idea});
});

app.listen(port, ()=> { console.log(`Server listening on port ${port}`)});
const express = require('express');
const router = express.Router();

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

// Get all ideas
router.get('/', (req, res )=> {
    res.send({ success: true, data: ideas});
});

// Get single idea
router.get('/:id', (req, res )=> {
    const idea = ideas.find((idea)=> idea.id === +req.params.id); // becasue id is a number we put +

    if(!idea) {
        res.status(404).json({ success: false, error: 'Resource not found'});
    }

    res.send({ success: false, data: idea});
});

// Add an idea
router.post('/', (req, res)=>{
    const idea = {
        id: ideas.length + 1, // takes care of the id, so if u add another idea, ur idea will be 4 then 5 ...
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10),
    }

    ideas.push(idea);
    res.json({success: true, data: idea});
});

// Update idea
router.put('/:id', (req, res )=> {
    const idea = ideas.find((idea)=> idea.id === +req.params.id); // becasue id is a number we put +

    if(!idea) {
        res.status(404).json({ success: false, error: 'Resource not found'});
    }

    idea.text = req.body.text || idea.text;
    idea.tag = req.body.tag || idea.tag

    res.send({ success: true, data: idea});
});

// Delete idea
router.delete('/:id', (req, res )=> {
    const idea = ideas.find((idea)=> idea.id === +req.params.id); // becasue id is a number we put +

    if(!idea) {
        res.status(404).json({ success: false, error: 'Resource not found'});
    }

    const index = ideas.indexOf(idea); // getting the index
    ideas.splice(index, 1); // removing the idea

    res.send({ success: true, data: {}});
});

module.exports = router;
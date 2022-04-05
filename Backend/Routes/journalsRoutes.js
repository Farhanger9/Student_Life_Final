const express = require('express');
const routes = express.Router();
var Journal = require('../Model/Journal')




// GET ROUTE to fetch the journals by User
routes.get('/api/journals/:username', (req,res)=>{
    Journal.find({username: req.params.username}).exec().then((journals)=>{
        res.status(200).json(journals)
    }).catch((err)=>{
        res.status(500).json(err);
    })
    });

    //GET Route to fetch journal by ID

routes.get('/api/journals/:id', (req,res)=>{
    Journal.findOne({_id: req.params.id}).exec().then((journal)=>{
            res.status(200).json(journal)
        }).catch((err)=>{
            res.status(500).json(err);
        })
        });

routes.post('/api/journals',async (req,res)=>{
    const newJournalEntry = new Journal(req.body);
    await newJournalEntry.save((err) =>{
        if(err){
            res.status(201).json({message: "Journal Added!"})
    
        }else{
            res.status(500).json(err);
        }
    });  
    });

routes.put('/api/journals/:id', (req,res) =>{
Journal.updateOne({_id: req.params.id}, { $set: req.body }).exec().then(()=>{
    res.status(204).json(`journal ${req.params.id} successfully deleted`)
}).catch((err)=>{
    res.status(500).json(err);
})
});

routes.delete('/api/journals/:id', (req,res) =>{
Journal.deleteOne({_id: req.params.id}).exec().then(()=>{
    res.status(204).json(`journal ${req.params.id} successfully deleted`)
}).catch((err)=>{
    res.status(500).json(err);
})
});

module.exports = routes;
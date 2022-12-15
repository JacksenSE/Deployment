// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')
const breads = require('./breads_controllers.js')

// SEED ROUTE
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

// INDEX ROUTE
baker.get('/', (req, res) => {
    Baker.find()
    .populate('breads')
    .then(foundBakers => {
        res.send(foundBakers)
    })
})

// DELETE ROUTE
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id) 
      .then(deletedBaker => { 
        res.status(303).redirect('/breads')
      })
})


// SHOW ROUTE
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})


// export
module.exports = baker
const { Router } = require('express')
const Pet = require('../models/pet')

const router = Router()


router.get('/', async (req, res) => {
    Pet.find({},async (err, doc) => {
        if (err) {
            res.status(404)
                .json({
                    data: err
                })
        }
        res.status(200).json({
            data: doc
        })
    })
})

router.post('/', async (req, res) => {
    const { name , age } = req.body
    Pet.insert({data: {name, age}})
        .then(data => {
            res.status(201).json({
                pet: data
            })
    })
})

module.exports = router

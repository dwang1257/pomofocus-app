const item = require('../models/Item');

const getAll = async(req, res) => {
    try {
        const getItems = await item.find({})
        res.status(200).json({getItems})
    } catch (error) {
        res.status(500).json({msg: error}) //general server error
    }
}

const createItem = async (req, res) => {
    try {
        const item1 = await item.create(req.body)
        res.status(201).json({item1}) //request has succeeded
    } catch (error) {
        res.status(500).json({msg: error}) //general server error
    }
}

const getItem = async (req, res) => {
    try {
        const {id: getID} = req.params
        const getSingle = await item.findOne(getID)

        if(getSingle === null){
            return res.status(404) // no task
        }
        res.status(200).json({getSingle})
    } catch (error) {
        res.status(500).json({msg: error}) //general server error
    }
}

const deleteItem = async (req, res) => {
    try {
        const {id: getID} = req.params
        const deleteOne = await item.findByIdAndDelete(getID)
        if(deleteOne === null){
            return res.status(404) // no task
        }
        res.status(200).json({deleteOne})
    } catch (error) {
        res.status(500).json({msg: error}) //general server error
    }
}



module.exports = {
    getAll,
    createItem,
    deleteItem,
    getItem
}
let db = require('../database/models')

let operationsController = {
    listAll: async (req,res) => {
        try {
            const operations = await db.Operation.findAll();
            res.json(operations);
        } catch (error) {
            res.status(500).json({message : error.message});
        }
        
    }
}

module.exports = operationsController;
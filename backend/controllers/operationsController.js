let db = require('../database/models')

let operationsController = {
    listAll: async (req,res) => {
        try {
            const operations = await db.Operation.findAll({
                include: [
                    {model: db.User, as: "user"},
                    {model: db.Category, as: "category"},
                ], 
                limit: 10, 
                order: [['date', 'DESC']] 
            });
            res.json(operations);
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    },
    getById: async (req,res) => {
        try {
            const operation = await db.Operation.findByPk(req.params.id);
            res.json(operation);
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    },
    create: async (req,res) => {
        try {
            const {name, amount, date, type, categoryId, userId} = req.body;
            const newOperation = await db.Operation.create({
                name,
                amount,
                date,
                type,
                categoryId,
                userId
            });
            res.json(newOperation);
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    },
}

module.exports = operationsController;
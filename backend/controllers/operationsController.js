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
    /* create: async (req,res) => {
        try {
            await db.Operation.create({
                name: req.body.name,
                amount: req.body.amount,
                date: req.body.date,
                type: req.body.type,
                categoryId: req.body.category

            });
            res.send("ok");
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    },  */
}

module.exports = operationsController;
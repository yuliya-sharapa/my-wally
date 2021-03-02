const db = require('../database/models');


let operationsController = {
    listAll: async (req,res) => {
        try {
            const operations = await db.Operation.findAll({
                include: [
                    {model: db.Category, as: "category"},
                ], 
                where: {userId: req.userId},
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
            const operation = await db.Operation.findByPk(req.params.id, {include: [{model: db.Category, as: "category"}]} );
            res.json(operation);
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    },
    create: async (req, res) => {
        try {
            const user = await db.User.findOne({
                where: {id: req.userId}
            })
            const userId = user.id;
            const {name, amount, date, type, categoryId} = req.body;
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
    remove: async (req,res) => {
        try {
            await db.Operation.destroy(
                { where: 
                    {id:req.params.id}
                });
            res.send("ok");
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    },
    edit: async (req,res) => {
        try {
            const operation = await db.Operation.update({
                name:req.body.name,
                amount:req.body.amount,
                categoryId:req.body.categoryId,
                date:req.body.date,
            },
            { where:
                {id:req.params.id}
            })
            if (!operation) return res.status(404).json({ msg: "No operation was found" });
    
            
            res.json(operation)
        } catch (error) {
            res.status(500).json({ error: err.message });
        }
    },
}

module.exports = operationsController;
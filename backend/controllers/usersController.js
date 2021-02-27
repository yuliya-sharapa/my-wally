let db = require('../database/models')

let usersController = {
    listAll: async (req,res) => {
        try {
            const users = await db.User.findAll({include: [{model: db.Operation, as: "operations"}]});
            res.json(users);
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    },
    getById: async (req,res) => {
        try {
            const user = await db.User.findByPk(req.params.id, {include: [{model: db.Operation, as: "operations"}]});
            res.json(user);
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    },
    /* create: async (req,res) => {
        try {
            await db.User.create({
                name: req.body.name,
                amount: req.body.amount,
                date: req.body.date,
                type: req.body.type,
            });
            res.send("ok");
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    }, */
}

module.exports = usersController;
const db = require('../database/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    create: async (req,res) => {
        try {
            const { name, lastName, email, password } = req.body;

            //validation
            if (!email || !password || !name || !lastName)
            return res.status(400).json({ msg: "Not all fields have been entered." });

            if (password.length < 8)
            return res
            .status(400)
            .json({ msg: "The password needs to be at least 8 characters long." });
    
            const existingUser = await db.User.findOne({ where: {email: email} });
            if (existingUser)
            return res
            .status(400)
            .json({ msg: "An account with this email already exists." });

            //password hash    
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt);

            //saving a new user
            const newUser = await db.User.create({
                email,
                password: passwordHash,
                name,
                lastName
            });
            
            //sign the token
            const token = jwt.sign({
                user: newUser.id,
            }, process.env.JWT_SECRET);
            
            //send the token in a http-only cookie
            res.cookie("token", token, {
                httpOnly: true,
            }).send();
            
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    },
    login: async (req,res) => {
        try {
            const { email, password } = req.body;

            //validation
            if (!email || !password)
            return res.status(400).json({ msg: "Not all fields have been entered." });
            
            const existingUser = await db.User.findOne({ where: {email: email} });
            //console.log(existingUser)
            if (!existingUser)
            return res
            .status(400)
            .json({ msg: "Wrong email or password" });

            const passwordCorrect = await bcrypt.compare(password, existingUser.password);
            if (!passwordCorrect)
            return res
            .status(400)
            .json({ msg: "Wrong email or password" });
            
            //sign the token
            const token = jwt.sign({
                user: existingUser.id,
            }, process.env.JWT_SECRET);
            
            //send the token in a http-only cookie
            res.cookie("token", token, {
                httpOnly: true,
            }).send();
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    },
    logout: (req,res) => {
        res.cookie("token", "", {
            httpOnly: true,
            expires: new Date(0)
        }).send(); 
    },

}

module.exports = usersController;
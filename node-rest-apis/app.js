const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const { default: User } = require('./model/user');
app.use(express.json());

//connecting database
sequelize.authenticate()
.then(res => {
    console.log('Database connected!!');
})
.catch(err => {
    console.log(err);
});

//creating user
app.post('create' , async(req, res) => {
    try {
        const { firstName, lastName } = req.body;
        const user = new User({firstName, lastName});
        await user.save();
        res.json({ msg: 'User created!' });
    } catch(err) {
        res.status(503).json({ msg: 'Server issues!' });
    }
});

//reading all users
app.get('read' , async(req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch(err) {
        res.status(503).json({ msg: 'Server issues!' });
    }
});

//delete user
app.delete('delete' , async(req, res) => {
    try {
        const { id } = req.body;
        const user = await User.destroy({ where: { id: id } });
        res.json(user);
    } catch(err) {
        res.status(503).json({ msg: 'Server issues!' });
    }
});

//update user
app.patch('update' , async(req, res) => {
    try {
        const { firstName, lastName } = req.body;
        const user = await User.update({firstName, lastName}, { where: { id: id } });
        res.json({ msg: 'User updated!' });
    } catch(err) {
        res.status(503).json({ msg: 'Server issues!' });
    }
});

app.listen(5000, () => {
    console.log('Server running!!')
});
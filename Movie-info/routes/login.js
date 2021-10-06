const express = require('express')
const model = require('../models/model')
var unirest = require("unirest");
const route = express.Router()

class Login{
    status=0
}

let check=new Login

route.get('', (req, res) => {
    check.status = 0;
    res.render('enter')
})

route.post('', async (req, res) => {
    let mailOpt = {
        email: req.body.email
    };
    let pasOpt = {
        password: req.body.password
    };
    try {
        const mailObj = await model.find(mailOpt);
        if(mailObj.length===0){
            res.render('enter',{msg:"No User found",email:mailOpt.email})
        }else{
        const passObj = await model.find(pasOpt);
        if (String(passObj[0]._id) === String(mailObj[0]._id)) {
            check.status = 1;
            res.render('landing', {
                person: mailObj[0]
            })
        } else {
            res.render('enter',{msg:"Wrong Password",email:mailOpt.email})
        }
    }
    }
    catch {
        res.render('enter',{msg:"Wrong Password",email:mailOpt.email})
    }
});

route.get('/main', async (request, res) => {
    if (check.status == 1) {
        if (request.query.movie) {
            req = unirest("GET", "https://imdb8.p.rapidapi.com/auto-complete");
            req.query({
                "q": request.query.movie
            });

            req.headers({
                "x-rapidapi-key": "210bcfaf99mshbc2b6137d990c8fp1c2e89jsn862f7adc44cf",
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "useQueryString": true
            });

            req.end(function (response) {
                if (response.error) throw new Error(response.error);

                filmArray = response.body.d
                res.render('main', { array: filmArray , inp: request.query.movie})
            });
        }else{
            res.render('main',{array:[],inp: ''})
        }
    } else {
        res.render('loggedout')
    }
});

route.get('/people', async (req, res) => {
    try {
        const mod = await model.find()
        if (check.status == 1) {
            res.render('people', {
                persons: mod
            })
        } else {
            res.render('loggedout')
        }

    } catch {
        res.redirect('/')
    }
});


route.get('/people/singleid', async (req, res) => {
    let options = { name: null }
    if (req.query.name != null && req.query.name != '') {
        options = {
            name: { $regex: new RegExp(req.query.name) }
        }
    }
    try {
        if (check.status == 1) {
            const mod = await model.find(options)
            res.render('single', {
                persons: mod,
                inp:req.query.name
            })
        } else {
            res.render('loggedout')
        }

    } catch {
        res.redirect('/people/single')
    }
});

module.exports = route;
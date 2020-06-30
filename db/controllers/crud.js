const fs = require('fs');

//functions
const mkdir = require('../func/df/dir/mkdir');

module.exports = {
    async df(req, res){
        try {
            let method = req.body.method;
            let name = req.body.name;
            let path = req.body.path;

            if(method == 'mkdir'){
                let answer = mkdir(path, name);
                res.status(200).send(answer);
            }

            res.status(200).send(file);
        }catch (error) {
            res.status(400).send(error);
        }
    }
}

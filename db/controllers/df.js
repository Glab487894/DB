const fs = require('fs');

//functions
const mkdir = require('../func/mkdir');
const rmdir = require('../func/rmdir');
const createFile = require('../func/createFile')

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
            else if (method == 'rmdir'){
                let answer = rmdir(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'createFile'){
                let answer = createFile(path, name);
                res.status(200).send(answer);
            }


            res.status(200).send(file);
        }catch (error) {
            res.status(400).send(error);
        }
    }
}

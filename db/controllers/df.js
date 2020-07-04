const fs = require('fs');

//functions
const mkdir = require('../func/mkdir');
const rmdir = require('../func/rmdir');
const createFile = require('../func/createFile');
const removeFile = require('../func/removeFile');
const readFile = require('../func/readFile');
const writeFile = require('../func/writeFile');

module.exports = {
    async df(req, res){
        try {
            let method = req.body.method;
            let name = req.body.name;
            let path = req.body.path;
            let data;

            if (req.body.data){
               data = req.body.data;
            }

            if(method == 'mkdir'){
                let answer = mkdir(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'rmdir'){
                let answer = rmdir(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'createFile') {
                let answer = createFile(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'removeFile'){
                let answer = removeFile(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'readFile'){
                let answer = readFile(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'writeFile'){
                let answer = writeFile(path, name, data);
                res.status(200).send(answer);
            }

        }catch (error) {
            res.status(400).send(error);
        }
    }
}

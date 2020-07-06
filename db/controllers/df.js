const fs = require('fs');

//functions
const createDir = require('../func/createDir');
const removeDir = require('../func/removeDir');
const createFile = require('../func/createFile');
const removeFile = require('../func/removeFile');
const readFile = require('../func/readFile');
const writeFile = require('../func/writeFile');
const readJson = require('../func/readJson');

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

            if(method == 'createDir'){
                let answer = createDir(path, name);
                res.status(200).send(answer);
            }
            else if (method == 'removeDir'){
                let answer = removeDir(path, name);
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
            else if (method == 'readJson'){
                let answer = readJson(path, name);
                res.status(200).send(answer);
            }

        }catch (error) {
            res.status(400).send(error);
        }
    }
}

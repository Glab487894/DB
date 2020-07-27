const fsRw = require('./libraries/fs-rw-list');
const createFile = require('../functions_df/createFile');
const addStructure = require('../function_json/writeJson');

let createCollection = function (name, dirPath, fileName) {
    try {
        let fsRwListAnswer = fsRw(name, dirPath, fileName);
        let createFileAnswer = createFile(dirPath, fileName);
        let addStructureAnswer = addStructure(dirPath, fileName, []);

        let returnArr = {
            fsRwListMessage: fsRwListAnswer,
            createFileMessage: createFileAnswer,
            addStructureMessage: addStructureAnswer
        }
        return  returnArr;
    }
    catch (err){
        return({
            message: "Can not create collection",
            err: err
        });
    }
}

module.exports = createCollection;
const fsRw = require('./libraries/fs-rw-list');
const createFile = require('../functions_df/createFile');
const addStructure = require('../function_json/writeJson');

const nullName = '';

let createCollection = function (name, dirPath, fileName) {
    try {
        let fsRwListAnswer = fsRw(name, dirPath, fileName); //add collection to the list
        let createFileAnswer = createFile(dirPath, nullName);
        let addStructureAnswer = addStructure(dirPath, nullName, []);

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
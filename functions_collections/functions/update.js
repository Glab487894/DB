const  readJson = require('../../function_json/readJson');
const writeJson = require('../../function_json/writeJson');

const update = (path, nullName, key, data, newData) => {
    try {
        let file = readJson(path, nullName);

        let element;
        for (i = 0; i < file.length; i++) {
            if (file[i][key] == data) {
                element = file.indexOf(file[i]);
            }
        }
        file.splice(element, 1, newData);
        let answerWrite = writeJson(path, nullName, file);

        if (answerWrite == 'file has been wrote') {
            return 'collection has been updated';
        } else {
            return answerWrite;
        }
    } catch(err){
        return({
            message: "can not update collection",
            error: err
        })
    }
}

module.exports = update;
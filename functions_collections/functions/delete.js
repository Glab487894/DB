const  readJson = require('../../function_json/readJson');
const writeJson = require('../../function_json/writeJson');

const deleteElement = (path, nullName, key, data) => {
    try {
        let file = readJson(path, nullName);

        let element;
        for (i = 0; i < file.length; i++) {
            if (file[i][key] == data) {
                element = file.indexOf(file[i]);
            }
        }
        file.splice(element, 1);
        let answerWrite = writeJson(path, nullName, file);

        if (answerWrite == 'file has been wrote') {
            return 'element has been deleted';
        } else {
            return answerWrite;
        }
    } catch(err){
        return({
            message: "can not delete element",
            error: err
        })
    }
}

module.exports = deleteElement;
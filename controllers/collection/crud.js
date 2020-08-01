let nullName = '';

const moreMethods = require('./moreMethods');

const create = require('../../function_json/pushElement');
const read = require('../../function_json/readJson');
const update = require('../../functions_collections/functions/update');
const deleteElement = require('../../functions_collections/functions/delete');


const getCollection = require('../../functions_collections/libraries/getCollection');

const crud = function(method, name, data, newData, key){
    let path = getCollection.path(name);

    if(method == 'create'){
        let answer = create(path, nullName, data);
        return answer;
    }
    else if(method == 'read'){
        let answer = read(path, nullName);
        return answer;
    }
    else if(method == 'update'){
        let answer = update(path, nullName, key, data, newData);
        return answer;
    }
    else if(method == 'delete') {
        let answer = deleteElement(path, nullName, key, data);
        return answer;
    } else {
        let answer = moreMethods(method, name, data, newData, key, path);
        return answer;
    }

}

module.exports = crud;
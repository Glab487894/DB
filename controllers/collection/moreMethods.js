let nullName = '';

const getElement = require('../../functions_collections/functions/getElement');

const moreMethods = (method, name, data, newData, key, path) => {
if(method == 'get'){
        let answer = getElement(path, nullName, key, data);
        return answer;
    }else{
        return 'invalid method';
    }
}

module.exports = moreMethods;
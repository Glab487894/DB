const fs = require('fs');
const path = require('path');

exports.path = function (name){
    let file = fs.readFileSync(path.join(__dirname, '../collections_list.json'), 'utf8');
    let parsedFile = JSON.parse(file);
    let returnPath;

    for (i = 0; i < parsedFile.length; i++) {
        if (parsedFile[i]["name"] == name){
            returnPath  = parsedFile[i]["path"];
        }
    }
    return returnPath;
}
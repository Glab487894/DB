const fs = require('fs');
const path = require('path');

const rw = function (name, dirPath, fileName){
    let collections_list = fs.readFileSync(path.join(__dirname, '../collections_list.json'), 'utf8');
    let parsedCollection_list = JSON.parse(collections_list);

    let newCollection = {
        name: name,
        path: dirPath,
        fileName: fileName
    }
    parsedCollection_list.push(newCollection);
    fs.writeFileSync(path.join(__dirname, '../collections_list.json'), JSON.stringify(parsedCollection_list, null, 4))
    return ("collection has been created");
}

module.exports = rw;
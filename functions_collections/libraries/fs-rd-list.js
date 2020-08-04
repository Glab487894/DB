const fs = require('fs');
const path = require('path');

const removeFile = require('../../functions_df/removeFile');

exports.getElementNum = (name) => {
    let collections_list = fs.readFileSync(path.join(__dirname, '../collections_list.json'), 'utf8');
    let file = JSON.parse(collections_list);

    let element;
    for (i = 0; i < file.length; i++) {
        if (file[i]['name'] == name) {
            element = file.indexOf(file[i]);
        }
    }
    return element;
}

exports.getObj = (name) => {
    let collections_list = fs.readFileSync(path.join(__dirname, '../collections_list.json'), 'utf8');
    let file = JSON.parse(collections_list);

    let obj;
    for (i = 0; i < file.length; i++) {
        if (file[i]['name'] == name) {
            obj = file[i];
        }
    }
    return({file, obj});
}
exports.remove = (element, dirPath, name, file) => {
    file.splice(element, 1);
    let writeData = JSON.stringify(file, null, 4);
    fs.writeFileSync(path.join(__dirname, '../collections_list.json'), writeData);
    let answerRf = removeFile(dirPath, name);
    if (answerRf == 'file has been removed') {
        return 'Collection has been removed';
    }else{
        return 'can not remove collection';
    }
}
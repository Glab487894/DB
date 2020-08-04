const nullName = '';

const fsRd = require('./libraries/fs-rd-list');

let removeCollection = function (name) {
    try {
        let getObj = fsRd.getObj(name);
        let file = getObj.file;
        let obj = getObj.obj;
        let path = obj.path;
        let nullName = '';

        let element = fsRd.getElementNum(name);
        let answer = fsRd.remove(element, path, nullName, file);
        return answer;
    }
    catch (err){
        return({
            message: "Can not remove collection",
            err: err
        });
    }
}

module.exports = removeCollection;
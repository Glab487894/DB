const fs = require('fs');
const path = require('path');

let mkdir = function (dirPath, name) {
    try {
        fs.mkdirSync(path.join(__dirname, '../file_sistem', dirPath, name));
        return ("directory has been created");
    }
    catch (err){
        return({
            message: "Can not create directory",
            err: err
        });
    }
}

module.exports = mkdir;
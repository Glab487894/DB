const fs = require('fs');
const path = require('path');

let rmdir = function (dirPath, name) {
    try {
        fs.rmdirSync(path.join(__dirname, '../file_sistem', dirPath, name));
        return ("directory has been deleted");
    }
    catch (err){
        return({
            message: "Can not delete directory",
            err: err
        });
    }
}

module.exports = rmdir;
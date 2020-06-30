const fs = require('fs');
const path = require('path');

let mkdir = function (path, name) {
    try {
        fs.mkdir(path.join(__dirname, path, name));
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
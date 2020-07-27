const createCollection = require('../../functions_collections/createCollection')

module.exports = {
    collection(req, res){
        let method = req.body.method;
        let path = req.body.path;
        let name = req.body.name;
        let fileName = req.body.fileName;

        if(method == 'createCollection'){
            let answer = createCollection(name, path, fileName);
            res.status(200).send(answer);
        }
    }
}
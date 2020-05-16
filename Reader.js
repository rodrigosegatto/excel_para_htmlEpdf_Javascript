const fs = require('fs');
const util = require('util');

class Reader {

    constructor(){
        //fs.readFile é uma funão antiga que trabalha apenas com callbacks, ou seja,
        //Ela não consegue passar retorno aqui. Por isto, convertemos ela abaixo
        //E ela passou a ser uma nova função (reader) que pode trabalhar com async/await
        this.reader = util.promisify(fs.readFile);
    }

    async read(filepath){
        try{
            return await this.reader(filepath,"utf8");
        }catch(err){
            return undefined;
        }
    }
}

module.exports = new Reader();
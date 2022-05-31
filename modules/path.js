const nodemon = require("nodemon");
const path = require("path");

console.log(path.basename(__filename)); //Basename apresenta apenas o nome do arquivo 


console.log(path.dirname(__filename)); //Dirname apresenta o nome do diretório atual


console.log(path.extname(__filename)); //Extname apresenta a extenção do arquivo


console.log(path.parse(__filename)); //cria um objeto com varias informações sobre o arquivo atual


console.log(path.join(__dirname, "test", 'test.html')); //junta caminhos de arquivos
const path= require('path');

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create Path Object
console.log(path.parse(__filename));

//Concatenate Paths
console.log(path.basename(__filename));
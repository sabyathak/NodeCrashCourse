const fs= require('fs');
const path= require('path');

// // //create folder
// // fs.mkdir(path.join(__dirname,'/test'),{},function(err){
// //     if(err) throw err;
// //     console.log('Folder created....');

// // });

// //Create and write to file
// fs.writeFile(
//     path.join(__dirname,'/test','hello.txt'),
//     'Hello World!',
// function(err){
//     if(err) throw err;
//     console.log('File created....');

// //File append
// fs.appendFile(
//     path.join(__dirname,'/test','hello.txt'),
//     'I love Node',
// function(err){
//     if(err) throw err;
//     console.log('File created....');

// }
// );
// }
// );

//Read file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
}
);

//Rename File
fs.rename(
path.join(__dirname,'/test','hello.txt'),
path.join(__dirname,'/test','hello.txt'),

(err,data)=>{
    if(err) throw err;
    console.log('File renamed');
}
);

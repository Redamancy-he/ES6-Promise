import fs from 'fs'

function getFile(fpath){
    return new Promise(function(reslove,reject){
        fs.readFile(fpath,'utf8',(err,dataStr)=>{
            if(err) return reject(err);
            reslove(dataStr);
        })
    })
}

// 成功读取文件
getFile('./file/01.txt').then(r1=>{
    console.log(r1)
},err=>{
    console.log(err.message);
});

// 失败报错 ENOENT: no such file or directory, open 'E:\VS Code\webpack\day1\code\file\011.txt'
getFile('./file/011.txt')
    .then(r1=>{
        console.log(r1)
})
    .catch(err=>{
        console.log(err.message);
})
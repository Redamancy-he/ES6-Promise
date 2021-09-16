import thenFs from 'then-fs'

// 异步读取文件，无法保证读取文件的顺序
thenFs.readFile('./file/01.txt','utf8').then(r1=>{console.log(r1)});
thenFs.readFile('./file/02.txt','utf8').then(r2=>{console.log(r2)});
thenFs.readFile('./file/03.txt','utf8').then(r3=>{console.log(r3)});
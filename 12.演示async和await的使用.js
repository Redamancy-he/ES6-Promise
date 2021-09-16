// 12.演示async和await的使用.js
import thenFs from 'then-fs'


// 如果在function中使用了await，那么function必须用async修饰
// 在async方法中，第一个await之前的代码会同步执行
console.log('A');
async function getFile(){
    console.log('B');
    const r1 = await thenFs.readFile('./file/01.txt','utf8');
    console.log(r1);
    const r2 = await thenFs.readFile('./file/02.txt','utf8');
    console.log(r2);
    const r3 = await thenFs.readFile('./file/03.txt','utf8');
    console.log(r3);
    console.log('D');
}

getFile();
console.log('C');
import thenFs from 'then-fs'

// thenFs.readFile('./file/01.txt','utf8')
//   .then(r1=>{
//     console.log(r1);
//     //   在第一个回调函数中读取文件2
//     thenFs.readFile('./file/02.txt','utf8')
//       .then(r2=>{
//         console.log(r2);
//         thenFs.readFile('./file/03.txt','utf8')
//           .then(r3=>{
//             console.log(r3);
//         })
//     })
// });

thenFs.readFile('./file/01.txt','utf8')
// 通过.catch捕获错误
.catch(err=>{
  console.log(err);
})
.then(r1=>{
    console.log(r1);
    //   在第一个回调函数中读取文件2
    return thenFs.readFile('./file/02.txt','utf8')
})
.then(r2=>{
    console.log(r2);
    return thenFs.readFile('./file/03.txt','utf8')
})
.then(r3=>{
    console.log(r3);
});
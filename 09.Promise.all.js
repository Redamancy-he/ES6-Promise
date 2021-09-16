import thenFs from 'then-fs'

// 数组存放三个异步操作node 09.Promise.all.js
const promiseArr=[
    thenFs.readFile('./file/01.txt','utf8'),
    thenFs.readFile('./file/02.txt','utf8'),
    thenFs.readFile('./file/03.txt','utf8')
]

// Promise.all()方法会发起并行的Promise异步操作，等所有异步操作结束后才会执行下一步的.then操作
Promise.all(promiseArr)
.then(result=>{
        console.log(result);
})
.catch(err=>{
    console.log(err.message);
})
    

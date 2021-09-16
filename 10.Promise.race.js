import thenFs from 'then-fs'

// 数组存放三个异步操作
const promiseArr=[
    thenFs.readFile('./file/01.txt','utf8'),
    thenFs.readFile('./file/02.txt','utf8'),
    thenFs.readFile('./file/03.txt','utf8')
]

// Promise.race()方法会发起并行的Promise异步操作，只要任何一个异步操作执行完毕，然后立马执行下一步的.then操作
Promise.race(promiseArr)
    .then(result=>{
        console.log(result);
})
.catch(err=>{
    console.log(err.message);
})
    

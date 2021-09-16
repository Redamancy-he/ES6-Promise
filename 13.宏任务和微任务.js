console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

// var p = new Promise(function (resolve, reject) {
//     var timer = setTimeout(function () {
//         console.log('执行操作1');
//         resolve('这是数据1');
//     }, 1000);
// });
// p.then(function (data) {
    
//     console.log('这是成功操作');
//     console.log(data);
// });
// console.log(p);

// var p = new Promise(function (resolve, reject) {
//     var flag = false;
//     if(flag){
//       resolve('这是数据2');
//     }else{
//       reject('这是数据2');
//     }
//   });
//   p.then(function(data){//状态为fulfilled时执行
//       console.log(data);
//       console.log('这是成功操作');
//   },function(reason){ //状态为rejected时执行
//       console.log(reason);
//       console.log('这是失败的操作');
//   });

// 同等效果
  // p.then(function(data){
  //     console.log(data);
  //     console.log('这是成功操作');
  // }).catch(function(reason){
  //     console.log(reason);
  //     console.log('这是失败的操作');
  // });

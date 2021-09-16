<!-- 
   1. Promise是一个构造函数，可以new出一个promise
      const p = new Promise()
      代表一个异步操作
    2.promise.prototype上包含一个.then()方法
      每次new出的实例对象都可以通过原型链的方式访问.then方法，例如p.then()
    3. .then()可以预先定义成功的回调方法和失败的回调方法
      p.then(result=>{},error=>{}),
      调用.then()方法时，成功的回调函数是必选的，失败的回调函数是可选的  -->
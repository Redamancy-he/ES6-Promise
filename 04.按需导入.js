// 每个按需导入的名称必须和按需导出的名称一致
// 可以使用as进行重命名
// 按需导入和默认导入可以同时使用
import info,{ s1,s2 as str2,say } from "./03.按需导出.js";

console.log(s1);
console.log(str2);
console.log(say);

console.log(info);
//同步执行
console.log(111);
function fn(cb) {
    setTimeout(() => {
        console.log(333);
        cb();
    });
}
console.log(222)
//异步执行
fn(function(){
    console.log("异步之后执行的代码");
})

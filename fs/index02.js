/** Created by  on 2018/8/21.*/
//继承
/*function parent(){
    this.name='Name';
    this.say=function(){
        console.log('I can say.');
    }
}
function child(){
    var p=new parent();
    p.name1='Name1';
    p.say=function(){
        console.log('Child say.');
    }
    return p;
}*/
/*

var http = require('http')
var nodeserver = http.createServer(function (req,res) {
    var body = 'Thanks for calling12345!\n'
    var content_length =  body.length
    res.writeHead(200, {'Content-Type':'text/plain','Content-Length':'content_length'})
    res.end(body)
    // console.log(content_length)
})
nodeserver.listen(8008, 'localhost', function (err) {
    if (err)
        throw error
    console.log('服务创建成功')
})
*/
//同步的方式读取一个文件，
/*
var fs = require('fs')
var data = fs.readFileSync('./input.txt')
console.log(data.toString())
console.log('程序员执行结束！')*/

//异步的方式读取一个文件
/*
var fs = require('fs')
fs.readFile('./input.txt',function(error,data){
    if(error)
        throw error
    console.log(data.toString())
})
console.log('程序执行结束！')*/

//Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件

/*//引入events模块
var events = require('events')
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter()

//创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功')
}
//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler)
//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function () {
    console.log("数据接收成功")
})

//触发connection事件
eventEmitter.emit('connection')

//触发data_received事件
eventEmitter.emit('data_received')

console.log("程序执行完毕")*/

//EventEmitter 的用法,用延时函数延时触发事件
/*
var EventEmitter = require('events').EventEmitter
var event = new EventEmitter()
event.on('some_event', function(){
    console.log('some_event occured')
})
setTimeout(function(){
    event.emit('some_event')
},1000)
*/

//对于每个事件，EventEmitter 支持 若干个事件监听器。
//当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
/*var events = require('events')
var eventEmitter = new events.EventEmitter()
eventEmitter.on('someevent', function(arg1,arg2){
    console.log('listener1',arg1,arg2)
})
eventEmitter.on('someevent', function(arg1,arg2){
    console.log('listener2',arg1,arg2)
})
eventEmitter.emit('someevent','gaojie',1992)*/

//从流中读取数据
var fs = require('fs')
var data = ''
//创建可读流
var readStream = fs.createReadStream('input.txt')
//设置编码为utf8
// readStream.setEncoding('UTF8')

//处理流事件 -->data,end,error
readStream.on('data',function (chunk) {
    data += chunk
})
readStream.on('end',function () {
    console.log(data.toString())
})
readStream.on('error',function (err) {
    console.log(err.stack)
})
console.log('程序执行完毕！')

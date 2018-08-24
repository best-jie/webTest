/** Created by  on 2018/8/20.*/
//app.js
var http = require('http')
var port = 8001
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write('<h1>Node.js 课程</h1>')
    res.end('<p>hello world 世界你好啊我在学习</p>')
}).listen(port)
console.log("HTTP server is listening at port 8001.")
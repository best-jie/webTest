/** Created by  on 2018/8/23.*/
/*
//写入流
var fs = require('fs')
var data = 'W3Cschool教程官网地址：www.w3cschool.cn'
// 创建一个可以写入的流，写入到文件 output.txt 中
var writeStream = fs.createWriteStream('./output.txt')
//使用utf8编码写入数据
writeStream.write(data,'utf8')
//标记文件末尾
writeStream.end()
//处理流事件 -->data,end,error
writeStream.on('finish',function () {
    console.log('写入完成')
})
writeStream.on('error',function (err) {
    console.log(err.stack)
})
console.log('程序执行完毕！')*/

/*
// 管道流
var fs = require('fs')
//创建一个可以读的流
var readerStream = fs.createReadStream('./input.txt')
//创建一个可以写的流
var writerStream = fs.createWriteStream('./output.txt')
//管道读写操作
//读取input.txt文件的内容，并将内容写入到output.txt文件中
readerStream.pipe(writerStream)
console.log("程序执行完毕！")*/

// 链式流
var fs = require('fs')
//压缩input.txt文件为input.txt.gz
var zlib = require('zlib')
/*
fs.createReadStream('./input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))
console.log('程序执行完毕！')*/
//解压input.txt.gz压缩文件
fs.createReadStream('./input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'))
console.log('解压完毕！')

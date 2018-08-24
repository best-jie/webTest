/** Created by  on 2018/8/23.*/
/*//创建文件夹
var fs = require('fs')
fs.mkdir('files',function (err) {
    if (err)
        throw err
    console.log('文件夹创建成功！')
})*/

/*//检测文件夹是否存在，不存在则创建一个 --->(异步操作)
var fs = require('fs')
fs.exists('files',function (isExists) {
    console.log(isExists)  //文件夹存在，返回true,文件夹不存在返回false;
    if (!isExists){
        fs.mkdir('files',function (err) {
            if (err)
                throw err
            console.log('文件夹创建成功！')
        })
    }else {
        console.log('文件夹已存在！')
    }
})*/

/*//同步步操作
var fs = require('fs')
if (!fs.existsSync('files')) { // 如果文件夹不存在则创建文件夹
    var status = fs.mkdirSync('files')
    console.log('文件夹创建成功！')
}
console.log('程序执行完毕！')*/

/*
//创建一个文件夹，用最简单的方法创建多个文件
var fs = require('fs')
function productFile(number) {
    fs.mkdir('ibeifeng',function (error) {
        if (error)
            throw error
        for (var i=0;i<number;i++){
            fs.writeFile('./ibeifeng/' + i + '.txt','北风网www.ibeifeng.com---' + i,function (err) {
                if (err)
                    throw err
                console.log("创建完成!")
            })
        }
    })
}
productFile(10)
*/

/*//一次读取多个文件，并将读取的十个文件内容分别写入到另一个文件夹的十个文件中
'use strict'
var fs = require('fs')
//var i = 0 和let i = 0,有什么区别？
for (let i=0;i<10;i++){
    fs.readFile('./ibeifeng/' + i + '.txt',function (error,data) {
        if (error)
            throw error
        data.toString()
        fs.writeFile('./files/' + i + '.txt', data.toString(),function (err) {
            console.log(i)
            if (err)
                throw err
            console.log(i + '.txt写入成功')
        })
    })
}*/

/*
// 将十个文件内容整合到一个文件
var fs = require('fs')
var dataList = ''
for (var i =0;i<10;i++){
    fs.readFile('./ibeifeng/' + i + '.txt',function (error,data) {
        if (error)
            throw error
        data.toString()
        dataList +=data.toString()
        fs.writeFile('./ibeifeng/dataList.txt',dataList,function (err) {
            if (err)
                throw err
        })
    })
}
console.log('写入成功！')*/

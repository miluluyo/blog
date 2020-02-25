---
title: 10. Window 对象
---

## 1. navigator 导航器对象

编码|详解
-|-|
appCodeName|返回浏览器的代码名
appName|返回浏览器的名称
appVersion|返回浏览器的平台和版本信息
cookieEnabled|返回指明浏览器中是否启用cookie的布尔值
platform|返回运行浏览器的操作系统平台
userAgent|返回由客户机发送服务器的user-agent头部的值

## 2. screen 显示器对象

编码|详解
-|-|
availHeight|返回显示屏幕的可用高度
availWidth|返回显示屏幕的可用宽度
height|返回屏幕的像素高度
width|返回屏幕的像素宽度
colorDepth|返回屏幕颜色的位数

## 3. history 历史对象

编码|详解
-|-|
back()|返回前一个URL
forward()|返回下一个URL
go()|返回某个具体页面

## 4. location 位置对象

**属性**

编码|详解
-|-|
hash|设置或返回从井号(#)开始的URL
host|设置或返回主机名和当前URL的端口号
hostname|设置或返回当前URL的主机名
href|设置或返回完整的URL
pathname|设置或返回当前URL的路径部分
port|设置或返回当前URL的端口号
protocol|设置或返回当前URL的协议
search|设置或返回从问号(?)开始的URL

**方法**

编码|详解
-|-|
assign(URL)|加载新的文档
reload()|重新加载当前页面
replace(newURL)|用新的文档替换当前文档

## 5. document 文档对象

**集合**

编码|详解
-|-|
anchors[]|描点对象数组
images[]|图片对象数组
links[]|连接对象数组
forms[]|表单对象数组

**属性**

编码|详解
-|-|
cookie|设置或返回与当前文档有关的所有cookie
domain|返回当前文档的域名
referrer|返回载入当前文档的文档的URL
title|返回当前文档的标题
URL|返回当前文档的URL

**方法**

编码|详解
-|-|
open()|打开一个新的文档，并擦除旧文档内容
close()|关闭文档输出流
write()|向当前文档追加写入文本
writeIn()|与write()相同，在`<pre>`中会追加换行

## 6. 窗口控制

编码|语法|详解
-|-|-|
moveBy|moveBy(水平位移量,垂直位移量)|按照给定像素参数移动指定窗口
moveTo|moveTo(x,y)|将窗口移动到指定的指定坐标(x,y)处
resizeBy|resizeBy(水平,垂直)|将当前窗口改变指定的大小(x,y)<br/>当x、y的值大于0时为扩大<br/>当x、y的值小于0时为缩小
resizeTo|resizeTo(水平宽度,垂直宽度)|将当前窗口改成(x,y)大小，x、y分别为宽度和高度
scrollBy|scrollBy(水平位移量,垂直位移量)|将窗口中的内容按给定的位移量滚动<br/>参数为整数时，正向滚动，否则反向滚动
scrollTo|scrollTo(x,y)|将窗口中的内容滚动到指定位置

## 7. 焦点控制

编码|详解
-|-|
focus|得到焦点
blur|移出焦点

## 8. 打开关闭窗口

**open**

编码|语法|详解
-|-|-|
open|open("URL","窗口名称","窗口风格")|打开一个新的窗口，并在窗口中装载指定URL地址的网页

>窗口风格
>>编码|语法|详解
>>-|-|-|
>>location|yes/no|是否显示地址栏
>>menubar|yes/no|是否显示菜单栏
>>resizable|yes/no|是否可以改变窗口大小
>>scrollbars|yes/no|是否允许出现滚动条
>>status|yes/no|是否显示状态栏
>>toolbar|yes/no|是否显示工具栏

**close**
编码|语法|详解
-|-|-|
close|close()|自动关闭浏览器窗口

## 9. 定时器

编码|语法|详解
-|-|-|
setTimeout|setTimeout(执行代码,毫秒数)|当到了指定多的毫秒数后，自动执行功能代码
clearTimeout|clearTimeout(定时器)|取消由setTimeout()设置的定时器
setInterval|setInterval(重复执行的代码,毫秒数)|按指定周期重复执行功能代码
clerInterval|clearInterval(时间间隔器)|取消由setInterval()设置的时间间隔器

## 10. 对话框

编码|语法|详解
-|-|-|
alert|alert("提示字符串")|弹出警告框，在警告框内显示提示字符串文本
confirm|confirm("确认字符串")|显示一个确认框，在确认框内显示提示字符串<br/>当用户单击“确认”按钮时该方法返回true,单击“取消”返回false
prompt|prompt("提示字符串","缺省文本")|显示一个输入框，在输入框内显示提示字符串<br/>在输入文本框显示缺省文本，并等待用户输入<br/>当用户单击“确认”按钮时，返回输入的字符串，点击“取消”时返回null

## 11. 属性

**状态栏**

编码|详解
-|-|
defaultStatus|改变浏览器状态栏的默认显示
status|临时改变浏览器状态栏的显示

**窗口位置**

>IE
>>screenLeft 声明窗口的左上角的X坐标 <br/>
>>screeTop 声明窗口的左上角的Y坐标 <br/>
>>document.body.scrollLeft 声明当前文档向右滚动过的像素数 <br/>
>>document.body.scrollTop 声明当前文档向下滚动过的像素数

>!IE
>>screenX 声明窗口的左上角的X坐标 <br/>
>>screenY 声明窗口的左上角的Y坐标 <br/>
>>pageXOffset 声明当前文档向右滚动过的像素数 <br/>
>>pageYOffset 声明当前文档向下滚动过的像素数

>FF
>>innerHeight 返回窗口的文档显示区的高度 <br/>
>>innerWidth 返回窗口的文档显示区的宽度 <br/>
>>outerHeight 返回窗口的外部高度 <br/>
>>outerWidth 返回窗口的外部宽度

**其他属性**

编码|详解
-|-|
opener|可以实现同域名下跨窗体之间的通讯<br/>一个窗体要包含另一个窗体的opener
closed|当前窗口关闭时返回true
name|设置或返回窗口的名称
self|返回对当前窗口的引用


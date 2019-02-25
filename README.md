# Wml2Canvas 介绍

## 特性
> * 配置数据绘制基础图形、文字
> * wxml元素转换成canvas元素

## 示例
直接在小程序开发工具里运行项目，可看到两种使用方式。


## 使用方式

安装：

```
    npm install git+https://github.com/wg-front/wxml2canvas.git
```

wxml:

```html
<view class="share__canvas share__canvas1">
    <view class="share__canvas1-text draw_canvas" 
        data-type="text" data-text="这是一段无边距文字">
        这是一段无边距文字
    </view>
</view>
<canvas canvas-id="canvas1" class="share__canvas"></canvas>
```
js:

```javascript
import Wxml2Canvas from 'wxml2canvas'; // 根据具体路径修改，node_modules会被忽略
Page({
    drawImage1 () {
        let self = this;
        this.drawImage1 = new Wxml2Canvas({
            width: 340, // 宽， 以iphone6为基准，传具体数值，其他机型自动适配
            height: 210, // 高
            element: 'canvas1', 
            background: '#f0f0f0',
            progress (percent) {
            },
            finish(url) {
                let imgs = self.data.imgs;
                imgs.push(url);

                self.setData({
                    imgs
                })
            },
            error (res) {
            }
        });

        let data = {
            list: [{
                type: 'wxml',
                class: '.share__canvas1 .draw_canvas', // draw_canvas指定待绘制的元素
                limit: '.share__canvas1', // 限定绘制元素的范围，取指定元素与它的相对位置
                x: 0,
                y: 0
            }]
        }

        this.drawImage1.draw(data);
    },
})
```

## 属性

### 初始化属性

`new Wxml2Canvas(options)` 时传入的`options`属性如下：

| 属性名 | 类型 | 默认值 | 是否必填 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| element | String | '' | 是 | 画布的id |
| width | Number | 0 | 是 | 画布的宽，以iphone6的375为基准，其他机型按比例自动设置实际宽度 |
| height | Number | 0 | 是 | 画布的高，同上 |
| width | Number | width * 2 | 否 | 输出的图片的宽度 |
| height | Number | height * 2 | 否 | 输出的图片的高度 |
| zoom | Number | 1 | 否 | 画布整体缩放比例，不建议传值，会覆盖各种机型的适配 |
| translateX | Number | 0 | 否 | 画布整体横向位移 |
| translateY | Number | 0 | 否 | 画布整体纵向位移 |
| height | Number | height * 2 | 否 | 输出的图片的高度 |
| background | String | #ffffff | 否 | 画布的整体背景色 |
| gradientBackground | Object | null | 否 | 画布整体的渐变背景色 |
| finish | Function | null | 否 | 绘制成功后回调函数, 返回值url，绘制图片的本地路径 |
| progress | Function | null | 否 | 绘制进度，返回值percent，0-100 |
| error | Function | null | 否 | 绘制失败后回调函数，返回值object，包含具体原因 |

绘制失败的原因如下：

| 错误码 | 原因 | 说明 |
| -------- | ----- | ---- |
| errcode | errmsg | e |
| 1000 | save canvas error | 保存图片失败 |
| 1001 | download pic error | 预下载图片失败 |
| 1002 | drawRect error | 绘制矩形失败 |
| 1003 | drawImage error | 绘制图片失败 |
| 1004 | drawText error | 绘制文本失败 |
| 1005 | drawCircle error | 绘制圆形图片失败 |
| 1006 | drawCircleImage error | 绘制圆形失败 |
| 1007 | drawLine error | 绘制线条失败 |
| 1008 | drawWxml error | 绘制Wxml失败 |
| 1009 | drawWxml preLoadImage error | 预下载Wxml图片失败 |

## 数据配置方式支持的格式

代码示例：

```javascript
let data = {
    list: [{
        type: 'rect',
        x: 10,
        y: 10,
        style: {
            width: 150,
            height: 80,
            fill: '#3762ab',
            border: '10px solid #aaaaaa',
        }
    }
}
```
上述是一个矩形的创建方式，可看代码里的示例。下面是支持的属性：

### 矩形

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| type | String | 是 | 'rect'，声明为绘制矩形 |
| x | Number | 是 | 坐标x |
| y | Number | 是 | 坐标y |
| style |
| width | Number | 是 | 宽 |
| height | Number | 是 | 高 |
| fill | String 或 Object | 否 | 填充颜色，支持渐变色 |
| border | String | 否 | 边框，需要严格遵循 __'10px dashed #540821'__ 格式 |
| boxShadow | String | 否 | 阴影，需要严格遵循 __'10 20 20 rgba(0, 0, 0, 0.4)'__ 格式 |
| dash | Array | 否 | 虚线边框的间距和偏移 |

### 圆形

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| type | String | 是 | 'circle'，声明为绘制圆形 |
| x | Number | 是 | 坐标x |
| y | Number | 是 | 坐标y |
| style |
| r | Number | 是 | 半径 |
| fill | String 或 Object | 否 | 填充颜色，支持渐变色 |
| border | String | 否 | 边框，需要严格遵循 __'10px dashed #540821'__ 格式 |
| boxShadow | String | 否 | 阴影，需要严格遵循 __'10 20 20 rgba(0, 0, 0, 0.4)'__ 格式 |
| dash | Array | 否 | 虚线边框的间距和偏移 |

### 线条

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| type | String | 是 | 'line'，声明为绘制线条 |
| x | Number | 是 | 起始坐标x |
| y | Number | 是 | 起始坐标y |
| x2 | Number | 是 | 终止坐标x |
| y2 | Number | 是 | 终止坐标y |
| style |
| width | Number | 是 | 线条宽度 |
| stroke | String 或 Object | 否 | 填充颜色，支持渐变色 |
| boxShadow | String | 否 | 阴影，需要严格遵循 __'10 20 20 rgba(0, 0, 0, 0.4)'__ 格式 |
| dash | Array | 否 | 有此属性则绘制虚线，传入值为虚线边框的间距和偏移 |

### 图片

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| type | String | 是 | 'image'，声明为绘制图片 |
| x | Number | 是 | 坐标x |
| y | Number | 是 | 坐标y |
| url | String | 是 | 图片链接，支持 http/https 及本地图片，域名需要在mp平台加入白名单 |
| style |
| width | Number | 是 | 宽 |
| height | Number | 是 | 高 |
| border | String | 否 | 边框，需要严格遵循 __'10px dashed #540821'__ 格式 |
| boxShadow | String | 否 | 阴影，需要严格遵循 __'10 20 20 rgba(0, 0, 0, 0.4)'__ 格式 |
| dash | Array | 否 | 虚线边框的间距和偏移 |

### 圆形图片

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| type | String | 是 | 'radius-image'，声明为绘制圆形图片 |
| x | Number | 是 | 坐标x |
| y | Number | 是 | 坐标y |
| url | String | 是 | 图片链接，支持 http/https 及本地图片，域名需要在mp平台加入白名单 |
| style |
| r | Number | 是 | 半径 |
| border | String | 否 | 边框，需要严格遵循 __'10px dashed #540821'__ 格式 |
| boxShadow | String | 否 | 阴影，需要严格遵循 __'10 20 20 rgba(0, 0, 0, 0.4)'__ 格式 |
| dash | Array | 否 | 虚线边框的间距和偏移 |

### 文本

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| type | String | 是 | 'text'，声明为绘制文本 |
| x | Number | 是 | 坐标x |
| y | Number | 是 | 坐标y |
| text | String | 否 | 文本内容 |
| style |
| width | Number | 否 | 文本最大宽，超过则换行 |
| height | Number | 否 | 文本高度 |
| color | String | 否 | 字体颜色 |
| fontSize | Number | 否 | 字体大小，默认14 |
| fontFamily | String | 否 | 字体样式 |
| lineHeight | Number | 否 | 字体行高，默认14 * 1.2 |
| fontWeight | String | 否 | 字体粗细，默认normal |
| lineClamp | Number | 否 | 文字的最大行数，超出则用 ... 截取 |
| whiteSpace | String | 否 | 是否换行，默认wrap，如果传入nowrap，则不换行 |
| textAlign | String | 否 | 文本的水平对齐方式，默认left |
| border | String | 否 | 边框，需要严格遵循 __'10px dashed #540821'__ 格式 |
| background | String | 否 | 字体背景色 |
| boxShadow | String | 否 | 阴影，需要严格遵循 __'10 20 20 rgba(0, 0, 0, 0.4)'__ 格式 |
| dash | Array | 否 | 虚线边框的间距和偏移 |
| padding | String | 否 | 内边距，'10 10 10 10', 与css有区别，依次为左、上、右、下，可以不带单位 |

此外，上述所有的元素都可以增加 __delay:true__ 属性，来实现延迟绘制。

## wxml转换的方式

如上面的使用示例，声明type为wxml时，会查询绘制元素节点的样式并绘制。下表是对应属性：

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| type | String | 是 | 'wxml'，声明转换wxml |
| x | Number | 是 | 坐标x，用于修正位置 |
| y | Number | 是 | 坐标y，用于修正位置 |
| class | String | 是 | 待查询绘制的节点类名，会查询所有相同的类名 |
| limit | String | 是 | 限定节点的外围容器，在取坐标时，取与它的相对位置 |

目前支持的wxml类型如下，需要声明在节点上：

### 图片

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| data-type | String | 是 | 'image'，矩形图片 |
| data-url | String | 是 | 图片链接 |
| data-left | Number | 否 | 修正横坐标位置 |
| data-top | Number | 否 | 修正纵坐标位置 |

### 圆形图片

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| data-type | String | 是 | 'radius-image'，圆形图片 |
| data-url | String | 是 | 图片链接 |
| data-left | Number | 否 | 修正横坐标位置 |
| data-top | Number | 否 | 修正纵坐标位置 |

### 背景图片

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| data-type | String | 是 | 'background-image'，背景图片 |
| data-left | Number | 否 | 修正横坐标位置 |
| data-top | Number | 否 | 修正纵坐标位置 |

### 文本

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| data-type | String | 是 | 'text'，文本 |
| data-text | String | 是 | 文本内容 |
| data-left | Number | 否 | 修正横坐标位置 |
| data-top | Number | 否 | 修正纵坐标位置 |
| data-padding | String | 否 | 内边距，与style叠加 |
| data-background | String | 否 | 背景色 |

### 行内文本

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| data-type | String | 是 | 'inline-text'，行内文本 |
| data-text | String | 是 | 文本内容 |
| data-left | Number | 否 | 修正横坐标位置 |
| data-top | Number | 否 | 修正纵坐标位置 |
| data-padding | String | 否 | 内边距，与style叠加 |
| data-background | String | 否 | 背景色 |

### 行内图片

| 属性 | 类型 | 是否必填 | 说明 |
| -------- | ----- | ---- | --- |
| data-type | String | 是 | 'inline-image'，矩形图片 |
| data-url | String | 是 | 图片链接 |
| data-left | Number | 否 | 修正横坐标位置 |
| data-top | Number | 否 | 修正纵坐标位置 |

行内文本与图片有特殊处理逻辑，当top值相同时，按照从左到右顺序排列，可能会与展现有差异。

此外，上述所有的元素都可以增加 __delay:Number__ 属性，来实现延迟绘制, number范围：1-100，间接实现层级控制。


## Todo

> * 支持图片裁剪
> * 支持更多文本样式
> * 支持任意角度圆角

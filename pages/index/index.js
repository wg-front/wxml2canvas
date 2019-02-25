import Wxml2Canvas from '../../src/index';

Page({
    data: {

    },

    onLoad (res) {
        this.drawImage1();
        this.drawImage2();
        this.drawImage3();
        this.drawImage4();
        this.drawImage5();
        this.drawImage6();
        this.drawImage7();
        this.drawImage8();
    },

    drawImage1 () {
        this.drawImage1 = new Wxml2Canvas({
            width: 340,
            height: 210,
            element: 'canvas1',
            gradientBackground: {
                color: ['#27326b', '#540821'],
                line: [0, 0, 0, 210]
            },
            finish(url) {
            },
            error (res) {
            }
        });
    },

    drawImage2 () {
        this.drawImage2 = new Wxml2Canvas({
            width: 340,
            height: 210,
            element: 'canvas2',
            background: '#f0f0f0',
            finish(url) {
            },
            error (res) {
            }
        });

        let data2 = {
            list: [{
                type: 'rect',
                x: 10,
                y: 10,
                style: {
                    width: 150,
                    height: 80,
                    fill: {
                        color: ['#27326b', '#540821'],
                        line: [0, 0, 0, 110]
                    },
                    border: '10px solid #aaaaaa',
                }
            },{
                type: 'rect',
                x: 170,
                y: 100,
                style: {
                    width: 150,
                    height: 80,
                    fill: '#3762ab',
                    border: '10px dashed #540821',
                    boxShadow: '10 20 20 rgba(0, 0, 0, 0.4)',
                    // dash: [10, 20, 10]
                }
            }]
        }

        this.drawImage2.draw(data2);
    },

    drawImage3 () {
        this.drawImage3 = new Wxml2Canvas({
            width: 340,
            height: 210,
            element: 'canvas3',
            background: '#f0f0f0',
            finish(url) {
            },
            error (res) {
            }
        });

        let text = '一行很长很长很长很长很长很长很长很长很长很长的文字';

        let data3 = {
            list: [{
                type: 'text',
                text,
                x: 0,
                y: 0,
                style: {
                    textAlign: 'left',
                    width: 130,
                    height: 80,
                    fontSize: 14,
                    lineHeight: 16,
                    fontWeight: 'bold',
                    boxShadow: '5 5 20 rgba(255, 0, 0, 0.5)',
                }
            }, {
                type: 'text',
                text,
                x: 170,
                y: 0,
                style: {
                    textAlign: 'center',
                    width: 130,
                    fontSize: 14,
                    lineHeight: 16,
                    color: '#888888',
                }
            }, {
                type: 'text',
                text,
                x: 0,
                y: 70,
                style: {
                    textAlign: 'right',
                    width: 130,
                    fontSize: 14,
                    lineHeight: 16,
                    fontFamily: 'Serif'
                }
            }, {
                type: 'text',
                text,
                x: 170,
                y: 70,
                style: {
                    textAlign: 'center',
                    width: 130,
                    lineClamp: 2,
                    fontSize: 14,
                    lineHeight: 16,
                }
            }, {
                type: 'text',
                text,
                x: 0,
                y: 140,
                style: {
                    textAlign: 'left',
                    width: 130,
                    fontSize: 14,
                    lineHeight: 16,
                    height: 60,
                    background: 'rgba(0, 111, 255, 0.5)',
                    color: '#ffffff'
                }
            }, {
                type: 'text',
                text,
                x: 170,
                y: 140,
                style: {
                    textAlign: 'left',
                    width: 130,
                    background: 'rgba(255, 0, 0, 0.3)',
                    fontSize: 14,
                    lineHeight: 16,
                    height: 60,
                    border: '2px solid #000000',
                    padding: '5 10 0 10'
                }
            }]
        }

        this.drawImage3.draw(data3);
    },

    drawImage4 () {
        this.drawImage4 = new Wxml2Canvas({
            width: 340,
            height: 210,
            element: 'canvas4',
            background: '#f0f0f0',
            finish(url) {
            },
            error (res) {
            }
        });

        let data4 = {
            list: [{
                type: 'circle',
                x: 30,
                y: 30,
                style: {
                    r: 40,
                    fill: {
                        color: ['#27326b', '#540821'],
                        line: [0, 0, 0, 110]
                    },
                    border: '10px solid #aaaaaa',
                    boxShadow: '10 10 20 rgba(0, 0, 0, 0.6)',
                }
            },{
                type: 'circle',
                x: 200,
                y: 100,
                style: {
                    r: 40,
                    fill: '#3762ab',
                    border: '10px dashed #540821',
                    // dash: [10, 20, 10]
                }
            }]
        }

        this.drawImage4.draw(data4);
    },

    drawImage5 () {
        this.drawImage5 = new Wxml2Canvas({
            width: 340,
            height: 210,
            element: 'canvas5',
            background: '#f0f0f0',
            finish(url) {
            },
            error (res) {
            }
        });

        let data5 = {
            list: [{
                type: 'line',
                x: 30,
                y: 30,
                x2: 200,
                y2: 30,
                style: {
                    width: 10,
                    // stroke: '#3762ab',
                    stroke: {
                        color: ['#27326b', '#540821'],
                        line: [0, 0, 200, 10]
                    },
                }
            },{
                type: 'line',
                x: 30,
                y: 100,
                x2: 200,
                y2: 100,
                style: {
                    r: 40,
                    width: 10,
                    stroke: '#3762ab',
                    dash: [10, 10, 0],
                    boxShadow: '20 20 20 rgba(0, 0, 0, 0.3)',
                }
            }]
        }

        this.drawImage5.draw(data5);
    },

    drawImage6 () {
        this.drawImage6 = new Wxml2Canvas({
            width: 340,
            height: 210,
            element: 'canvas6',
            background: '#f0f0f0',
            finish(url) {
            },
            error (res) {
            }
        });

        let data6 = {
            list: [{
                type: 'image',
                x: 10,
                y: 10,
                url: 'https://mmocgame.qpic.cn/wechatgame/duc2TvpEgSQCEa0WicosqlEgJiacYLaTLEDFB8Kq9Hr7LjAVhM8wu8TT77KqNezQnH/0',
                style: {
                    width: 150,
                    height: 80,
                    border: '10px solid #aaaaaa',
                    boxShadow: '10 20 20 rgba(0, 0, 0, 0.4)',
                }
            },{
                type: 'image',
                x: 170,
                y: 100,
                url: './img/demo.png',
                style: {
                    width: 150,
                    height: 80,
                    border: '10px dashed #540821',
                    // dash: [10, 20, 10]
                }
            }]
        }

        this.drawImage6.draw(data6);
    },

    drawImage7 () {
        this.drawImage7 = new Wxml2Canvas({
            width: 340,
            height: 210,
            element: 'canvas7',
            background: '#f0f0f0',
            finish(url) {
            },
            error (res) {
            }
        });

        let data7 = {
            list: [{
                type: 'radius-image',
                x: 10,
                y: 10,
                url: './img/demo.png',
                style: {
                    r: 40,
                    border: '10px solid #aaaaaa',
                    boxShadow: '10 10 20 rgba(0, 0, 0, 0.6)',
                }
            },{
                type: 'radius-image',
                x: 170,
                y: 100,
                url: './img/demo.png',
                style: {
                    r: 40,
                    border: '10px dashed #540821',
                    // dash: [10, 20, 10]
                }
            }]
        }

        this.drawImage7.draw(data7);
    },

    drawImage8 () {
        this.drawImage8 = new Wxml2Canvas({
            width: 340,
            height: 400,
            element: 'canvas8',
            background: '#f0f0f0',
            finish(url) {
            },
            error (res) {
            }
        });

        let style = {
            text: {
                textAlign: 'left',
                width: 320,
                fontSize: 16,
                lineHeight: 25,
            }
        }

        let text = [
            'Wxml2Cavnas库，是一个生成小程序分享图的通用方案，提供了两种绘制方式：',
            '封装基础图形的绘制接口，包括矩形、圆形、线条、图片、圆角图片、纯文本等，使用时只需要声明元素类型并提供关键数据即可，不需要再关注canvas的具体绘制过程；',
            'wxml直接转换成canvas元素，使用时传入待绘制的wxml节点的class类名，并且声明绘制此节点的类型（图片、文字等），会自动读取此节点的computedStyle，利用这些数据完成元素的绘制。',
        ]
        
        let height1 = 20 + Math.ceil(this.drawImage8.measureWidth(text[0], '16px pingfang') / style.text.width) * style.text.lineHeight;
        let height2 = height1 + 10 + Math.ceil(this.drawImage8.measureWidth(text[1], '16px pingfang') / style.text.width) * style.text.lineHeight;
        let data8 = {
            list: [
                {
                    type: 'text',
                    text: text[0],
                    x: 10,
                    y: 10,
                    style: style.text
                }, {
                    type: 'text',
                    text: text[1],
                    x: 10,
                    y: height1,
                    style: style.text
                }, {
                    type: 'image',
                    x: 10,
                    y: height2,
                    url: './img/demo.png',
                    style: {
                        width: 100,
                        height: 60,
                    }
                }, {
                    type: 'text',
                    text: text[2],
                    x: 15,
                    y: height2 + 80,
                    style: style.text
                }
            ]
        }

        this.drawImage8.draw(data8);
    }
});
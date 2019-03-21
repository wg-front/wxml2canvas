import Wxml2Canvas from '../../src/index';

Page({
    data: {
        imgs: []
    },

    onLoad (res) {
        this.drawImage1();

        setTimeout(() => {
            this.drawImage2();
        }, 300);

        setTimeout(() => {
            this.drawImage3();
        }, 600)

        setTimeout(() => {
            this.drawImage4();
        }, 900)

        setTimeout(() => {
            this.drawImage5();
        }, 1200)

        setTimeout(() => {
            this.drawImage6();
        }, 1500)
    },

    saveImage (evt) {
        let index = evt.target.dataset.index;

        wx.saveImageToPhotosAlbum({
            filePath: this.data.imgs[index],
            success(res) {
                wx.showToast({
                    title: '保存成功',
                    icon: 'success'
                })
            },
            fail () {
                wx.showToast({
                    title: '保存失败',
                    icon: 'none'
                })
            }
        })
    },

    drawImage1 () {
        let self = this;
        this.drawImage1 = new Wxml2Canvas({
            width: 340,
            height: 210,
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
                class: '.share__canvas1 .draw_canvas',
                limit: '.share__canvas1',
                x: 0,
                y: 0
            }]
        }

        this.drawImage1.draw(data);
    },

    drawImage2 () {
        let self = this;
        this.drawImage2 = new Wxml2Canvas({
            width: 340,
            height: 210,
            element: 'canvas2',
            background: '#f0f0f0',
            progress (percent) {
            },
            finish(url) {
                console.log(url)
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
                class: '.share__canvas2 .draw_canvas',
                limit: '.share__canvas2',
                x: 0,
                y: 0
            }]
        }

        this.drawImage2.draw(data);
    },

    drawImage3 () {
        let self = this;
        this.drawImage3 = new Wxml2Canvas({
            width: 340,
            height: 210,
            element: 'canvas3',
            background: '#f0f0f0',
            progress (percent) {
                // console.log(percent)
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
                class: '.share__canvas3 .draw_canvas',
                limit: '.share__canvas3',
                x: 0,
                y: 0
            }]
        }

        this.drawImage3.draw(data);
    },

    drawImage4 () {
        let self = this;
        this.drawImage4 = new Wxml2Canvas({
            width: 340,
            height: 400,
            element: 'canvas4',
            background: '#f0f0f0',
            progress (percent) {
                // console.log(percent)
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
                class: '.share__canvas4 .draw_canvas',
                limit: '.share__canvas4',
                x: 0,
                y: 0
            }]
        }

        this.drawImage4.draw(data);
    },

    drawImage5 () {
        let self = this;
        this.drawImage5 = new Wxml2Canvas({
            width: 340,
            height: 210,
            element: 'canvas5',
            background: '#f0f0f0',
            progress (percent) {
                // console.log(percent)
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
                class: '.share__canvas5 .draw_canvas',
                limit: '.share__canvas5',
                x: 0,
                y: 0
            }]
        }

        this.drawImage5.draw(data);
    },

    drawImage6 () {
        let self = this;
        this.drawImage6 = new Wxml2Canvas({
            width: 340,
            height: 450,
            element: 'canvas6',
            background: '#f0f0f0',
            progress (percent) {
                // console.log(percent)
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
                class: '.share__canvas6 .draw_canvas',
                limit: '.share__canvas6',
                x: 0,
                y: 0
            }]
        }

        this.drawImage6.draw(data);
    }
});
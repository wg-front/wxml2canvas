/**
 * 获取字符的长度，full为true时，一个汉字算两个长度
 * @param {String} str 
 * @param {Boolean} full 
 */

function getTextLength (str, full) {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        //单字节加1 
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        }
        else {
            len += (full ? 2 : 1);
        }
    }
    return len;
}

/**
 * rgba(255, 255, 255, 1) => #ffffff
 * @param {String} color 
 */
function transferColor (color = '') {
    let res = '#';
    color = color.replace(/^rgba?\(/, '').replace(/\)$/, '');
    color = color.split(', ');
    
    color.length > 3 ? color.length = 3 : '';
    for(let item of color) {
        item = parseInt(item || 0);
        if(item < 10) {
            res += ('0' + item)
        }else {
            res += (item.toString(16))
        }
    }

    return res;
}

function transferBorder (border = '') {
    let res = border.match(/(\w+)px\s(\w+)\s(.*)/);
    let obj = {};

    if(res) {
         obj = {
            width: +res[1],
            style: res[2],
            color: res[3]
        }
    }
    
    return res ? obj : null;
}


/**
 * 内边距，依次为上右下左
 * @param {*} padding 
 */
function transferPadding (padding = '0 0 0 0') {
    padding = padding.split(' ');
    for(let i = 0, len = padding.length; i < len; i++) {
        padding[i] = +padding[i].replace('px', '');
    }

    return padding;
}
/**
 * type1: 0, 25, 17, rgba(0, 0, 0, 0.3)
 * type2: rgba(0, 0, 0, 0.3) 0px 25px 17px 0px => (0, 25, 17, rgba(0, 0, 0, 0.3))
 * @param {*} shadow 
 */
function transferBoxShadow(shadow = '', type) {
    if(!shadow || shadow === 'none') return;
    let color;
    let split;

    split = shadow.match(/(\w+)\s(\w+)\s(\w+)\s(rgb.*)/);

    if (split) {
        split.shift();
        shadow = split;
        color = split[3] || '#ffffff';
    } else {
        split = shadow.split(') ');
        color = split[0] + ')'
        shadow = split[1].split('px ');
    }

    return {
        offsetX: +shadow[0] || 0,
        offsetY: +shadow[1] || 0,
        blur: +shadow[2] || 0,
        color
    }
}

function getUid(prefix) {
    prefix = prefix || '';

    return (
        prefix +
        'xxyxxyxx'.replace(/[xy]/g, c => {
            let r = (Math.random() * 16) | 0;
            let v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        })
    );
}

export default {
    getTextLength,
    transferBorder,
    transferColor,
    transferPadding,
    transferBoxShadow,
    getUid
}
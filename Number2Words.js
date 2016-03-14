function number2words(n) {
    // works for numbers between 0 and 999999   
    var transferDic = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        1000: 'thousand'
    };

    var ret = translate(n, transferDic);
    return ret;
}

function translate(num, transferDic) {
    var len = num.toString().length;
    var multiple = 0;
    var digit = 0;
    if (len === 1) {
        return transferDic[num];
    }
    else if (len === 2) {
        if (num >= 10 && num <= 20) {
            return transferDic[num];
        } else {
            multiple = Math.floor(num / 10);
            digit = num % 10;
            if (digit > 0) {
                return transferDic[multiple * 10] + '-' + transferDic[digit];
            } else {
                return transferDic[multiple * 10];
            }
            
        }
    } else if (len === 3) {
        multiple = Math.floor(num / 100);
        digit = num % 100;
        if (digit > 0) {
            return transferDic[multiple] + ' ' + transferDic[100] + ' ' + translate(digit, transferDic);
        } else {
            return transferDic[multiple] + ' ' + transferDic[100];
        }
        
    }
    else if (len > 3) {
        multiple = Math.floor(num / 1000);
        var remain = num - multiple * 1000;
        if (remain > 0) {
            return translate(multiple, transferDic) + ' ' + transferDic[1000] + ' ' + translate(remain, transferDic);
        } else {
            return translate(multiple, transferDic) + ' ' + transferDic[1000];
        }
    }
}
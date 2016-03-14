function nextBigger(n) {
    var str = n.toString();
    var next = -1;
    var sets = [];
    var processLength = 2;
    var got = false;
    if (str.length === 1) {
        return next;
    }

    var part1 = '';
    console.log(n);
    do {
        part1 = str.substr(0, str.length - processLength);
        var part2 = str.substr(str.length - processLength);
        document.write('part1 = ' + part1 + '<br>');
        document.write('part2 = ' + part2 + '<br>');
        var list = part2.split('');
        gen(list, sets, '', parseInt(part2));
        if (sets.length > 0) {
            //document.write('part2 = ' + part2 + '<br>');
            got = true;
        } else {
            processLength++;
        }
    } while (!got && processLength <= str.length);
    
    
    sets.sort(function(a, b) {
        return a - b;
    });
    
    document.write('sets = ' + sets + '<br>');
    
    next = got ? parseInt((part1 + sets.shift()), 10) : next;
    document.write('next = ' + next);
    return next;
}

function gen(list, sets, target, input) {
    if (list.length === 0) {
        if (parseInt(target, 10)  > input) {
            // forms the target
            sets.push(parseInt(target));
            return true;
        }

        return false;
    }

    var re = /^9*8*7*6*5*4*3*2*1*0*$/;
    if (re.test(input.toString())) {
        //document.write('Is desc = ' + re.test(input.toString()) + '<br>');
        return false;
    }
    

    for (var idx = 0; idx < list.length; idx++) {
        if(found){
            break;
        }
        var val = list[idx];
        //document.write('val = ' + val + '<br>');
        target += val;
        //document.write('target = ' + target + '<br>');
        var subList = list.filter((val, index, list) => index !== idx);
        //document.write('sub list = ' + subList + '<br>');
        var found = gen(subList, sets, target, input);

        target = target.substr(0, target.length - 1);
    }

}
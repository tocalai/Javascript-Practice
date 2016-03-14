triplets1 = [
  ['t', 's', 'f'],
  ['a', 's', 'u'],
  ['m', 'a', 'f'],
  ['a', 'i', 'n'],
  ['s', 'u', 'n'],
  ['m', 'f', 'u'],
  ['a', 't', 'h'],
  ['t', 'h', 'i'],
  ['h', 'i', 'f'],
  ['m', 'h', 'f'],
  ['a', 'u', 'n'],
  ['m', 'a', 't'],
  ['f', 'u', 'n'],
  ['h', 's', 'n'],
  ['a', 'i', 's'],
  ['m', 's', 'n'],
  ['m', 's', 'u']
];

String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

var recoverSecret = function (triplets) {
    //document.write(triplets + '<br>');
    var secret = arguments.length > 1 ? arguments[1] : triplets[0].join('');
    var preIdx;
    for (var start = 1; start < triplets.length; start++) {
        //document.write(triplets.length + '<br>');
        preIdx = -1;
        for (var lastIdex = triplets[start].length; lastIdex > 0; lastIdex--) {
            //document.write(triplets[start][lastIdex - 1] + '<br>');
            var curIdx = secret.indexOf(triplets[start][lastIdex - 1]);
            //document.write(curIdx + '<br>');
            if (curIdx === -1) {
                var insertPos = preIdx > 0 ? preIdx : 0;
                //document.write(insertPos + '<br>');
                secret = secret.splice(insertPos, 0, triplets[start][lastIdex - 1]);
                //document.write(secret + '<br>');
                preIdx = insertPos;
            } else {
                if (curIdx > preIdx && preIdx >= 0) {
                    //document.write('cur = ' + curIdx + ',pre = ' + preIdx + '<br>');
                    // do swap cause ordering
                    var swap = secret[curIdx];
                    secret = secret.replaceAt(curIdx, secret[preIdx]);
                    secret = secret.replaceAt(preIdx, swap);
                    // after swap, need to re-checking the previous ordering rule
                    var subTriplets = triplets.filter(function (element, index) {
                        if (index <= start - 1) {
                            return true;
                        }
                    });
                    //document.write(subTriplets[1] + '<br>');
                    secret = recoverSecret(subTriplets, secret);
                }
                preIdx = curIdx;
            }
        }
    }

    //document.write(secret);
    return secret;
}

/**
 * t,s,f,
 * a,s,u,
 * m,a,f,
 * a,i,n,
 * s,u,n,
 * m,f,u,
 * a,t,h,
 * t,h,i,
 * h,i,f,
 * m,h,f,
 * a,u,n,
 * m,a,t,
 * f,u,n,
 * h,s,n,
 * a,i,s,
 * m,s,n,
 * m,s,u
 * 
 * 
 */


recoverSecret(triplets1);
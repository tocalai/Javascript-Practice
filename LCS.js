

function LCS(str1, str2) {
    var sequence = [];
    var result = '';
    str1.split('').forEach(function(element) {
        var index = str2.split('')
        .map(function(target, idx) {
            if(target === element){
                return idx;
            }
        })
        .filter(function(val){
            return val >= 0;
        });
        


        if (index.length > 0) {
            sequence.push(index.reverse().slice(0));
        } 
    });
    
    if (sequence.length === 0) {
        return result;
    }
    
    var subSequence = sequence.length > 1 ? LIS(sequence.reduce((a, b) => a.concat(b))) : sequence;
    console.log("subSequence = " + subSequence);

    subSequence.forEach(function(index) {
        result += str2[index];
    });

    return result;
}

var LIS = function(nums) {
    console.log("target = " + nums);
    var dp = [];
    var subSequence = {
        value: [],
        highestPos: Number.MAX_VALUE
    };
    var sequence = {
        value: [],
        pos: []
    };

    var maxLength = getLength(nums);
    console.log("maxLength = " + maxLength);
    if(maxLength > 0){
        for(var start = maxLength - 1; start >= 0; start--){
            var index = sequence.pos.map(function(element, idx) {
                if(element === start && idx < subSequence.highestPos){
                    return idx;
                }
            }).filter(function(val){
                return val >= 0;
            }).pop(); 
            console.log("index = " + index);
            if(index !== -1){
                subSequence.value.unshift(sequence.value[index]);
                subSequence.highestPos = index;
            }
        }
    }

    return subSequence.value;

    function getLength(nums) {
        var i, len;
        for(i = 0; i < nums.length; i++){
            len = dp.length;
            sequence.value.push(nums[i]);
            console.log("num = " + nums[i]);
            console.log("len = " + len);
            if(len === 0 || dp[len - 1] < nums[i]){
                dp[len] = nums[i];
                sequence.pos.push(len);
            }else{
                var findIdex = binarySearch(nums[i], 0, len - 1);
                console.log("binarySearch = " + findIdex);
                dp[findIdex] = nums[i];
                sequence.pos.push(findIdex);            
            }
         
            //console.log("dp = " + dp);
        }

        console.log("sequence.value = " + sequence.value);
        console.log("sequence.pos = " + sequence.pos);
        return dp.length;
    }
     
    function binarySearch(num, i, j){
        if(i === j){
            return i;
        }
        var middle = parseInt((i + j) / 2);
        if(dp[middle] < num){
            return binarySearch(num, middle + 1, j);
        }
        return binarySearch(num, i, middle);
    }
};

// anothertest, notatest
//var result = LCS('abacd', 'dbaabca');
var result = LCS('anothertest', 'notatest');
console.log("result = " + result);
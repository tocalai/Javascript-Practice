var bowlingScore = function (rolls) {
    var scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var round = 1;
    for (var i = 0; i < rolls.length;) {
        if (round !== 10) {
            var layDown1 = rolls[i];
            var layDown2 = rolls[i + 1];
            var layDownNext = rolls[i + 2];
            if (layDown1 === 10) {
                // strike
                scores[round - 1] = 10 + layDown2 + layDownNext;
                i = i + 1;
            } else {
                if (layDown1 + layDown2 === 10) {
                    // spare
                    scores[round - 1] = 10 + layDownNext;
                } else {
                    scores[round - 1] = layDown1 + layDown2;
                }
                i = i + 2;
            }
            round++;
        } else {
            var score = rolls.slice(i).reduce((prev, cur) => prev + cur);
            scores[round - 1] = score;
            // end the for
            i = rolls.length;
        }
    }

    return scores.reduce((prev, cur) => prev + cur);
}

/*

Test.expect( 0 == bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) )
Test.expect( 190 == bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]) )
Test.expect( 300 == bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) )
Test.expect( 11 == bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]) )
Test.expect( 12 == bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]) )


*/
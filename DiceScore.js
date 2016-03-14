function score(dice) {
    var totalScores = 0;
    var points = {
        '111': 1000,
        '666': 600,
        '555': 500,
        '444': 400,
        '333': 300,
        '222': 200,
        '1': 100,
        '5': 50
    };
    var times = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: ''
    };

    for (var count = 0; count < dice.length; count++) {
        var frequency = times[dice[count]];
        if (frequency === '') {
            times[dice[count]] = dice[count].toString();
            if (points[dice[count].toString()] !== undefined) {
                totalScores += points[dice[count].toString()];
            }
        } else {
            times[dice[count]] += dice[count].toString();
            if (points[times[dice[count]]] !== undefined) {
                // combo got points
                totalScores += points[times[dice[count]]];
                // sbustract the single duplicate point count
                for (var start = 0; start < times[dice[count]].length - 1; start++) {
                    var dicePoint = times[dice[count]][start];
                    if (points[dicePoint] !== undefined) {
                        totalScores -= points[dicePoint];
                    }
                }
                // reset the freq
                times[dice[count]] = '';
            } else if (points[dice[count].toString()] !== undefined) {
                totalScores += points[dice[count].toString()];
            }
        }
    }

    return totalScores;
}


//Test.expect( score( [2, 4, 4, 5, 4] ) == 450, "Should be 450" );
//
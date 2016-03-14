function matrixMultiplication(a, b) {
    var productMatrix = [];
    var dimensiionN = a.length;
    var dimensiionM = b[0].length;

    for (var i = 0; i < dimensiionN; i++) {
        var row = [];
        for (var j = 0; j < dimensiionM; j++) {
            var c_ij = 0;
            for (var k = 0; k < dimensiionM; k++) {
                c_ij += a[i][k] * b[k][j];
               
            }
            row.push(c_ij);
        }
        productMatrix.push(row);
    }

    return productMatrix;
}


/*
C[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] = 1 * 3 + 2 * 1 = 5

C[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1] = 1 * 2+ 2 * 1 = 4

C[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0] = 3 * 3 + 2 * 1 = 11

C[1][1] = A[1][0] * B[0][1] + A[1][1] * B[1][1] = 3 * 2 + 2 * 1 = 8

*/

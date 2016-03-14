function calc(expr) {
    var result;
    var operator = ['+', '-', '*', '/'];
    var parse = expr.split(' ');
    var stack = [];

    for (var index = 0; index < parse.length; index++) {
        var val = parse[index];
        var isOperand = operator.filter((data) => data=== val.toString());
        if (isOperand.length === 0) {
            stack.push(val);
        } else {
            var num1 = stack.pop();
            var num2 = stack.pop();
            var ans = Operater(num1, num2, val);
            stack.push(ans);
        }
    }

    result = stack.length > 0 && expr !=='' ? stack.pop() : 0;

    return result;
}

function Operater(num1, num2, operator) {
    var ret = 0;
    switch(operator) {
        case '+':
            ret = num2 + num1;
            break;
        case '-':
            ret = num2 - num1;
            break;
        case '*':
            ret = num2 * num1;
            break;
        case '/':
            ret = num2 / num1;
            break;
    }

    return ret;
}

/*


*/
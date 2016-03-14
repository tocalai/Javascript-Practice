var DI = function (dependency) {
    this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
    var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    var text = func.toString();
    //document.writeln(func + '<br>');
    var args = text.match(FN_ARGS)[1].split(',');
    var self = this;
    //document.writeln(args + '<br>');
    var ret = args.map(function (value) {
        return self.dependency[value.toString().trim()];
    }).filter(function (value) {
        return value !== undefined;
    });
    //document.writeln(ret);

    return function () {
        return func.apply(func, ret);
    };
}


var deps = {
    'dep1': function () { return 'this is dep1'; },
    'dep2': function () { return 'this is dep2'; },
    'dep3': function () { return 'this is dep3'; },
    'dep4': function () { return 'this is dep4'; }
};

var di = new DI(deps);

var myFunc = di.inject(function (dep3, dep1, dep2) {
    return [dep1(), dep2(), dep3()].join(' -> ');
});

//document.writeln(myFunc());3
function func(fn) {
    return function() {
        fn.apply(this, arguments);
    };
}
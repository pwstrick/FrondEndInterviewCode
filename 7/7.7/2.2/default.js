var json = {
    "birthday": {
        "toJSON": function() {
            return "2017-01-01";
        }
    },
    "date": new Date()
};
var result = JSON.stringify(json, function(key, value) {
    if (value == "2017-01-01")
        return "2010-11-21";
    return value;
});
console.log(result);
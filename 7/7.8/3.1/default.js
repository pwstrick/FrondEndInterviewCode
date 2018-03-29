Date.now();
//老方法
var date = new Date();
+date;
date.getTime();
date.valueOf();

var date1 = new Date();
var date2 = new Date();
if (date1 > date2) {
    //...
} else if (date1 < date2) {
    //...
}
//Fri Jan 20 2017 11:11:05 GMT+0800 (中国标准时间)
var date1 = new Date(2017, 0, 20, 11, 11, 5);
console.log(date1);
//Fri Jan 20 2017 19:11:05 GMT+0800 (中国标准时间)
var date2 = new Date(Date.UTC(2017, 0, 20, 11, 11, 5));
console.log(date2);

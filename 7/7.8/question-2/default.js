function dateInterval(start, end) {
    var diff = Math.abs(start - end), 	                //取绝对值
        days = Math.ceil(diff / 1000 / 60 / 60 / 24);   //向上取整
    return days;
}

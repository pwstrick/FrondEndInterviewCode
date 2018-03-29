function parseUrl() {
	var parsed = {},
		url = location.search;
	if (url.length < 0) return parsed;
	// 将去除问号的查询字符串用&符号分割成数组
	var urls = url.split('?');
	if(urls.length <= 1) return parsed;
	// 数组的值为"key=value"格式的字符串
	var params = urls[1].split('&');
	// 参数化
	for(var i= 0, length=params.length; i<length; i++) {
		var element = params[i],
			position = element.indexOf('='),//搜索等号的位置
			key, //参数名
			value;//参数值
		if (position >= 0) {//有等号
			key = element.substr(0, position);
			value = element.substr(position + 1);
		} else {//无等号
			key = element;
			value = '';
		}
		//对参数值进行解码
		parsed[key] = decodeURIComponent(value);
	}
	//返回参数化后的对象
	return parsed;
}
var result = parseUrl();
console.log(result);
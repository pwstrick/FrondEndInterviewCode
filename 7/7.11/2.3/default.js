function func() {}
var obj = {
    func: function() {}
};
func(); 		//普通函数
obj.func(); 	//对象方法
new func(); 	//构造函数
func.call(obj); //间接调用
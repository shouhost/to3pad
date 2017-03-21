//JS中,语法上不支持重载，只能用arguments对象模拟重载
//如下这样模拟：
function cacle(){
	if(arguments.length==1){
		var n = parseInt(arguments[0]);
		akert(n*n);
	}else{
		var n = parseInt(arguments[0]);
		var m = parseInt(arguments[1]);
		alert(n+m)
	}
}
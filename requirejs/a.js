define(function(){
	var t='a_t';
	t1='a_t1';
	var t2 = function (){
		alert('a_t2');
	}
	var a = {a:'a.js',t,t1,t2};
    function fun1(){
      //alert("it works");
    }
    fun1();
	return a;
})
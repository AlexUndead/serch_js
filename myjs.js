var byField = function(an){

	return function ret (a,b){
		return a[an] - b[an];
	}
	
	
}

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];
users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
})


/*function makeBuffer(){
	var sumArg = "";
	function takeBuffer(a){
		if(a != undefined){
			sumArg += a;
		}else{
			alert(sumArg);
		}
	}
	takeBuffer.clear = function(){
		sumArg = "";
	}
	takeBuffer.log = function(){
		sumArg = console.log(takeBuffer);
	}
	return takeBuffer;
	
}
var buffer = makeBuffer();*/

/*var counter = makeCounter();
alert( counter() ); 
alert( counter() ); 
alert( counter() );*/


/*function mySort(arr){
	function compareNumeric(a, b) {
  		if (a > b) return 1;
  		if (a < b) return -1;
	}
	arr.sort(compareNumeric);

}
console.log(arr);*/

/*function filterRangeInPlace(arr, a, b){
	for (var i = 0; arr.length > i; i++){
		if(a<=arr[i] && arr[i]<=b)
		continue;
		else {
			arr.splice(i,1);
			i--;
		}
	}
	console.log(arr);
}

var arr = [22, 2, 3, 20, 50];

filterRangeInPlace(arr, 3, 45);*/


/*var obj = {
  className: 'open menu menu'
};
function removeClass(obj, strin){
	var arr = obj.className.split(' ');
	var elem = arr.indexOf(strin);
	if(elem !== -1)
	arr.splice(elem, 1);
	console.log(arr);
	for (var i = 0; arr.length > i; i++){
		if(arr[i] == strin){
			arr.splice(i, 1);
			i--;
		}		
	}
	console.log(arr);
}

removeClass(obj, "menu");
*/




/*var obj = {
  className: 'open menu'
}


function addClass(obj, cls){
	var arr = obj.className.split(' ');
	if (arr.indexOf(cls)) 
		arr.push(cls);
	console.log (arr.join(', '));
}
addClass(obj, "open");*/

/*function camelize(string){
	var arr = string.split('-');

	for (var i = 0; arr.length>i; i++){
		for(var j = 0; arr[i].length > j; j++){
			if(arr[i][j] == arr[i].charAt(0))
			arr[i][j] = arr[i][j].toUpperCase();
		}
		console.log(arr[i]);
		
	}
	var string = arr.join('');
	//console.log(string);
}
camelize("hi-jo");*/
//house=h   foreman=f   cuddy=u   cameron=a wilson=w chase=c

//var dict= ["h", "f", "u", "a", "w", "c"];
var answer=[];
var count='';
$(document).ready(function(){
	$('.house, .foreman, .cuddy, .cameron, .wilson, .chase, .app').hide();
	$( "form" ).submit(function( event ) {
    answer=[$('input[name=t0]:checked').val(), $('input[name=t1]:checked').val(),
    $('input[name=t2]:checked').val(), $('input[name=t3]:checked').val(), 
    $('input[name=t4]:checked').val(), $('input[name=t5]:checked').val(), 
    $('input[name=t6]:checked').val(), $('input[name=t7]:checked').val(), 
    $('input[name=t8]:checked').val()];
    event.preventDefault();
    for (var i=0; i<answer.length; i++)
    {
    	if (typeof answer[i]!='undefined'){
	    	var a= answer[i].toString();
	    	count += a;
    	};
	}
	var result= frequency(count);
	console.log(result);
	showChar(result);
	});
});

var showChar = function(result){
	switch (result){
		case 'h':
			$('.house, .app').show();
			break;
		case 'f':
			$('.foreman, .app').show();
			break;
		case 'u':
			$('.cuddy, .app').show();
			break;
		case 'a':
			$('.cameron, .app').show();
			break;
		case 'w':
			$('.wilson, .app').show();
			break;
		case 'c':
			$('.chase, .app').show();
			break;									
	}
}

var frequency = function(string){
	var chars = {};
	for (var i=0; i<string.length; i++)
	{
		var char = string.charAt(i);
	    if(chars[char] == undefined)
	    {
	        chars[char] = 0;
	    }		
    	chars[char]++;
	}
	var max=0;
	var maxChar;
	for (var key in chars ){
		if (chars[key]>max){
			max=chars[key];
			maxChar=key;
		}
	}
	var charlist=['h', 'f', 'u', 'a', 'w', 'c'];
	if (max===0){
		maxChar=charlist[Math.floor(Math.random()*6)];
	}
	return maxChar;
};


/*function Test(q,a){
	this.q=q;
	this.a=a;
}

var t1=new Test('你经常碰到麻烦吗？ ',['当然不，为什么我会碰到麻烦？','偶尔吧','谁？我吗？（表情无辜）','是的，不过那不是我的错']);*/
//var testList=[t1, t2, t3, t4, t5, t6, t7, t8, t9];
/*var showTest=function(){
	$('.question').show(t1.q);
	$('.option').show(t1.a1);
};*/
//$(document).ready(  function(){

/*$('.next').click(clickAction);

var clickAction= function(){

};

*/
/*$('.question').html(t1.q);
for (var i=0; i<4; i++){
	$('.form').append('<li>'+t1.a[i]+'</li>');
};

$(document).ready(function() {

	$('h1').click(function(){
		counter['house']+=1;
	});
	console.log(counter['house']);
});*/
/*$('li:first-child').html(t1.a1);
$('ol:nth-child(2)').html(t1.a2);
$('ol:nth-child(3)').html(t1.a3);
$('ol:last-child').html(t1.a4);*/

//$('ol: first-child').append('<p>'+t1.a1+'</p>');
//});

var answer=[];
var count='';
$(document).ready(function(){
	$('.house, .foreman, .cuddy, .cameron, .wilson, .chase, .app, .imgShare').hide();
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
	$('#questions').hide();
	$("body").animate({ scrollTop: 0 }, "fast");
	});
});

var showChar = function(result){
	switch (result){
		case 'h':
			$('.imgShare, .house, .app').show();
			break;
		case 'f':
			$('.imgShare, .foreman, .app').show();
			break;
		case 'u':
			$('.imgShare, .cuddy, .app').show();
			break;
		case 'a':
			$('.imgShare, .cameron, .app').show();
			break;
		case 'w':
			$('.imgShare, .wilson, .app').show();
			break;
		case 'c':
			$('.imgShare, .chase, .app').show();
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



//微信分享

var shareMeta = {
	img_url: "http://weina.me/randomLuck/logo.jpg",
	image_width: 100,
	image_height: 100,
	link: 'http://weina.me/randomLuck/index.html',
	title: "我的羊年患者运是?",
	desc: "试试我最可能遇到哪种任性患者",
	appid: ""
};
document.addEventListener('WeixinJSBridgeReady', function () {
	WeixinJSBridge.on('menu:share:appmessage', function(){
		WeixinJSBridge.invoke('sendAppMessage', shareMeta);
	});
	WeixinJSBridge.on('menu:share:timeline', function(){
		WeixinJSBridge.invoke('shareTimeline', shareMeta);
	});
	WeixinJSBridge.on('menu:share:weibo', function(){
		WeixinJSBridge.invoke('shareWeibo', {
			content: shareMeta.title + shareMeta.desc,
			url: shareMeta.link
		});
	});
});
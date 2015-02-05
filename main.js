var answer=[];
var count='';
$(document).ready(function(){
	$('.house, .foreman, .cuddy, .cameron, .wilson, .chase, .app, .imgShare').hide();
	$( "form" ).submit(function( event ) {
    answer=[$('input[name=t0]:checked').val(), 
    $('input[name=t2]:checked').val(), $('input[name=t3]:checked').val(), 
    $('input[name=t4]:checked').val(), $('input[name=t5]:checked').val(), 
    $('input[name=t6]:checked').val()];
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
	if(req.headers['user-agent'].indexOf('MicroMessenger') !== -1){
	  //we are in wechat browser
	    $('.imgShare').show();
	}
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



//微信分享
switch (result){
	case 'h':
		var shareMeta = {
			img_url: "house.jpg",
			image_width: 100,
			image_height: 100,
			link: 'index.html',
			title: "测测你是《豪斯医生》里的哪个角色？",
			desc: "我最像《豪斯医生》里的Dr. House，快来测下你最像哪个角色吧！",
			appid: ""
		};
		break;
	case 'f':
		var shareMeta = {
			img_url: "foreman.jpg",
			image_width: 100,
			image_height: 100,
			link: 'index.html',
			title: "测测你是《豪斯医生》里的哪个角色？",
			desc: "我最像《豪斯医生》里的Dr. Foreman，快来测下你最像哪个角色吧！",
			appid: ""
		};
		break;
	case 'u':
		var shareMeta = {
			img_url: "cuddy.jpg",
			image_width: 100,
			image_height: 100,
			link: 'index.html',
			title: "测测你是《豪斯医生》里的哪个角色？",
			desc: "我最像《豪斯医生》里的Dr. Cuddy，快来测下你最像哪个角色吧！",
			appid: ""
		};
		break;
	case 'a':
		var shareMeta = {
			img_url: "cameron.jpg",
			image_width: 100,
			image_height: 100,
			link: 'index.html',
			title: "测测你是《豪斯医生》里的哪个角色？",
			desc: "我最像《豪斯医生》里的Dr. Cameron，快来测下你最像哪个角色吧！",
			appid: ""
		}; 
 		break;
	case 'w':
		var shareMeta = {
			img_url: "wilson.jpg",
			image_width: 100,
			image_height: 100,
			link: 'index.html',
			title: "测测你是《豪斯医生》里的哪个角色？",
			desc: "我最像《豪斯医生》里的Dr. Wilson，快来测下你最像哪个角色吧！",
			appid: ""
		}; 
 		break;
	case 'c':
		var shareMeta = {
			img_url: "chase.jpg",
			image_width: 100,
			image_height: 100,
			link: 'index.html',
			title: "测测你是《豪斯医生》里的哪个角色？",
			desc: "我最像《豪斯医生》里的Dr. Chase，快来测下你最像哪个角色吧！",
			appid: ""
		}; 
 		break;									
}

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
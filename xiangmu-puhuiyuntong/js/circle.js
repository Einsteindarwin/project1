$(function(){
	i=0;
	var num=$('.circle').html();
	console.log(num);
	var timer=setInterval(function(){
		addNum(num,75);
	},20);
});
function addNum(precent,width){
	if(i<precent){
		i++;
		$('.circle').text(i+'%');
		drawProcess(width);
	}else{
		var timer=null;
		clearInterval(timer);
	}
};


function drawProcess(width){
	$('.circle').each(function(){
		var text=$(this).text();
		var process=text.substring(0,text.length-1);//用于提取字符串中介于两个指定下标之间的字符
		var canvas=this;
		var context=canvas.getContext('2d');//指定为2d的api
		context.clearRect(0,0,width,width);//挖空内容，留白
		
		context.beginPath();//丢弃任何当前定义的路径并且开始一条新的路径。它把当前的点设置为 (0,0)。
//当一个画布的环境第一次创建，beginPath() 方法会被显式地调用
		context.moveTo(width/2,width/2);//把窗口的左上角移动到一个指定的坐标
		context.arc(width/2,width/2,width/2,0,Math.PI*2,false);//数学式返回圆周率
		context.closePath();
		context.fillStyle='#ddd';
		context.fill();
		
		context.beginPath();
		context.moveTo(width/2,width/2);
		context.arc(width/2,width/2,width/2,0,Math.PI*2*process/100,false);
		context.closePath();
		context.fillStyle='#9bbef9';
		context.fill();
		
		context.beginPath();
		context.moveTo(width/2,width/2);
		context.arc(width/2,width/2,width/2-4,0,Math.PI*2,true);
		context.closePath();
		context.fillStyle='rgba(255,255,255,1)';
		context.fill();
		
		context.fillStyle='#ddd';
		context.font='bold 9pt Arial';
		context.fillStyle='#9bbef9';
		context.textAlign='center';
		context.textBaseline='middle';
		context.moveTo(width/2,width/2);
		context.fillText(text,width/2,width/2);
		
	})
}

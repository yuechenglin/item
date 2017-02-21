function Main(){
	this.all=function (){
		var _head=new Head();
		_head.head();
		var _foot=new Foot();
		_foot.foot();
		change();
	
}

function Head(){
	var _this=this;
	this.head=function (){
		_this._head=document.getElementById('header')
		$.get("head.html",null,function (data,textStaute){
			if(textStaute=="success"){
				_this._head.innerHTML=data;
			}
		},"text")
		
	}
	}
}

function Foot(){
	var _this=this;
	this.foot=function (){
		_this._foot=document.getElementById('foot')
		$.get("foot.html",null,function (data,textStaute){
			if(textStaute=="success"){
				_this._foot.innerHTML=data;
			}
		},"text")
		
	}
}

function change(){
	var _imgs="";
    for(var i=1;i<=4;i++){
       _imgs+="<img alt=\"\" src=\"images/xiangqing/a"+i+".jpg\"/>";
    }
    document.getElementById("img").innerHTML=_imgs;
    
	changeImg();       //点击改变图片
}
function changeImg(){
	var _img_content=document.getElementById('img-content1');
	var _img_content2=document.getElementById('img-content2');
	var _img_bottom=document.getElementById('img');
	//console.log($("#img img")[2])
	console.log(_img_bottom.children[1]);
	var _a=0;
	for(var i=0;i<4;i++){
		//$("#img img")[i].on("click",function (e){
		//	_img_content.src="images/xiangqing/a"+i+".jpg\""
		//})
		_img_bottom.children[i].index=i
		_img_bottom.children[i].onmouseenter=function (e){
			this.style.border="2px solid #00BBD7"
			e=e||window.event;
			_img_content.children[0].src="images/xiangqing/a"+(this.index+1)+".jpg"
			_img_content2.children[0].src="images/xiangqing/a"+(this.index+1)+".jpg"
		}
		_img_bottom.children[i].onmouseout=function (e){
			this.style.border="none"
		}
	}
	expand();
}

function expand(){
            var _Div=document.getElementById('img-content1'); 
		var _Show=_Div.getElementsByTagName('div')[0]; 
		var _Span=_Div.getElementsByTagName('span')[0]; 
		var _Img=document.getElementById('img1'); 
		_Show.onmouseover=function(){ 
			_Span.style.display='block'; 
			_Img.parentNode.style.display='block'; 
		}; 
		_Show.onmouseout=function(){ 
			_Span.style.display='none'; 
			_Img.parentNode.style.display='none'; 
		}; 
		_Show.onmousemove=function(e){ 
			var e=e||window.event; 
			var x=e.clientX-_Div.offsetLeft-_Span.offsetWidth/2; 
			var y=e.clientY-_Div.offsetTop-_Span.offsetHeight/2; 

			if(x<0){ 
				x=0; 
			}else if(x>_Show.offsetWidth-_Span.offsetWidth){ 
				x=_Show.offsetWidth-_Span.offsetWidth; 
			} 
			if(y<0){ 
				y=0; 
			}else if(y>_Show.offsetHeight-_Span.offsetHeight){ 
				y=_Show.offsetHeight-_Span.offsetHeight 
			} 

			_Span.style.left=x+'px'; 
			_Span.style.top=y+'px'; 
		
			_Img.style.left=-x*2+"px";
			_Img.style.top=-y*2+"px";
		}; 
}
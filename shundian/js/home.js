

function Total(){
	this.floor=function (){
		var _header=new Head();
		_header.head();
		var _footer=new Foot();
		_footer.foot();
		//login();
		
		lunbo();
		changeNav();
		mainfirst();
		mainsecond();
		mainthird();
		mainfourth();
		mainfifth();
		louti();
	}
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
//-----------------------login-------------------------
//function login(){
//	function main() {
//			$.post("api/login.php", null, function (data,textStatus) {
//				try{
//					if(data=="0"){
//						$("#dl").html("<a href=\"login.html\">请登录</a>");
//					}else{
//						$("#dl").html("欢迎:"+data+" 光顾!!");
//					}
//				}catch (e){
//					//alert("忘记密码了吗?");
//				}
//			});
//      }
//}
//----------------nav列表----------------------------
function changeNav(){
	var _navlist=new NavList();
	var _this=this;
	this._dd=document.getElementsByTagName('dd');
	this._div=document.getElementById('nav-first');
	for(this.n=0;this.n<this._dd.length;this.n++){
		this._dd[this.n].index=this.n
		this._dd[this.n].onmouseenter=function (){
			//console.log(this.index);
			this.style.backgroundColor="#fff"
			this.style.color="#00bbd7"
			var othis=this;
			_this._div.style.display="block";
			_navlist.all(this.index);
			
			_this._div.onmouseenter=function (){
				_this._div.style.display="block";
				_navlist.all(othis.index);
				othis.style.backgroundColor="#fff";
				othis.style.color="#00bbd7"
			}
			
			_this._div.onmouseleave=function (){
				$(".h3-container").html("");
				$("#nav-first ul ").html("");
				$(".navlist-img").html("");
				_this._div.style.display="none";
				othis.style.backgroundColor="#d6d6d6";
				othis.style.color="black"
			}
		}
		
		this._dd[this.n].onmouseleave=function (){
			//_this._div.innerHTML=null;
			this.style.backgroundColor="#d6d6d6"
			this.style.color="black"
			$(".h3-container").html("");
			$("#nav-first ul ").html("");
			$(".navlist-img").html("");
			_this._div.style.display="none";
		}
	}	
}

//-----------------------------------------------------------
function NavList(){
	var _this=this;
	this._title=document.getElementsByClassName('h3-container');
	this._fleftMiddle=document.getElementById('fleft-middle');
	this._fcenterMiddle=document.getElementById('fcenter-middle');
	this._frightMiddle01=document.getElementById('fright-middle01');
	this._frightMiddle02=document.getElementById('fright-middle02');
	this._imgDiv=document.getElementsByClassName('navlist-img');
	//console.log($('#first-nav span'));
	this.all=function (n){
		_this.addFleftMiddle(n);
		_this.addFcenterMiddle(n);
		_this.addFrightMiddle01(n);
		_this.addFrightMiddle02(n);
		_this.addTitle(n);
		_this.addImg(n);
	}
	
	this.addTitle=function (n){
		//alert(n)
		_this._h3=null;
		_this._a=null;
		$.get("js/Navlist.json",null,function (data,textStaute){
		//console.log(_data)
		//console.log(_data.length)
		//console.log(data["nav"+(n+1)]["title"])
			if(textStaute=="success"){
				try{
					var _data=JSON.stringify(data["nav"+(n+1)]["title"]).split(",");
					//console.log(_data)
					for(_this.i=0;_this.i<_data.length;_this.i++){
						_this._h3=document.createElement('h3');
						_this._a=document.createElement('a');
						_this._a.innerHTML=data["nav"+(n+1)]["title"]["part"+(_this.i+1)];
						//if(!_this._h3){
							_this._h3.appendChild(_this._a);
							_this._title[_this.i].appendChild(_this._h3);
						//}
					}
				}catch(e){}	
			}
		})
		
	}
	
	this.addFleftMiddle=function (n){
		
		_this._li01=null;
		_this._a=null;
		$.get("js/NavList.json",null,function (data,textStaute){
		//console.log(data);
			if(textStaute=="success"){
				try{
					var _data=JSON.stringify(data["nav"+(n+1)]["list1"]).split(",");
					for(_this.i01=0;_this.i01<_data.length;_this.i01++){
						_this._li01=document.createElement('li');
						_this._a=document.createElement('a');
						_this._a.className="title-a";
						_this._a.innerHTML=data["nav"+(n+1)]["list1"]["shop"+(_this.i01+1)];
						_this._li01.appendChild(_this._a)
						_this._fleftMiddle.appendChild(_this._li01)
					}
				}catch(e){}
			}
		},"json")
	}
	
	
	this.addFcenterMiddle=function (n){
		
		_this._li02=null;
		_this._a=null;
		$.get("js/NavList.json",null,function (data,textStaute){
		//alert("data");
		
			if(textStaute=="success"){
				try{
					var _data=JSON.stringify(data["nav"+(n+1)]["list2"]).split(",");
					for(_this.i01=0;_this.i01<_data.length;_this.i01++){
						_this._li02=document.createElement('li');
						_this._a=document.createElement('a');
						_this._a.className="title-a";
						_this._a.innerHTML=data["nav"+(n+1)]["list2"]["shop"+(_this.i01+1)];
						_this._li02.appendChild(_this._a)
						_this._fcenterMiddle.appendChild(_this._li02);
					}
				}catch(e){}
			}
		},"json")
	}
	
	this.addFrightMiddle01=function (n){
		_this._li03=null;
		_this._a=null;
		$.get("js/NavList.json",null,function (data,textStaute){
		//alert("data");
		
			if(textStaute=="success"){
				try{
					var _data=JSON.stringify(data["nav"+(n+1)]["list3"]).split(",");
					for(_this.i01=0;_this.i01<_data.length;_this.i01++){
						_this._li03=document.createElement('li');
						_this._a=document.createElement('a');
						_this._a.className="title-a";
						_this._a.innerHTML=data["nav"+(n+1)]["list3"]["shop"+(_this.i01+1)];
						_this._li03.appendChild(_this._a)
						_this._frightMiddle01.appendChild(_this._li03)
					}
				}catch(e){}
			}
		},"json")
	}
	
	this.addFrightMiddle02=function (n){
		_this._li04=null;
		_this._a=null;
		$.get("js/NavList.json",null,function (data,textStaute){
		//alert("data");
			if(textStaute=="success"){
				try{
					var _data=JSON.stringify(data["nav"+(n+1)]["list4"]).split(",");
					for(_this.i01=0;_this.i01<_data.length;_this.i01++){
						_this._li04=document.createElement('li');
						_this._a=document.createElement('a');
						_this._a.className="title-a";
						_this._a.innerHTML=data["nav"+(n+1)]["list4"]["shop"+(_this.i01+1)];
						_this._li04.appendChild(_this._a)
						_this._frightMiddle02.appendChild(_this._li04)
					}
				}catch(e){
					
				}
			}
		},"json")
	}
	
	this.addImg=function (n){
		_this._img=null;
		_this._a=null;
		$.get("js/NavList.json",null,function (data,textStaute){
			if(textStaute=="success"){
				try{
					var _data=JSON.stringify(data["nav"+(n+1)]["images"]).split(",");
					for(_this.i=0;_this.i<_data.length;_this.i++){
						_this._img=document.createElement('img');
						_this._a=document.createElement('a');
						_this._img.src=data["nav"+(n+1)]["images"]["img"+(_this.i+1)];
						_this._a.appendChild(_this._img);
						_this._imgDiv[_this.i].appendChild(_this._a);
					}
				}catch(e){
					
				}
			}
		},"json")
	}
	
}



//----------------lunbo--------------------------------
function changezIndex(_index){
		var _bcontent=document.getElementById('b-content');
		for(var i=_index-1,n=7;true;i--,n--){
			if(i<0){
				i=7;
			}
			 _bcontent.children[i].style.zIndex=n;
			if(i==_index){
				 _bcontent.children[_index].style.opacity=1;
				break;
			}
		}
	}
	function imgDisappear(){
		var _bcontent=document.getElementById('b-content'); 
		var _timer=0;
		var _index= _bcontent.children.length-1;
		var _opacity=1;
		(function start(){
			window.clearTimeout(_timer);
			_opacity-=0.1;
			if(_opacity>0.1){
				 _bcontent.children[_index].style.opacity=_opacity;
				_timer=window.setTimeout(start,80);
			}else{
				 _bcontent.children[_index].style.opacity=0;
				_opacity=1;
				changezIndex(_index);
				_index--;
				if(_index<0){
					_index= _bcontent.children.length-1;
				}
				_timer=window.setTimeout(start,2000);
			}
		})();
	}
function create(data){
	var _bcontent=document.getElementById('b-content');
	var odiv=null;
	var _str="";
	var _data=JSON.parse(data);
	//	console.log(_data);
	for(var k in _data){
		odiv=document.createElement('div');
		_str="<img alt=\"\" src=\"images/lunbo/"+_data[k]+"\"/>"
		odiv.innerHTML=_str;
		_bcontent.appendChild(odiv);
	}
	imgDisappear();
}
function lunbo(){
	ajaxRequest("post","js/lunbo.json",true,null,function (data){
		create(data);
	})
}

//----------------mainfirst--------------------------------
function mainfirst(){
	var _mainfirst=new MainFirst();
	_mainfirst.addMainFirst();
	OverMainFirst();
}

function OverMainFirst(){
	var _this=this;
	this._mf_bottom=document.getElementsByClassName('mainfirst-bottom');
	this._mf_appear1=document.getElementsByClassName('mf-appear1')
	//console.log(this._mf_bottom[0].children.length)
	//console.log(this._mf_appear1[0])
	for(this.i=0;this.i<_mf_bottom[0].children.length;this.i++){
		this._mf_bottom[0].children[this.i].index=this.i;
		this._mf_bottom[0].children[this.i].onmouseover=function (){
			_this._mf_appear1[this.index].style.display="block";	
		}
		this._mf_bottom[0].children[this.i].onmouseout=function (){
			_this._mf_appear1[this.index].style.display="none";
		}
		
	}

}

function MainFirst(){
	var _this=this;
	this.mf_img=document.getElementsByClassName('mf-img');
	//console.log(this.mf_img);
	this.mf_p01=document.getElementsByClassName('mf-p01');
	this.mf_p02=document.getElementsByClassName('mf-p02');
	this.mf_p03=document.getElementsByClassName('mf-p03');
	this.mf_p04=document.getElementsByClassName('mf-p04');
	//console.log(this.mf_img[0]);
	this.addMainFirst=function (){
		$.get("js/main.json",null,function (data,textStaute){
			if(textStaute=="success"){
				try{
					for(_this.i=0;_this.i<4;_this.i++){
						//console.log(_this);
						_this.mf_img[_this.i].innerHTML="<a><img alt=\"\" src=\"images/mainfirst/"+data["mainfirst"]["mf-img"]["img"+(_this.i+1)]+"\"/></a>"
						_this.mf_p01[_this.i].innerHTML=data["mainfirst"]["mf-p01"]["p_"+(_this.i+1)];
						_this.mf_p02[_this.i].innerHTML=data["mainfirst"]["mf-p02"]["p_"+(_this.i+1)];
						_this.mf_p03[_this.i].innerHTML=data["mainfirst"]["mf-p03"]["p_"+(_this.i+1)];
						_this.mf_p04[_this.i].innerHTML=data["mainfirst"]["mf-p04"]["p_"+(_this.i+1)];
					}
				}catch(e){
					console.log(e);
				}
			}
		},"json")
	}
}
//-------------mainsecond-------------------
function mainsecond(){
	var _mainsecond=new MainSecond();
	_mainsecond.addMsImg();
	OverMainSecond();
}

function OverMainSecond(){
	var _this=this;
	this._ms_img=document.getElementsByClassName('mainsecond-imgs');
	this._ms_appear=document.getElementsByClassName('mainsecond-appear')
	//console.log(this._mf_bottom[0].children.length)
	//console.log(this._mf_appear1[0])
	for(this.i=0;this.i<_ms_img.length;this.i++){
		this._ms_img[this.i].index=this.i;
		this._ms_img[this.i].onmouseover=function (){
			_this._ms_appear[this.index].style.display="block";	
		}
		this._ms_img[this.i].onmouseout=function (){
			_this._ms_appear[this.index].style.display="none";
		}
		
	}

}

function MainSecond(){
	var _this=this;
	//this._main=document.getElementsByClassName('main');
	//console.log(this._main.children)
	//this._ms_img=this._main.children[0].getElementsByClassName('mainsecond-img');
	this._ms_img=document.getElementsByClassName('mainsecond-img');
	this._ms_des=document.getElementsByClassName('mainsecond-appear');
	//console.log(this._ms_img[0])
	this.addMsImg=function (){
		$.get("js/main.json",null,function (data,textStaute){
			if(textStaute=="success"){
				try{
//					var _data=JSON.stringify(data["mainsecond"]).split(",");
//					console.log(data["mainsecond"]);
//					console.log(_data);
					for(_this.i=0;_this.i<27;_this.i++){
						_this._ms_img[_this.i].innerHTML="<img alt=\"\" src=\"images/mainsecond/"+data["mainsecond"]["img"]["img"+(_this.i+1)]+"\"/>";
					}
					for(_this.i=0;_this.i<24;_this.i++){
						_this._ms_des[_this.i].innerHTML=data["mainsecond"]["describe"]["des"+(_this.i+1)];
					}
				}catch(e){
					console.log(e);
				}
			}
		},"json")
	}
}
	
//-------------mainthird-------------------
function mainthird(){
	var _mainthird=new MainThird();
	_mainthird.addMtImg();
}

function MainThird(){
	var _this=this;
	this._mt_img=document.getElementsByClassName("mainthird-img");
	this.addMtImg=function (){
		$.get("js/main.json",null,function (data,textStaute){
			if(textStaute=="success"){
				//try{
					for(_this.i=0;_this.i<6;_this.i++){
						_this._mt_img[_this.i].innerHTML="<img alt=\"\" src=\"images/mainthird/"+data["mainthird"]["img"+(_this.i+1)]+"\"/>";
					}
				//}catch(e){
					
				//}
			}
		},"json")
	}
}

//-------------mainfourth-------------------
function mainfourth(){
	var _mainfourth=new MainFourth();
	_mainfourth.addMainFourth();
	OverMainFourth();
}

function OverMainFourth(){
	var _this=this;
	this._mfo_img=document.getElementsByClassName('mainfourth-img');
	this._mfo_appear1=document.getElementsByClassName('mfo-appear1')
	//console.log(this._mfo_img.length)
	//console.log(this._mf_appear1[0])
	for(this.i=0;this.i<this._mfo_img.length;this.i++){
		this._mfo_img[this.i].index=this.i;
		this._mfo_img[this.i].onmouseover=function (){
			_this._mfo_appear1[this.index].style.display="block";	
		}
		this._mfo_img[this.i].onmouseout=function (){
			_this._mfo_appear1[this.index].style.display="none";	
		}
		
	}

}

function MainFourth(){
	var _this=this;
	this._mfo_img=document.getElementsByClassName('mfo-img');
	this._mfo_p01=document.getElementsByClassName('mfo-p01');
	this._mfo_p02=document.getElementsByClassName('mfo-p02');
	this._mfo_p03=document.getElementsByClassName('mfo-p03');
	this._mfo_p04=document.getElementsByClassName('mfo-p04');
	this.addMainFourth=function (){
		$.get("js/main.json",null,function (data,textStaute){
			if(textStaute=="success"){
				for(_this.i=0;_this.i<6;_this.i++){
					_this._mfo_img[_this.i].innerHTML="<a><img alt=\"\" src=\"images/mainfourth/"+data["mainfourth"]["img"]["img"+(_this.i+1)]+"\"/></a>"
					_this._mfo_p01[_this.i].innerHTML=data["mainfourth"]["p01"]["p_"+(_this.i+1)];
					_this._mfo_p02[_this.i].innerHTML=data["mainfourth"]["p02"]["p_"+(_this.i+1)];
					_this._mfo_p03[_this.i].innerHTML=data["mainfourth"]["p03"]["p_"+(_this.i+1)];
					_this._mfo_p04[_this.i].innerHTML=data["mainfourth"]["p03"]["p_"+(_this.i+1)];
				}
			}
		},"json")
	}
}

//-------------mainfifth-------------------
function mainfifth(){
	var _mainfifth=new MainFifth();
	_mainfifth.addMainFifth();
	OverMainFifth();
}

function OverMainFifth(){
	var _this=this;
	this._mfif_img=document.getElementsByClassName('mainfifth-img');
	this._mfif_appear1=document.getElementsByClassName('mfif-appear1')
	//console.log(this._mfo_img.length)
	//console.log(this._mf_appear1[0])
	for(this.i=0;this.i<this._mfif_img.length;this.i++){
		this._mfif_img[this.i].index=this.i;
		this._mfif_img[this.i].onmouseover=function (){
			_this._mfif_appear1[this.index].style.display="block";	
		}
		this._mfif_img[this.i].onmouseout=function (){
			_this._mfif_appear1[this.index].style.display="none";	
		}
		
	}

}

function MainFifth(){
	var _this=this;
	this._mfif_img=document.getElementsByClassName('mfif-img');
	this._mfif_p01=document.getElementsByClassName('mfif-p01');
	this._mfif_p02=document.getElementsByClassName('mfif-p02');
	this._mfif_p03=document.getElementsByClassName('mfif-p03');
	this._mfif_p04=document.getElementsByClassName('mfif-p04');
	this.addMainFifth=function (){
		$.get("js/main.json",null,function (data,textStaute){
			if(textStaute=="success"){
				for(_this.i=0;_this.i<5;_this.i++){
					_this._mfif_img[_this.i].innerHTML="<a><img alt=\"\" src=\"images/mainfifth/"+data["mainfifth"]["img"]["img"+(_this.i+1)]+"\"/></a>"
					_this._mfif_p01[_this.i].innerHTML=data["mainfifth"]["p01"]["p_"+(_this.i+1)];
					_this._mfif_p03[_this.i].innerHTML=data["mainfifth"]["p03"]["p_"+(_this.i+1)];
					_this._mfif_p04[_this.i].innerHTML=data["mainfifth"]["p03"]["p_"+(_this.i+1)];
				}
				_this._mfif_img[5].innerHTML="<a><img alt=\"\" src=\"images/mainfifth/"+data["mainfifth"]["img"]["img"+(6)]+"\"/></a>"
			}
		},"json")
	}
}

function louti(){
//	$(".all div").on("click",function (e){
//		e=e||window.event;
//		document.body.scrollTop=(($(".all div").index(this));
//	})
//	if(document.body.scrollTop||document.documentElement.scrollTop)<540){
//		$(".all").css({"display":"none"});
//	}else{
//		$(".all").css({"display":"block"});
//	}
	$(".long0").on("click",function (e){
		e=e||window.event;
		document.body.scrollTop=0;
	})
	$(".long1").on("click",function (e){
		e=e||window.event;
		document.body.scrollTop=540;
	})
	$(".long2").on("click",function (e){
		e=e||window.event;
		document.body.scrollTop=1000;
	})
	$(".long3").on("click",function (e){
		e=e||window.event;
		document.body.scrollTop=1870;
	})
	$(".long4").on("click",function (e){
		e=e||window.event;
		document.body.scrollTop=2740;
	})
	$(".long5").on("click",function (e){
		e=e||window.event;
		document.body.scrollTop=3620;
	})
	$(".long6").on("click",function (e){
		e=e||window.event;
		document.body.scrollTop=4410;
	})
	$(".long7").on("click",function (e){
		e=e||window.event;
		document.body.scrollTop=5250;
	})
}


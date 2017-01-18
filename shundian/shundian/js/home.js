function Total(){
	this.floor=function (){
		//login();
		lunbo();
		Change();
		
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
//----------------navChange----------------------------
function Change(){
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

//----------------------------nav列表-------------------------------
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
					console.log(_data)
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







	

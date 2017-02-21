function main(){
	var _footer=new Foot();
	_footer.foot();
	regist();
}

function Foot(){
	var _this=this;
	this._foot=document.getElementById('foot')
	this.foot=function (){
		$.get("foot.html",null,function (data,textStaute){
			if(textStaute=="success"){
				_this._foot.innerHTML=data;
			}
		})
	}
	
}

function regist(){
	var _reg={
		"mobile":/^1[345678]\d{9}$/g,
		"secret":/^.{6,20}$/g
	}
	document.getElementById("r-ipt").onblur=function(){
		_reg.mobile.lastIndex=0;
		if(_reg.mobile.test(this.value)){
			var _self=this;
			$.post("api/checkUser.php",{"condition": "mobile='" + this.value + "'"},function (data,textStaute){
				if(textStaute=="success" && parseInt(data) > 0){
					alert="*手机号码已被占用，请重新输入！"
				}else {
                            document.getElementById('first').innerHTML=" ";
                      }
			})
		}else{
			document.getElementById('first').innerHTML="*手机格式不正确！";
		}
	}
	
	document.getElementById('sub').onclick=function (){
		var pwd_f=document.getElementById('r-pwd').value;
		var pwd_s=document.getElementById('qr').value;
		
		if(pwd_f==pwd_s){
			var _params={
                        "mobile":document.getElementById("r-ipt").value,      
                        "secret":document.getElementById("r-pwd").value,              
            };
            _reg.mobile.lastIndex=0;
			_reg.secret.lastIndex=0;
			if( _reg.mobile.test(_params.mobile) && _reg.secret.test(_params.secret)){
				$.post("api/registerUser.php", _params, function (data,textStatus) {
					console.log(data);
					
					if (textStatus=="success" && parseInt(data) > 0) {
                                alert("您已顺利成为会员！！！");
                    } else {
                                alert("尊敬的用户您好，您注册会员操作失败，请重试，或者联系管理员！！！");
                    }
				})
				
			}else{
				alert("尊敬的用户您好，您的基本信息不完整，为了安全请完善！！");
			}
			
		}else{
			document.getElementById("second").innerHTML="两次输入的密码不匹配，请重新输入";
		}
	}
}


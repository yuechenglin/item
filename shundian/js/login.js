function main(){
	var footer=new Foot();
	footer.foot();
	login();
}

function Foot(){
	var _this=this;
	this._foot=document.getElementById('foot');
	this.foot=function (){
		$.get("foot.html",null,function (data,textStaute){
			if(textStaute=="success"){
				_this._foot.innerHTML=data;
			}
		})
	}
}

function login(){
	document.getElementById("sub").onclick = function () {
		var user=document.getElementById("l-ipt").value;
		var pwd_f = document.getElementById("l-pwd").value;
		var _params = {
			"mobile": user,
			"password": pwd_f
		};
		ajaxRequest("post", "api/login.php", true, _params, function (data) {
			/* try{
			 console.log(data)
			 var _data=JSON.parse(data);
			 alert("欢迎:"+_data["mobile"]+" 光顾!!");
			 window.location.href="beauty.html";
			 }catch (e){
			 alert("忘记密码了吗?");
			 }*/
			if(data==1){
				console.log(data);
				alert("欢迎光顾!!");
				window.location.href="home.html";
			}else{
				alert("亲，您需要先注册呦！！");
				window.location.href="regist.html";
			}
		});
	}
}
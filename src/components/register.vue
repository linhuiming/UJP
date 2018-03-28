<template>
	<div class="logindiv">
		<img src="../assets/login_01.jpg" class="back">
		<div class="form">
			<div id="form_a" @click="gohome"><i class="iconfont icon-back" id="exit"></i></div>
			<div id="form_b">
				<p>
					<i class="iconfont icon-account userorpass"></i>
					<input type="text" name="username" placeholder="请输入手机号" v-model="us">
				</p>
				<p>
					<i class="iconfont icon-discount userorpass"></i>
					<input type="password" name="password" placeholder="请输入密码" v-model="ps">
				</p>
				<p>
					<i class="iconfont icon-discount userorpass"></i>
					<input type="password" name="password1" placeholder="请确认密码" v-model="ps1">
				</p>
				<button @click="reg">登录</button>
				<p class="text">
					<label>未注册的手机号，登录时候将自动注册，登录即表示您同意</label>
					<a href="#">优集品用户协议</a>
				</p>
				<p class="text1">
					<a href="/login">使用账号登录<i class="iconfont icon-more"></i></a>
				</p>
			</div>
		</div>
    </div>
</template>

<script type="text/ecmascript-6">
 
import axios from "axios";

  export default{
		name:'register',
		data(){
			return{
         		us:'',
         		ps:'',
         		ps1:''
			}
		},
		methods:{
			gohome(){
				this.$router.push('/home');
			},
			reg(){
				axios.post('/v10/register',{
					username:this.us,
					password:this.ps,
					password1:this.ps1
				}).then(res=>{
			  		console.log(res); 
			  	}).catch(error=>{
			  		console.log(error);
			  	})
			}
		},


    
	}
</script>

<style scoped>
.logindiv{
	background:url("../assets/login_01.jpg");
	overflow: hidden;
}
.back{
	width:100%;
	height:100%;
	display: block;
	z-index:-10;
}
.form{
	position:absolute;
	top:0;
	left:0;
	right:0;
	width:95%;
	height:400px;
	z-index:1;
	margin:60px auto 0;
}
#form_a #exit{
	font-size:30px;
	color:#fff;

}
#form_a{
	width:100px;
	height:30px;
}
#form_b{
	width:100%;
	height:50%;
	margin-top:50px;
}
#form_b input{
	width:75%;
	height:30px;
	line-height: 30px;
	font-size:12px;
	border:0;
	border-bottom:1px solid #AFAFAF;
	background:none;
	color:#D7D5D4;
	margin:10px 0;
	outline:none;
}

#form_b button{
	display: block;
	width:90%;
	height:40px;
	background:#E74C3C;
	font-size:16px;
	border:0;
	border-radius: 5px;
	outline:none;
	margin:10px auto;
	color:#fff;
}
.userorpass{
	font-size:20px;
	color:#fff;
	margin:0 20px;
}
input::input-placeholder{
	color:#fff;
	font-size:14px;
}
input::-webkit-input-placeholder{
	color:#fff;	
}
.text,.text1{
	text-align: center;
}
.text label,.text a{
	display: block;
	width:90%;
	font-size:12px;
	margin:0 auto;
	color:#fff;
}
.text a{
	margin-top:10px;
	text-decoration: underline;
	padding:0 5px;
}
.text1 a{
	display: inline-block;
	color:#fff;
	font-size:12px;
}
.text1{
	margin-top:30px;
}
</style>

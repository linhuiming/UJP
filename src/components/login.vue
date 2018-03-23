<template>
	<div class="logindiv">
		<img src="../assets/login_01.jpg" class="back">
		<div class="form">
			<div id="form_a" @click="gohome"><i class="iconfont icon-back" id="exit"></i></div>
			<div id="form_b">
				<form method="post">
					<p>
						<i class="iconfont icon-account userorpass"></i>
						<input type="text" name="username" placeholder="请输入账号">
					</p>
					<p>
						<i class="iconfont icon-discount userorpass"></i>
						<input type="password" name="password" placeholder="请输入密码">
					</p>
					<button @click="login">登录</button>
				</form>	
			</div>
		</div>
    </div>
</template>

<script type="text/ecmascript-6">
 


  export default{
		name:'home',
		data(){
			return{
         
			}
		},
		methods:{
			gohome(){
				this.$router.push('/home')
			},
			login(){
				axios.post('/cart',{
					username,
					password
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
	width:90%;
	height:40px;
	background:#525252;
	font-size:16px;
	border:0;
	position: absolute;
	left:0;
	right:0;
	border-radius: 5px;
	outline:none;
	margin:40px auto;
	color:#fff;
}
.userorpass{
	font-size:20px;
	color:#fff;
	margin:0 20px;
}
</style>

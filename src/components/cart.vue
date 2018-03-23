<template>
	
</template>

<script type="text/ecmascript-6">
 
  import axios from "axios";

  export default{
		name:'home',
		data(){
			return{
         
			}
		},
		beforeRouteEnter (to, from, next) {
		    console.log(1111111);
		    next();
		 },
	}
</script>

<style lang="scss" scoped>
 
</style>

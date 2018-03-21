<template>
	
</template>

<script type="text/ecmascript-6">
 
  import axios from "axios";

  export default{
		name:'detail',
		data(){
			return{
         
			}
		},
    mounted(){
      console.log(this.$route.params);
      axios.get("/api/v5/home").then(res =>{
          
      }).catch(error =>{

      })
    
    },
    
	}
</script>

<style lang="scss" scoped>
 
</style>

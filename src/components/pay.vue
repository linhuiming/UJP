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
    mounted(){
      axios.get("/api/v5/home").then(res =>{
          
      }).catch(error =>{

      })
    
    },
    
	}
</script>

<style lang="scss" scoped>
 
</style>

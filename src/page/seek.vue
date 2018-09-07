<!--搜索-->
<template>
	<div >
        <top_er></top_er>
        <div class="sd_jh_dfrrt">
            
            <div class="sd_jh_deert cen">
                <p>
                <img src="../assets/img/logo_er.png">
                </p>
                
                <el-row class="mt50">
  <el-col :span="19" class="pr ov">
     <el-input class="w100 dsf_deer" placeholder=""  ></el-input>
      <p class="bg_deert"></p>
    </el-col>
  <el-col :span="5" class="tr pl20" >
      <el-button type="primary" class="ssd_deer w100" >搜索</el-button>
    </el-col>
</el-row>
                
                 
                
        </div>
            
        </div>
        
	</div>
</template>
<script>
    import top_er from "../components/top_er"
    export default {
        data() {
            return {

            }
        },
        components: {
            top_er
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style>
    .dsf_deer {
        position: relative;
        z-index: 100
    }

    .dsf_deer input {
        background: transparent !important;
    }

</style>
<style scoped>
    .sd_jh_dfrrt {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-image: url(../assets/img/denglu_bg.jpg);
        background-position: center center;
        background-size: cover;
    }

    .sd_jh_deert {
        width: 700px;
        margin: auto;
        margin-top: 350px;
    }

    .bg_deert {
        background: #fff;
        filter: blur(60px);
        position: absolute;
        left: -30px;
        top: -20px;
        width: 120%;
        height: 80px;
        z-index: 1;
        border-radius: 4px;
    }

</style>

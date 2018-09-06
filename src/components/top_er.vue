<template>
	<div class="top_e_eert">
	   <div class="wd1">
                <span class="fz20  b cf cz">SECOND</span>
           <div class="f_i ml40 df_deert cz">
                <a class="act">合作医院</a>
                <a>疾病分类</a>
                <a>关于我们</a>
                <a>服务流程</a>
                <a>联系我们</a>
            </div>
           
           <div class="fr" v-if="false">
                <span class="pr cz  df_jh_wedeert">
                    <i class="dx icon-lingdang cf fz26"></i>
                    <span class="yj df_jh_deert"></span>
                </span>
               
               <el-dropdown class="dfs_deeert">
  <span class="el-dropdown-link sd_dert">
     <img src="../assets/img/user_xcdd.png" class="user_iconsd cz">
               
               <i class="dx icon-down cf cz fz12"></i>
  </span>
  <el-dropdown-menu slot="dropdown" >
    <el-dropdown-item> <i class="dx icon-ico_mine ls"></i> 我的主页</el-dropdown-item>
       <el-dropdown-item class="btm"> <i class="dx icon-ico_logout ls cz"></i> 登出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
               
               
              
            
            </div>
           <div class="fr  dsf_deeet">
            <el-button type="" @click="id_derer=0;$store.state.is_deng_box=true">登录</el-button>
                  <el-button type="primary" plain @click="id_derer=1;$store.state.is_deng_box=true"> 注册</el-button>
    </div>
           
        </div>
        <register :id_der="id_derer"></register>
	</div>
</template>
<script>
        import register from "./register"
    export default {
        data() {
            return {
                id_derer:0
            }
        },
        components: {
register
        },
        methods: {

        },
        mounted() {
          
        },
    }

</script>
<style>

</style>
<style scoped>
    .top_e_eert{
        position: sticky;
        top: 0px;
        left: 0px;
        line-height: 60px;
        height: 60px;
        background: #0C9FF5;
        z-index: 1000;
    }
    .top_e_eert .wd1{
          background: #0C9FF5;
        position: relative;
        bottom: 1px
    }
    .df_deert a{
        color: #fff;
        font-size: 16px;
        margin-left: 30px;
        padding-bottom: 6px;
    }
    .df_deert a.act{
        border-bottom: 1px solid #fff
    }
    .df_jh_deert{
        background: #FF8801;
        position: absolute;
        right: 2px;
        top: -8px;
        width: 10px;
        height: 10px;
    }
    .user_iconsd{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-left: 10px;
    }
    .df_jh_wedeert{
        position: relative;
        top: 3px;
    }
    .dsf_deeet button{
        padding-top: 10px;
        padding-bottom: 10px;
    }

</style>

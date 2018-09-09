<!--个人中心-->
<template>
	<div >
	  <top_er index_d="0"></top_er>
       <div class="wd1">
        <div class="wd mt20">

    <div class="bgff  fz20 mb15" >
       
        <section class="user_left">
           <user_left_tap :index_e="0"></user_left_tap> 
            
            
        </section>
        <section class="ov pl30 blm df_jh_deeert">
    
              <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="申请人/联系人信息" name="first">
            
        <user_from></user_from>
    
    </el-tab-pane>
    <el-tab-pane label="患者信息" name="second">
    
    <huanzexinxi></huanzexinxi>
    </el-tab-pane>
  </el-tabs>
            
            
            
            
            
        </section>
        
        
        <p class="qc"> </p>
    </div>
    </div>
    </div>
        
        
        
	</div>
</template>
<script>
    
     import user_left_tap from "../../components/user_left_tap"
    import top_er from "../../components/top_er"
    import user_from from "../../components/user_from"
    import huanzexinxi from "../../components/huanzexinxi"
    export default {
        data() { 
            return {
                user_left: [{
                    icon: "icon-ico_user_info",
                    name: "我的信息",
                    cls: "act"
                }, {
                    icon: "icon-ico_user_appoint",
                    name: "我的预约",
                    cls: ""
                }, {
                    icon: "icon-ico_user_hospital",
                    name: "收藏医院",
                    cls: ""
                }],
                activeName: 'first'
            }
        },
        components: {
            top_er, 
            user_from,
            huanzexinxi,
            user_left_tap
        },
        methods: {
            sd_der(sd) {
                this.user_left.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_ddert {
        height: 200px;
    }

    .user_left {
        width: 182px;
        float: left;

    }



   
    .df_jh_deeert{
        min-height: 800px;
    }

</style>

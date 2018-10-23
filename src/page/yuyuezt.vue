<!--预约状态-->
<template>
	<div >	
  <top_er index_d="3"></top_er> 
        
            <div class="wd1">
        <div class="wd mt20">

            <div class="bgff dfs_jh_drer fz20">
                <p class=" ls">
                    正在预约
                </p>
                <div class="mt15 pt15 btm dsf_jh_eeer">
                    
                    <p class="cen ls" v-if="tyoe_de==0">
                    <i class="dx dsfds_deerr icon-success-filling"></i>
                        <span class="fz24">预约成功</span>
            </p>
                    
                           <p class="cen red" v-if="tyoe_de==1">
                    <i class="dx dsfds_deerr icon-close "></i>
                        <span class="fz24">支付失败</span>
            </p>
                    
                    
            <div class="mt100 cen dfs_jh_deeer">
            <el-button type="primary"  v-if="tyoe_de==0">查看预约详情</el-button>
            <el-button type="primary"  v-if="tyoe_de==1" @click="$router.back(-1)">重新支付</el-button>
                <el-button type="primary">返回首页</el-button>
        </div>        
                    
                    
    </div>
                
    </div>
            
    </div>
                
    </div>
        
        
	</div>
</template>
<script>
    import top_er from "../components/top_er"
    export default {
        data() {
            return {
                tyoe_de:1//0成功 1失败
            }
        },
        components: {
            top_er
        },
        methods: {

        },
        mounted() {
            this.tyoe_de=this.$route.query.ty||0
        },
    }

</script>
<style scoped>
    .dsf_jh_eeer {
        min-height: 600px;
    }

    .dsfds_deerr {
        font-size: 120px;
        display: block;
        margin-top: 100px;
    }

    .dfs_jh_deeer button {
        width: 160px;
    }

</style>

<!--预约支付-->
<template>
	<div >
			  <top_er index_d="0"></top_er>
 <div class="wd1">
        <div class="wd mt20">

            <div class="bgff dfs_jh_drer fz20">
                <p class=" ls">
                    预约支付
                   
                </p>
                <div class="mt15 pt15 btm">
    
    <zhufu></zhufu>
                       <div class="mt60 dsf_jerrt">
                      <el-button type="primary" @click="hf('yuyuezt')">
                     前往支付
                        </el-button>
                    
    </div>
                </div>
    </div>
    </div>
    </div>
        
	</div>
</template>
<script>
    import top_er from "../../components/top_er"
        import zhufu from "../../components/zhufu"
    export default {
        data() {
            return {

            }
        },
        components: {
            top_er,
            zhufu
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>

    .dsf_jerrt {
        padding-left: 155px;
    }

</style>

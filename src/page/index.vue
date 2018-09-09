<template>
	<div > 
	  <top_er index_d="0"></top_er>

            <div class="wd1">
        <div class="wd mt20">

            <div class="bgff dfs_jh_drer fz20 mb15" v-for="sd in 10">
                <el-row :gutter="20">
            <el-col :span="16">
            <p class="fz24 ls">PingFangSC</p>
                <p class="fz14 z6 mt5">
            综合排名：    <i class="dx icon-star ls" v-for="sd in 4"></i><i class="dx icon-star ls ab" v-for="sd in 1"></i>
                </p>
    </el-col>
                 <el-col :span="8" class="tr pt5">
            <el-button type="primary">前往医院官网</el-button>
            </el-col>
                </el-row>
                
                <div class="mt15 btm pt15">
     <img src="../assets/img/fm_sds.jpg" class="fenh_sddf cz kx fl">
                        <div class="ov pl20  pr fz16 z6 dsf_deer">
                            
                            
                            地理位置：宾夕法尼亚州匹兹堡
                            <p class="z6">医院优势：</p>
                            <div class="z3 fz16">匹兹堡大学(PITT),卡内基美隆大学(CMU)与匹兹堡大学医学中心(UPMC)三个学术医疗机构成立大数据健康医疗联盟,运用大数据Big Data来改造现今健康医疗系统。例如,智能资料的使用可以帮助医院与医生快速侦测到新的潜在性爆发, 而且立即警告相关者以及相关单位采取进一步适当措施。</div>
    </div>
                    
                    <p class="qc"></p>
    
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
<style scoped>
    .dsf_deer{
        line-height: 1.8
    }

</style>

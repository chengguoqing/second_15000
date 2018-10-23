<!--服务流程-->

<template>
<div>
    <top_er index_d="3"></top_er>

    <div class="wd1">
        <div class="wd mt20">

            <div class="bgff dfs_jh_drer fz20">
                <p class=" ls">
                    正在预约 
                    <span class="ml10 fz18">剩余时间：29:59</span>
                </p>
                <div class="mt15 pt15 btm">
                    <el-row class="dsf_j_de" :gutter="20">
                        <el-col :span="7">
                            <el-button type="primary" v-if="s_index==0">01 患者及联系人信息</el-button>
                            <el-button type="primary" disabled v-else>01 患者及联系人信息</el-button>
                        </el-col>
                        <el-col :span="7">
                             <el-button type="primary"v-if="s_index==1">02 预约及疾病信息</el-button>
                            <el-button type="primary" disabled  v-else>02 预约及疾病信息</el-button>
                        </el-col>
                        <el-col :span="7">
                    <el-button type="primary" v-if="s_index==2">03 预约信息确认</el-button>
                            <el-button type="primary" disabled  v-else>03 预约信息确认</el-button>
                        </el-col>
                        <el-col :span="3">
                                <el-button type="primary" v-if="s_index==3">04 支付</el-button>
                            <el-button type="primary" disabled  v-else>04 支付</el-button>
                        </el-col>
                    </el-row>

                  
                    
                    
                    
                </div>


                    <buzou_a v-if="s_index==0"></buzou_a>
                   <yuyuejib  v-if="s_index==1"></yuyuejib> 
                
                <yuyueqeren  v-if="s_index==2"></yuyueqeren>
                <zhufu  v-if="s_index==3"></zhufu>
                
                     <div class="mt60 dsf_jerrt">
                        <el-button type="primary" disabled v-if="s_index==0">上一步</el-button>
                        <el-button type="primary"  v-if="s_index>0&&s_index<3" @click="dsf_eer(1)">上一步</el-button>
                         
                        <el-button type="primary" @click="dsf_eer(2)" v-if="s_index<3">
                            <span v-if="s_index<2">下一步</span>
                        <span v-if="s_index==2">提交并前往支付</span>
                        </el-button>
                         
                                <el-button type="primary" v-if="s_index==3" @click="hf('yuyuezt')">
                     前往支付
                        </el-button>
                         
                         <el-checkbox-group v-model="ous_dseeerrt" class="mt20" v-if="s_index==2">
 <el-checkbox label="我已确认以上信息准确无误" name="type"></el-checkbox>
                             <p class="mt10">
      <el-checkbox label="我已阅读并同意代理服务协议书" name="type"></el-checkbox>
    </p>
    
    </el-checkbox-group>
                         
            </div>
                
                
                
            </div>

        </div>

    </div>

</div>
</template>
<script>
    import top_er from "../components/top_er"
    import buzou_a from "../components/buzou_a"
    import yuyuejib from "../components/yuyuejib"
    import yuyueqeren from "../components/yuyueqeren"
    import zhufu from "../components/zhufu"
    export default {
        data() {
            return {
                s_index: 0,
                ous_dseeerrt:[]
            }
        },
        components: {
            top_er,
            buzou_a,
            yuyuejib,
            yuyueqeren,
            zhufu
        },
        methods: {
            dsf_eer(type) { //1上一步 2下一步
                if (type == 1) {
                    this.s_index--
                } else {
                    this.s_index++
                }
            }
        },
        mounted() {
           this.s_index= this.$route.query.type||0
        },
    }

</script>
<style scoped>
    .dsf_jerrt {
        padding-left: 155px;
    }

</style>

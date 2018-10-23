<template>
	<div class="dsf_deeert pt10">
	
        
        <el-form ref="form" :model="form" label-width="130px" label-position="left">
            <el-form-item label="* 姓氏">
                <el-input placeholder="请填写姓氏"></el-input>
            </el-form-item>
              <el-form-item label="* 名字">
                <el-input placeholder="请填写名字"></el-input>
            </el-form-item>
              <el-form-item label="* 邮箱">
                <el-input placeholder="请填写邮箱"></el-input>
            </el-form-item>
              <el-form-item label="* 地址">
                <el-input placeholder="请填写地址"></el-input>
            </el-form-item>
              <el-form-item label="* 手机号"> 
                <el-input placeholder="请填写手机号"></el-input>
            </el-form-item>
              <el-form-item label="旧密码" class="pr">
                          <el-tooltip class="item" effect="dark"  placement="top">
                <section slot="content">
            <p>· 密码最少8位字符</p> 
                    <p class="ls mt5">· 包含至少一个大写字母，一个数字</p>
                    <p class="red mt5">· 包含至少一个大写字母，一个数字</p>
            </section>
        <i class="dx icon-iconset0143 fz20 z9 df_jh_deert sz"></i>
    </el-tooltip>
                  
                  
                <el-input placeholder="请填写旧密码" type="password"></el-input>
            </el-form-item>
              <el-form-item label="新密码">
                <el-input placeholder="请填写新密码" type="password"></el-input>
            </el-form-item>  <el-form-item label="确认新密码">
                <el-input placeholder="请再次填写新密码" type="password"></el-input>
            <p class="mt50">
        <el-button type="primary" class="baocun_er">保存</el-button>
            </p>
            </el-form-item>
            
            
        </el-form>
        
        <section class="mt50">
                <p class="fz16">第三方账号绑定</p>
            <el-row class="fz16 df_erjh_deer" v-for="sd in baangding" :class="sd.cls">
                <el-col :span="5">
                    <span class="sd_jh_Deert">
                  <i class="dx  cz fz32" :class="sd.icon"></i>
                    </span>
                    <span class="cz"> {{sd.name}}</span>
                </el-col>
                <el-col :span="19" v-if="!sd.cls">
                    <span class="cz">已绑定</span> 
                    <span class="ml20 ls sz cz">解绑</span>
                      <span class="ml20 ls sz cz" >更换绑定</span>
                </el-col>
                      <el-col :span="19" v-else>
                    <span class="cz">未绑定</span> 
                      <span class="ml20 ls sz cz" >去绑定</span>
                </el-col>
            </el-row>
            
        </section>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                form:{
                    
                },
                baangding:[
                    {
                        name:"微信",
                        cls:"",
                        icon:"icon-weixin"
                    }, {
                        name:"QQ",
                        cls:"act",
                        icon:"icon-qqmw"
                    }, {
                        name:"支付宝",
                        cls:"",
                        icon:"icon-zhifubao"
                    }, {
                        name:"微博",
                        cls:"",
                        icon:"icon-weibo"
                    }
                ]
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dsf_deeert{
        padding-right: 130px;
        padding-bottom: 40px
    }
    .baocun_er{
        width: 160px;
    }
    .df_erjh_deer{
        line-height: 32px;
        margin-top: 15px
    }
    .df_erjh_deer.act .dx{
        color: #999 !important
    }
    .sd_jh_Deert{
        display: inline-block;
        width: 40px;
    }
    .sd_jh_Deert .icon-weixin{
        margin-left: -10px;
    }

</style>

<!--重置密码-->

<template>
<div >
      <p class="fz24 ls">重置密码</p>
       <section class="msd_for_rt" v-if="false">
   <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
       
           <el-form-item  prop="password" class="pr">
    
        <el-tooltip class="item" effect="dark"  placement="top">
                <section slot="content">
            <p>· 密码最少8位字符</p>
                    <p class="ls mt5">· 包含至少一个大写字母，一个小写字母，</p>
            </section>
        <i class="dx icon-iconset0143 fz20 z9 df_jh_deert sz"></i>
    </el-tooltip>
    <el-input v-model="ruleForm.password" placeholder="请输入密码" type="password"></el-input>
  </el-form-item>
                     
                     
                         <el-form-item  prop="password_q" class="pr">
    
        <el-tooltip class="item" effect="dark"  placement="top">
                <section slot="content">
            <p>· 密码最少8位字符</p>
                    <p class="ls mt5">· 包含至少一个大写字母，一个小写字母，</p>
            </section>
        <i class="dx icon-iconset0143 fz20 z9 df_jh_deert sz"></i>
    </el-tooltip>
    <el-input v-model="ruleForm.password_q" placeholder="请再次输入密码" type="password"></el-input>
  </el-form-item>
       
               <el-form-item class="mt30">
    <el-button type="primary" @click="submitForm('ruleForm')" class="w100">重置密码</el-button>
                    
    </el-form-item>    
        
       
    </el-form>
           
    </section>
    
       <section class="mt40 cen">
            <i class="dx icon-success-filling ls dsf_ddf_detrt"></i>
        <p class="cen fz12 mt10 pm40 dsf_deeer">
   密码重置成功，<br>请重新登录。


    </p>
    </section>
    
    
</div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    password: "",
                    password_q: ""
                },
                rules: {

                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }],
                    password_q: [{
                        required: true,
                        message: '请确认密码',
                        trigger: 'blur'
                    }]


                }
            }
        },
        components: {

        },
        methods: {
            submitForm(formName) { //登录按钮触发
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('验证完成!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>

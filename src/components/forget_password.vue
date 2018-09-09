<template>
<div >

       <p class="fz24 ls">忘记密码？
</p>
            <p class="fz12  z9">用来找回您的登录密码
</p>
             <section class="msd_for_rt" v-if="true">
                 <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
            
            <el-form-item  prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入您的注册邮箱"></el-input>
  </el-form-item>
                     <el-row>
                         <el-col :span="14">
                              <el-form-item  prop="yanzm">
       <el-input v-model="ruleForm.yanzm" placeholder="请输入验证码"></el-input>
    </el-form-item>
    </el-col>
                        <el-col :span="10" class="pl10">
               <section @click="refreshCode" class="sz">
      <yan_img :identifyCode="identifyCode"></yan_img>
        </section>
    
                        </el-col>
                     </el-row>
                     
                     
                      <el-form-item class="mt30">
    <el-button type="primary" @click="submitForm('ruleForm')" class="w100">登录</el-button>
                    
    </el-form-item>    
                     
                     
                    
                     
    </el-form>
               
    </section>
    
    <section class="mt40 cen" v-if="false">
            <i class="dx icon-success-filling ls dsf_ddf_detrt"></i>
        <p class="cen fz12 mt10 pm40 df_deeert">
    验证邮件发送成功，<br> 请前往您的邮箱。 

    </p>
    </section>
 
</div>
</template>
<script>
    import yan_img from "./yan_img"
    export default {
        data() {
            return {
                identifyCodes: "1234567890",
                identifyCode: "",
                ruleForm: {
                    name: "",
                    password: "",

                },
                rules: {
                    name: [{
                        required: true,
                        message: '请输入您的注册邮箱',
                        trigger: 'blur'
                    }, {
                        type: 'email',
                        message: '请输入正确的邮箱地址',
                        trigger: ['blur', 'change']
                    }],
                    yanzm: [{
                        required: true,
                        message: '请输入验证码',
                        trigger: 'blur'
                    }]
                }
            }
        },
        components: {
            yan_img
        },
        methods: {
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            refreshCode() {
                this.identifyCode = "";
                this.makeCode(this.identifyCodes, 4);
            },
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                        this.randomNum(0, this.identifyCodes.length)
                    ];
                }
                console.log(this.identifyCode);
            },
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
            this.refreshCode()
        },
    }

</script>
<style scoped>
    .df_deeert{
        line-height: 1.5
    }

</style>

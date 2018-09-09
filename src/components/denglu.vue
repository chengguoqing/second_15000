<!--登录-->
<template>
<div class="cz_w sdf_jh_deer" >
        <section class="cz_a">
    <section class="yj4 bgff sdf_jh_deert">
        <p class="tr">
            <i class="dx icon-close1 z9 fz26" @click="$store.state.is_deng_box=false"></i>
        </p>
        <section >
        <p class="cen mt10">
            <img src="../assets/img/logo.png">
        </p>
        <section class="msd_for_rt">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
            
            <el-form-item  prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入邮箱"></el-input>
  </el-form-item>
            
            
             <el-form-item  prop="password">
    <el-input v-model="ruleForm.password" placeholder="请输入密码" type="password"></el-input>
  </el-form-item>
            
              <el-form-item class="mt30">
    <el-button type="primary" @click="submitForm('ruleForm')" class="w100">登录</el-button>
                    
    </el-form-item>
            
            
    </el-form>
            
        <section class="mt20">
<el-row>
    <el-col :span="12" class="fz12 tl sz" >
  <span @click="$store.state.id_der=1">
        没有账号?注册{{$store.state.id_derer}}
   </span>
    </el-col>
    <el-col :span="12" class="tr fz12 sz" >
          <span @click="$store.state.id_der=2">
    忘记密码?
    </span>
    </el-col>
</el-row>
            
    <section class="mt20 f_df_ert">
        <span>第三方账号登录</span>
    </section>
            <el-row class="df_erjh_deer mt10">
                <el-col :span="6">
            <i class="dx icon-weixin"></i>
    </el-col>
                <el-col :span="6">
     <i class="dx icon-qqmw"></i>
        </el-col>
                
                     <el-col :span="6">
     <i class="dx icon-zhifubao"></i>
        </el-col>
                
                     <el-col :span="6">
     <i class="dx icon-weibo"></i>
        </el-col>
            </el-row>
            
            
            
        </section>
            
    
        </section>
        </section>
        
    </section>
            
            
    </section>

</div>
</template>
<script>
    export default {
        data() {
            return {

                ruleForm: {
                    name: "",
                    password: ""
                },
                rules: {
                    name: [{
                        required: true,
                        message: '请输入邮箱',
                        trigger: 'blur'
                    }, {
                        type: 'email',
                        message: '请输入正确的邮箱地址',
                        trigger: ['blur', 'change']
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
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

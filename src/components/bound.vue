<!--绑定账号-->
<template>
<div >


            <p class="fz24 ls">绑定账号</p>
            <p class="fz12  z9">还剩最后一步即可完成操作</p>
             <section class="msd_for_rt">
                 <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
            
            <el-form-item  prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入邮箱"></el-input>
  </el-form-item>
                   
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
                     
                     
                         <el-form-item  prop="password" class="pr">
    
        <el-tooltip class="item" effect="dark"  placement="top">
                <section slot="content">
            <p>· 密码最少8位字符</p>
                    <p class="ls mt5">· 包含至少一个大写字母，一个小写字母，</p>
            </section>
        <i class="dx icon-iconset0143 fz20 z9 df_jh_deert sz"></i>
    </el-tooltip>
    <el-input v-model="ruleForm.password_q" placeholder="请再次输入密码" type="password"></el-input>
  </el-form-item>
                     
                     
    <el-form-item class="pr">
        <el-row>
            <el-col :span="8">
         <el-input v-model="ruleForm.xing" placeholder="姓"></el-input>
            </el-col>
            <el-col :span="16" class="pl20">
     <el-input v-model="ruleForm.ming" placeholder="名字"></el-input>
    </el-col>
        </el-row>
                           
    </el-form-item>
                     
                     
                     
                       <el-form-item  prop="dizhi">
    <el-input v-model="ruleForm.dizhi" placeholder="请填写地址"></el-input>
  </el-form-item>
                     
                       <el-form-item  prop="phone">
    <el-input v-model="ruleForm.phone" placeholder="请填写手机号
"></el-input>
  </el-form-item>
                      
                     
                     
              <el-form-item class="mt30">
    <el-button type="primary" @click="submitForm('ruleForm')" class="w100">注册</el-button>
                    
    </el-form-item>        
                     
    </el-form>
                 
                 <section class="mt20">
<el-row>
    <el-col :span="12" class="fz12 tl sz">
     <span @click="$store.state.id_der=0">
       已有账号?登录
    </span> 
   
    </el-col>
    <el-col :span="12" class="tr fz12 sz">
          <span @click="$store.state.id_der=2 ">
    忘记密码?
    </span>

    </el-col>
</el-row>
                     
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
                    }],
                    password_q: [{
                        required: true,
                        message: '请确认密码',
                        trigger: 'blur'
                    }],
                    dizhi: [{
                        required: true,
                        message: '请确认地址',
                        trigger: 'blur'
                    }],
                    phone: [{
                        required: true,
                        message: '请输入电话',
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

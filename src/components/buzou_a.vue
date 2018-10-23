<!--01 患者及联系人信息-->
<template>
  <div class="mt20">
                        <div class="sd_jhg_dere fz16">
                            <span class="cz b">申请人/联系人</span>
                            <el-tooltip class="item" effect="dark" content="账号所有人即申请人、联系人" placement="top">
                                <i class="dx icon-iconset0143 sz fz18 z9 cz"></i>
                            </el-tooltip>
                        </div>

                        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">* 姓名</el-col>
                                    <el-col :span="20">李大明</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">* 地址</el-col>
                                    <el-col :span="20">南京市栖霞区迈皋桥街道</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">* 邮箱</el-col>
                                    <el-col :span="20">4567890@163.com</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">* 手机号</el-col>
                                    <el-col :span="20">18767855487</el-col>
                                </el-row>
                            </li>

                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4" class="pl10">微信</el-col>
                                    <el-col :span="20">767786345</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4" class="pl10">QQ</el-col>
                                    <el-col :span="20">897512143</el-col>
                                </el-row>
                            </li>

                        </ul>
 
                        <p class="pl10 ls">
                            <ins class="fz16 sz" @click="hf('user_index')">前往编辑>></ins>
                        </p>
                        <div class="mt15 pt20 btm">
                            <div class="d_h_deert">
                                <el-form :model="ruleForm" class="demo-ruleForm dsf_deeert" label-width="155px" label-position="left">

                                    <el-form-item label="患者 " class="dsf_eerjh_deer">
                                        <el-select placeholder="请选择患者" v-model="ruleForm.huanze" >
                                            <el-option label="李大明" value="shanghai"></el-option>
                                            <el-option label="其他患者" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>


                                    <el-form-item label="* 患者姓名">
 <el-tooltip class="ssd_eer_RE" effect="dark" content="患者姓名" placement="top">
                                <i class="dx icon-iconset0143 sz fz18 z9 cz"></i>
                            </el-tooltip>
                                        
                                        <el-row>
                                            <el-col :span="12" class="pr10">
                                                <el-input placeholder="姓">
                                                </el-input>
                                            </el-col>
                                            <el-col :span="12" class="pl10">
                                                <el-input placeholder="名"></el-input>
                                            </el-col>
                                        </el-row>

                                    </el-form-item>
                                    
                                         <el-form-item label="* 姓名拼音">
 <el-tooltip class="ssd_eer_RE" effect="dark" content="姓名拼音" placement="top">
                                <i class="dx icon-iconset0143 sz fz18 z9 cz"></i>
                            </el-tooltip>
                                             
                                             
                                        <el-row>
                                            <el-col :span="12" class="pr10">
                                                <el-input placeholder="姓(拼音)">
                                                </el-input>
                                            </el-col>
                                            <el-col :span="12" class="pl10">
                                                <el-input placeholder="名(拼音)"></el-input>
                                            </el-col>
                                        </el-row>

                                    </el-form-item>
                                    
                                    
                                    
                                    
                                        <el-form-item label="* 性别">

                                       <el-radio-group v-model="ruleForm.sex" >
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>

                                    </el-form-item>
                                    
                                    
                                    
                                    
        <el-form-item label="* 出生日期" class="pr">
<!--<img src="../assets/img/liri.png" class="liri">-->
             <el-date-picker  placeholder="请选择出生日期" style="width: 100%;" v-model="ruleForm.riqi_e" ></el-date-picker>

                                    </el-form-item>
                                    
                                    
                                 <el-form-item label="* 与申请人关系" class="pr">
                                        <el-select placeholder="请选择与申请人关系" v-model="ruleForm.sq_re" >
                                             <el-option label="本人" value="addf_a"></el-option>
                                            <el-option label="父母" value="addf_b"></el-option>
                                            <el-option label="朋友" value="addf_c"></el-option>
                                             <el-option label="配偶" value="addf_d"></el-option>
                                             <el-option label="子女" value="addf_e"></el-option>
                                             <el-option label="其他亲属" value="addf_f"></el-option>
                                             <el-option label="朋友" value="addf_g"></el-option>
                                             <el-option label="其他" value="addf_h"></el-option>
                                        </el-select>
                                     <section class="z9 dsf_dfgg fz14">
    本人，父母，子女，配偶，其他亲属，朋友，其他
    </section>
                                    </el-form-item>
                                    
                                    


                                        <el-form-item label="* 护照号">

        <el-input placeholder="请填写护照号"></el-input>
 
               
                                    </el-form-item>




                                </el-form>

                            </div>





                        </div>




                    </div>

                    
</template>
<script>
    export default {
        data() {
            return {
ruleForm: {
                    huanze:"",
                    sex:"男",
                    riqi_e:"",
                    sq_re:""
                }
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
<style>
    .dsf_eerjh_deer .el-form-item__label{
        font-weight: 600;
        color: #333;
            border-left: 3px solid #0099F6;
    padding-left: 10px;
        line-height: 1;
        margin-top: 10px;
    }
</style>
<style scoped>
    .ssd_eer_RE{
        position: absolute;
        left: -70px;
        top: 0px;
        z-index: 100
    }
    .dsf_dfgg{
        position: absolute;
        left: 540px;
        top: 0px;
        width: 200px;
        line-height: 1.5
    }

</style>

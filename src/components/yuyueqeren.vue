<!--03 预约信息确认-->
<template>
	  <div class="mt20"> 
                        <div class="sd_jhg_dere fz16">
                            <span class="cz">申请人/联系人信息</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 姓名</el-col>
                                    <el-col :span="20">李大明</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 地址</el-col>
                                    <el-col :span="20">南京市栖霞区迈皋桥街道</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 邮箱</el-col>
                                    <el-col :span="20">4567890@163.com</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 手机号</el-col>
                                    <el-col :span="20">18767855487</el-col>
                                </el-row>
                            </li>

                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4" >微信</el-col>
                                    <el-col :span="20">767786345</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4" >QQ</el-col>
                                    <el-col :span="20">897512143</el-col>
                                </el-row>
                            </li>
    </ul>
          
          <div class="btm mt20 pt20">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">申请人/联系人信息</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">患者姓名  </el-col>
                                    <el-col :span="20">李晓明 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 姓名拼音 </el-col>
                                    <el-col :span="20">Li Xiaoming </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4">性别  </el-col>
                                    <el-col :span="20">男 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4">出生日期  </el-col>
                                    <el-col :span="20">1975-05-18 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 与申请人关系 </el-col>
                                    <el-col :span="20">父母 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4">护照号  </el-col>
                                    <el-col :span="20">P45678134 </el-col>
                                </el-row>
                            </li>
                            
    </ul>
          </div>
          
          
          
          
          <div class="btm mt20 pt20">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">预约信息</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">预约医院  </el-col>
                                    <el-col :span="20">UPMC </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 医院地址 </el-col>
                                    <el-col :span="20">位于美国东北部宾夕法尼亚州 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4">预约时间  </el-col>
                                    <el-col :span="20">2017.10.17 - 2017.10.23 </el-col>
                                </el-row>
                            </li>
                              
                            
    </ul>
          </div>
          
          
          
          
          
          <div class="btm mt20 pt20">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">疾病信息</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">疾病种类  </el-col>
                                    <el-col :span="20">心脑血管 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 首诊医院 </el-col>
                                    <el-col :span="20">浙江省第一人民医院 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4">主治医生  </el-col>
                                    <el-col :span="20">张军 </el-col>
                                </el-row>
                            </li>
                                <li>
                                <el-row class="fz16">
                                    <el-col :span="4">医生联系方式  </el-col>
                                    <el-col :span="20">13333333333 </el-col>
                                </el-row>
                            </li>
                            
    </ul>
          </div>
          
          
              <div class="btm mt20 pt20">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">材料要求</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">病历  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                                 <li>
                                <el-row class="fz16">
                                    <el-col :span="4">xxxxx  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                                 <li>
                                <el-row class="fz16">
                                    <el-col :span="4">xxx  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                                 <li>
                                <el-row class="fz16">
                                    <el-col :span="4">xxxx  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                             
    </ul>
          </div>
          
            <div class="btm mt20 pt20">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">备注</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">备注  </el-col>
                                    <el-col :span="20">

    备注信息备注信息
                                </el-col>
                                </el-row>
                            </li>
                            
    </ul>
                
    </div>
          
          
        
          
          
    </div>
        
</template>
<script>
    export default {
        data() {
            return {

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


</style>

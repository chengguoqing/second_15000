<template>
  <div class="mt20">
                        <div class="sd_jhg_dere fz16">
                            <span class="cz">预约信息</span>
                          
                        </div>
      
      <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">* 预约医院</el-col>
                                    <el-col :span="20">UPMC</el-col>
                                </el-row>
                            </li>
            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">* 医院地址</el-col>
                                    <el-col :span="20">位于美国东北部宾夕法尼亚州</el-col>
                                </el-row>
                            </li>
            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">* 预约时间</el-col>
                                    <el-col :span="12"><el-date-picker  placeholder="请选择出生日期" style="width: 100%;" v-model="riqi_e" ></el-date-picker></el-col>
                                </el-row>
                            </li>
          
    </ul>
      
      <div class="mt20 pt20 btm">
              <div class="sd_jhg_dere fz16  ">
                            <span class="cz">疾病信息</span>
                          
                        </div>
                <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">* 疾病种类</el-col>
                                    <el-col :span="20">心脑血管</el-col>
                                </el-row>
                            </li>
                     <li>
                           <el-row class="fz16">
                                    <el-col :span="4">* 疾病种类</el-col>
                                    <el-col :span="12">
                                    <el-input placeholder="请填写诊断医院" class="fz16"></el-input>
                                            
                                    </el-col>
                            </el-row>
                            </li>
                         <li class="mt10">
                           <el-row class="fz16">
                                    <el-col :span="4">* 主治医生</el-col>
                                    <el-col :span="12">
                                    <el-input placeholder="请填写主治医生" class="fz16"></el-input>
                                            
                                    </el-col>
                            </el-row>
                            </li>
                    
                    
                         <li class="mt10">
                           <el-row class="fz16">
                                    <el-col :span="4">* 医生联系方式</el-col>
                                    <el-col :span="12">
                                    <el-input placeholder="请填写电话" class="fz16"></el-input>
                                            
                                    </el-col>
                            </el-row>
                            </li>
    </ul>
          
          </div>
      
      
        <div class="mt20 pt20 btm">
              <div class="sd_jhg_dere fz16  ">
                            <span class="cz">材料要求</span>
                          
                        </div>
            
                   <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16"> 
                                    <el-col :span="4">* 病历</el-col>
                                    <el-col :span="12">
                
                <dange_up></dange_up>
                                    </el-col>
                                    <el-col  :span="8">
    <div class="fz12 z9  df_jhsdff pl20">最晚提交期限：<br> 2017年9月30日 15:00</div>
                </el-col>
                                </el-row>
                            </li>
                       
                       
                                  <li class="mt10">
                                <el-row class="fz16"> 
                                    <el-col :span="4">* 护照</el-col>
                                    <el-col :span="12">
                
                <dange_up></dange_up>
                                    </el-col>
                                    <el-col  :span="8">
    <div class="fz12 z9  df_jhsdff pl20">最晚提交期限：<br> 2017年9月30日 15:00</div>
                </el-col>
                                </el-row>
                            </li>
                       
                                  <li class="mt10">
                                <el-row class="fz16"> 
                                    <el-col :span="4">* CT</el-col>
                                    <el-col :span="12">
                
                <dange_up></dange_up>
                                    </el-col>
                                    <el-col  :span="8">
    <div class="fz12 z9  df_jhsdff pl20">最晚提交期限：<br> 2017年9月30日 15:00</div>
                </el-col>
                                </el-row>
                            </li>
                       
                       
                                  <li class="mt10">
                                <el-row class="fz16"> 
                                    <el-col :span="4">* 其他材料</el-col>
                                    <el-col :span="12">
                
                <dange_up></dange_up>
                                    </el-col>
                                    <el-col  :span="8">
    <div class="fz12 z9  df_jhsdff pl20">最晚提交期限：<br> 2017年9月30日 15:00</div>
                </el-col>
                                </el-row>
                            </li>
                       
                       
                       
                       
                       
    </ul>
            
    </div>
      
            <div class="mt20 pt20 btm">
              <div class="sd_jhg_dere fz16  ">
                            <span class="cz">材料要求</span>
                          
                        </div>
                <ul class="sd_jh_deer"> 
   <li>
                                <el-row class="fz16"> 
                                    <el-col :span="4">* 备注</el-col>
                                    <el-col :span="12">
                
    <el-input type="textarea" placeholder="请填写备注" rows="5" ></el-input>
                                        
                                    </el-col>
                                  
                                </el-row>
                            </li>
        </ul>
                
    </div>
      
	</div>
</template>
<script>
    import dange_up from "./dange_up"
    export default {
        data() {
            return {
                riqi_e: "",
                rili: ""
            }
        },
        components: {
            dange_up
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_jh_deer li {
        line-height: 2.9
    }



    .df_jhsdff {
        line-height: 1.6;
        margin-top: 8px;
    }

</style>

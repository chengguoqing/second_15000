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
                                    <el-col :span="12">
                                        <div class="sd_jh_derrt">
                                        <i class="el-input__icon el-icon-date z6  ml20"></i>
                                            <span class="z3 fz14">已选择：2017.10.17 - 2017.10.23</span>
                                        </div>
<!--                                        <el-date-picker  placeholder="请选择出生日期" style="width: 100%;" v-model="fgfgfd" ></el-date-picker>-->
                                    </el-col>
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
                                    <el-col :span="4">* 首诊医院</el-col>
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
                                    <el-col :span="4"> 其他材料</el-col>
                                    <el-col :span="12">
                
<!--                <dange_up></dange_up>-->
                                        
                                         <el-row :gutter="10">
                            <el-col :span="18"> 
                                <el-input placeholder="请选择文件" v-model="rili" ></el-input>
    </el-col>
                         <el-col :span="6" class="tr">  

  <el-button type="primary" class="ssd_deert"  @click="isbing_le=true">上传</el-button>

                             
                             
                             
                             
                           </el-col>
                        </el-row>
                                        
                                        
                                        
                                    </el-col>
                                    <el-col  :span="8">
    <div class="fz12 z9  df_jhsdff pl20">最晚提交期限：<br> 2017年9月30日 15:00</div>
                </el-col>
                                </el-row>
                            </li>
                       
                       
                       
                              <li class="mt10" v-for="sd in 2">
                                <el-row class="fz16"> 
                                    <el-col :span="4"> &nbsp;</el-col>
                                    <el-col :span="12" >
                                        <section class="df_jh_drtyte">
                                        <img src="../assets/img/fengmjian.png" class="fl">
                                        <section class="ov pl10">
                                            <section class="sd_jh_deertt">
                                            <p class="z3 fz14 mt5">护照正面</p>
                                            <p class="fz12 mt5">
                                                演示文字内容演示文字内容，演示文字内容演示文字内容示文字演示文字内容。
                                            </p>
                                                </section>
                                            <section class="ov cen pt20">
                                        <i class="el-icon-delete z9 fz26"></i>
                                                <i class="el-icon-edit-outline z9 ml10 fz26"></i>
                                        </section>
                                            
                                        </section>
                                
                                        <p class="qc"></p>
                                            </section>
                                    </el-col>
                                    <el-col  :span="8">
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
      
      
      
          <div class="cz_w sdf_jh_deer" v-if="isbing_le">
        <section class="cz_a">
    <section class="yj4 bgff sdf_jh_deert">
      <p class="tr">
            <i class="dx icon-close1 z9 fz26 sz" @click="isbing_le=false"></i>
        </p>
        <section class="" >
            <p class="fz24 ls ">上传病历</p>
           
           <dange_up class="mt30"></dange_up>
            
            <p class="mt20">
            <el-input type="textarea" placeholder="请填写描述" rows="5" class="sd_drerrt"></el-input>
            </p>    
            <p class="mt20">
        <el-button type="primary" class="w100 fz16"  @click="isbing_le=false">提交</el-button>
    </p>
        </section>
        
    </section>
    </section>
              
    </div>
      
      
	</div>
</template>
<script>
    import dange_up from "./dange_up"
    export default {
        data() {
            return {
                riqi_e: "",
                rili: "",
                isbing_le:false
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
<style>
  .sd_deeert{
        border-radius: 0 !important
    }
    .sd_deeert .el-input__inner{
         border-radius: 0 !important
    }
    .sd_drerrt textarea{
        padding-top: 15px;
    }

</style>
<style scoped>
    .sd_jh_deer li {
        line-height: 2.9
    }



    .df_jhsdff {
        line-height: 1.6;
        margin-top: 8px;
    }
    .sd_jh_derrt{
        line-height: 40px;
        border: 1px solid #DCDFE6;
        border-radius: 4px;
    }

    .df_jh_drtyte{
        line-height: 1.5
    }
    .sd_jh_deertt{
        width: 270px;
        float:left
    }
     .ssd_deert {
        width: 105px;
    }
       .sd_jh_dert{
        width: 160px;
    }
  
</style>

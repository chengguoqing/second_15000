<!--患者信息-->
<template>
	<div class="pr30 df_jh_deeer">
	
        <section v-if="idx_sd==0">
        <p class="tr">
                <el-button type="primary" @click="idx_sd=1">新增患者</el-button>
        </p>
        
            <el-table
                      class="mt20"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
     >
      </el-table-column>
      <el-table-column
        prop="chusriqi"
        label="出生日期">
      </el-table-column>
                 <el-table-column
        prop="sqrgx"
        label="与申请人关系">
      </el-table-column>
    </el-table>
        </section>
        
        
        
                  <div class="d_h_deert" v-if="idx_sd==1">
                                <el-form :model="ruleForm" class="demo-ruleForm dsf_deeert" label-width="155px" label-position="left">

                                


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
                                    
                                    
                                       <el-form-item label="* 与申请人关系">
                                        <el-select placeholder="请选择与申请人关系" v-model="ruleForm.sq_re" >
                                            <el-option label="父母" value="shanghai"></el-option>
                                            <el-option label="朋友" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    
                                    


                                        <el-form-item label="* 护照号">

        <el-input placeholder="请填写护照号"></el-input>
 
               
                                    </el-form-item>
                                    
                                    
                                     <el-form-item label="备注">

    <el-input type="textarea" placeholder="请填写备注" rows="5" ></el-input>
 
                                         
                                         
                 <div class=" dsf_jerrt mt50">
                        <el-button type="primary" @click="idx_sd=0">返回患者列表</el-button>
                      <el-button type="primary" >保存</el-button>
               
    </div>
                                         
                                                
               
                                    </el-form-item>




                                </el-form>

                            </div>


        
        
        
        
        

	</div>
</template>
<script>
    export default {
        data() {
            return {
                idx_sd:0,
                tableData: [{
                    name: '李小明',
                    sex: '男',
                    chusriqi: '1975.05.29',
                    sqrgx: '父母'
                }, {
                    name: '李小明',
                    sex: '男',
                    chusriqi: '1975.05.29',
                    sqrgx: '父母'
                }, {
                    name: '李小明',
                    sex: '男',
                    chusriqi: '1975.05.29',
                    sqrgx: '父母'
                }, {
                    name: '李小明',
                    sex: '男',
                    chusriqi: '1975.05.29',
                    sqrgx: '父母'
                }, {
                    name: '李小明',
                    sex: '男',
                    chusriqi: '1975.05.29',
                    sqrgx: '父母'
                }],
                ruleForm: {
                    huanze: "",
                    sex: "男",
                    riqi_e: "",
                    sq_re: ""
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
  
</style>
<style scoped>
    .ssd_eer_RE{
        position: absolute;
        left: -70px;
        top: 0px;
        z-index: 100
    }

</style>

<!--收藏医院-->

<template>
	<div >
	  <top_er index_d="0"></top_er>
       <div class="wd1">
        <div class="wd mt20">

    <div class="bgff  fz20 mb15" >
       
        <section class="user_left">
         
           <user_left_tap :index_e="2"></user_left_tap> 
            
        </section>
        <section class="ov pl30 blm df_jh_deeert df_jh_deeer pr30">
    
              <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="收藏医院" name="first">
            
        <el-row :gutter="20">
            <el-col :span="12">
            
         <el-form ref="form" :model="form"  label="疾病分类" label-width="80px">
                
       
                <el-form-item label="疾病分类">
                   <el-select v-model="fenlei" placeholder="活动区域">
      <el-option label="疾病分类1" value="1"></el-option>
      <el-option label="疾病分类2" value="2"></el-option>
    </el-select>
                </el-form-item>
            </el-form>
            </el-col>
            <el-col :span="12" class="tr">
        <el-button type="primary" v-if="is_hsd_d==0" @click="is_hsd_d=1" >横向比较</el-button>
            <span v-if="is_hsd_d==1">
                        <el-button type="primary" @click="is_hsd_d=0" >取消</el-button>
          <el-button type="primary"  @click="hf('scyy_xq')">进行横向比较</el-button>
            </span>
    </el-col>
        </el-row>
        
        
        
        <section class="pd">
        
        <ul class="sd_jh_derrt">

        <li class="yj4 mb10 pr" v-for="sd in dfer_eer">
              <el-checkbox v-model="sd.char_box" class="dsf_deeert" v-if="is_hsd_d==1"></el-checkbox>
                <img src="../../assets/img/fm_sds.jpg" class="fenh_sddf cz kx fl">
            <div class="ov pl20 dsf_jhj_deert pr">
       
                
                <p class="fz18">{{sd.name}}</p>
                <p class="dsf_kjj_dert">
    专业排名：{{sd.rank}} <i class="dx icon-star ls fz16" v-for="sd in 4"></i>
                    <i class="dx icon-star ls fz16 ab" ></i>
                </p>
                
                <section class="btm mt5 pt5">
                    <div class="dsf_dsdrt">
                        <span class="fl fz12  z6">
                            <span class="yj dsd_ddda cz"></span>
                        简介:
                            </span>
                        <p class="ov pl5 fz12 z3 dianer">
                            {{sd.summary}}
                        </p>
                        <p class="qc"></p>
                    </div>
                    
                    
                       <div class="dsf_dsdrt mt5">
                        <span class="fl fz12  z6">
                            <span class="yj dsd_ddda cz"></span>
                        预约定价:
                            </span>
                        <p class="ov pl5 fz12 z3 dianer">
                           <span class="ls">$999</span>
                            <span class="blm ml10 pl10">咨询全款： <span class="ls">${{sd.price}}</span></span>
                        </p>
                        <p class="qc"></p>
                    </div>
                    
                    
                    
                       <div class="dsf_dsdrt mt5">
                        <span class="fl fz12  z6">
                            <span class="yj dsd_ddda cz"></span>
                        平均反馈时间:
                            </span>
                        <p class="ov pl5 fz12 z3 dain">
                         2周
                        </p>
                        <p class="qc"></p>
                    </div>
                          <div class="dsf_dsdrt mt5">
                        <span class="fl fz12  z6">
                            <span class="yj dsd_ddda cz"></span>
                        最近可约时间:
                            </span>
                        <p class="ov pl5 fz12 z3 dain">
                       {{sd.avail}}
                        </p>
                        <p class="qc"></p>
                    </div>
                    
                
                </section>
                
            </div>
            
           
            
            <p class="qc"></p>
        </li>
    </ul>
        </section>
        
        
        
    
    </el-tab-pane>
  </el-tabs>
            
            
            
            
            
        </section>
        
        
        <p class="qc"> </p>
    </div>
    </div>
    </div>
        
        
        
	</div>
</template>
<script>
    import user_left_tap from "../../components/user_left_tap"
    import top_er from "../../components/top_er"

    export default {
        data() {
            return {
                query: "center",
                form: {},
                fenlei: "",
                activeName: 'first',
                dfer_eer: "",
                is_hsd_d:0
            }
        },
        components: {
            top_er,
            user_left_tap
        },
        methods: {
            get_data(text) {
                let th = this
                if (!this.query) {
                    this.query = "center"
                }
                this.ge_t('https://mediconnect.github.io/mock_api/hospitals/' + this.query, "", function(data) {
                    data.map(a=>{
                        a.char_box=false
                    })
                    th.dfer_eer = data
                    console.log(data);
                })

            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        mounted() {
            this.get_data()
            window.scrollTo(0, 0)
        },
    }

</script>
<style scoped>
    .sd_ddert {
        height: 200px;
    }

    .user_left {
        width: 182px;
        float: left;

    }

    .d_kj_deerer li {
        padding-left: 40px;
        line-height: 50px;
    }

    .d_kj_deerer li.act {
        background: #F8F8F8;
        border-left: 2px solid #0099F6
    }

    .sd_jh_der {
        border-radius: 50%;
        display: inline-block;
        width: 4px;
        height: 4px;
        margin-right: 5px;
        background: #FF8902
    }

    .df_jh_deeert {
        min-height: 800px;
    }

    .wancdeert {
        padding: 5px 10px !important;
        margin-top: 5px;
        margin-left: 0px;
    }
    .sd_jh_derrt li{
        
    }
    .dsf_deeert{
        position: absolute;
        right: 20px;
        z-index: 1000
    }
</style>

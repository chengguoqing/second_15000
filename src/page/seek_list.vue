<template>
	<div >
 <top_er index_d="0"></top_er>
       <div class="wd1">
    <div class="wd mt20">
        
        <div class="sd_jh_der bgff">

       <el-row>
  <el-col :span="20">
     <el-input class="w100" placeholder="请输入搜索内容"  v-model="query"></el-input>
    </el-col>
  <el-col :span="4" class="tr">
      <el-button type="primary" class="ssd_deer" @click="ss_cfrrrt">搜索</el-button>
    </el-col>
</el-row>
            
            
            
        </div>
    <div v-if="dfer_eer.length>0">
        
        <div class="mt15 pm15 pl40 z9 fz12" >
        您是否在搜索"XXX疾病"，正在为您展示相关医院搜索结果，"如果不是，请点击
            <el-dropdown>
  <span class="el-dropdown-link sd_dert">
    这里
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>演示内容</el-dropdown-item>
    <el-dropdown-item>演示内容</el-dropdown-item>
    <el-dropdown-item>演示内容</el-dropdown-item>
          <el-dropdown-item>演示内容</el-dropdown-item>
    <el-dropdown-item>演示内容</el-dropdown-item>
    <el-dropdown-item>演示内容</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
            
            
            
            从列表选择" 
    </div>
   
        <ul class="sd_jh_derrt">

        <li class="yj4 mb10" v-for="sd in dfer_eer">
                <img src="../assets/img/fm_sds.jpg" class="fenh_sddf cz kx fl">
            <div class="fl pl20 dsf_jhj_deert pr">
                <span class="sd_jhj_deer">
                    <i class="dx icon-aixin"></i>
                </span>
                
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
            
            <div class="sd_jh_derttd">
                    <p class="mt40">
                  <el-button type="primary" plain @click="hf('seek_xq')">查看详情 <i class="dx icon-icon-test"></i></el-button>
                    </p>
                
                  <p  class="mt20">
                  <el-button type="primary" >立即预约 <i class="dx icon-57"></i></el-button>
                    </p>
                </div>
            
            <p class="qc"></p>
        </li>
    </ul>
        </div>
        <div v-else>
            <div class="mt15 pm15 pl20 z9 fz12">

            对不起，无法找到您搜索的疾病。您可以在以下列表中选择：

    </div>
             <el-row :gutter="40">
            <el-col :span="6" v-for="sd in 4">
            <section class="bgff yj4 sz" @click="hf('seek_xq')">
                    <img src="../assets/img/fnegmian.png" class="w100 cz fn_ddr_eert">
                <section class="pd pt10">
                    <p class="fz14 z3">心脑血管</p>
                    <p class="z9 fz12 mt5 pm10">Heart and cerebral vessels</p>
                </section>
            </section>
            </el-col>
        </el-row>
            
        </div>
    
    </div>    
        </div> 
	</div>
</template>
<script>
    import top_er from "../components/top_er"
    export default {
        data() {
            return {
                query: "",
                dfer_eer: ""
            }
        },
        components: {
            top_er
        },
        methods: {
            get_data(text) {
                let th = this
                if (!this.query) {
                    this.query = "center"
                }
                this.ge_t('https://mediconnect.github.io/mock_api/hospitals/' + this.query, "", function(data) {
                    th.dfer_eer = data
                })

            },
            ss_cfrrrt() {
                this.dfer_eer = ""
            }
        },
        mounted() {
            this.get_data()
        },
    }

</script>
<style scoped>
    .sd_jh_der {
        padding: 20px 30px;
        border-radius: 4px;
        background: red;
        box-shadow: 0 0px 4px rgba(0, 0, 0, .2);
    }

    .ssd_deer {
        width: 120px;
    }

    .sd_dert {
        color: #333;
        text-decoration: underline;
        cursor: pointer
    }



    .dsf_jhj_deert {
        width: 345px;
        padding-right: 10px;
    }


    .dsd_ddda {
        width: 5px;
        height: 5px;
        display: inline-block;
        background: #009AF4
    }

    .sd_jhj_deer {
        border-radius: 4px;
        background: #109AF7;
        width: 24px;
        height: 24px;
        position: absolute;
        right: -20px !important;
        top: 0px;
        text-align: center;
        color: #fff;
        line-height: 24px;
    }

    .sd_jh_derttd {
        position: absolute;
        right: 0px;
        top: 0px;
        height: 100%;
        width: 200px;
        text-align: center;
        border-left: 1px solid #F6F6F6
    }
    
    
     .sd_jh_der {
        padding: 20px 30px;
        border-radius: 4px;
        background: red;
        box-shadow: 0 0px 4px rgba(0, 0, 0, .2);
    }

    .ssd_deer {
       width: 120px;
    }

    .sd_dert {
        color: #333;
        text-decoration: underline;
        cursor: pointer
    }

    .sd_jh_derrt li {
        box-shadow: 0 0px 4px rgba(0, 0, 0, .2);
        padding: 15px 20px;
        background: #fff;
        position: relative;
    }

    .fenh_sddf {
        width: 200px;
        height: 154px;
    }

    .dsf_jhj_deert {
        width: 345px;
        padding-right: 10px;
    }

    .dsf_kjj_dert {
        font-size: 12px;
        color: #666;
        margin-top: 5px;
    }

    .dsf_kjj_dert i.ab {
        opacity: 0.5;

    }

    .dsd_ddda {
        width: 5px;
        height: 5px;
        display: inline-block;
        background: #009AF4
    }

    .sd_jhj_deer {
        border-radius: 4px;
        background: #109AF7;
        width: 24px;
        height: 24px;
        position: absolute;
        right: 0px;
        top: 0px;
        text-align: center;
        color: #fff;
        line-height: 24px;
    }

    .sd_jh_derttd {
        position: absolute;
        right: 0px;
        top: 0px;
        height: 100%;
        width: 200px;
        text-align: center;
        border-left: 1px solid #F6F6F6
    }
    .fn_ddr_eert{
        height: 133px;
    }

</style>

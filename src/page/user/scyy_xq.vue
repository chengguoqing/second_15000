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
    
              <el-tabs v-model="activeName">
    <el-tab-pane label="收藏医院" name="first">
            
        <el-row :gutter="20" class="mt10">
            <el-col :span="12">
            
      <span class="fz18 cz">横向比较结果</span>
            </el-col>
            <el-col :span="12" class="tr">
                   <el-button type="primary" @click="$router.back(-1)">重新比较</el-button>
        <el-button type="primary" @click="$router.back(-1)">完成</el-button>
          
    </el-col>
        </el-row>
        
        <table class="el-table  ">
            <tbody>
                <tr>
                <td></td>
                <td>
                    <img src="../../assets/img/fm_sds.jpg" class="fem_eeer">
                </td>
                <td>
                     <img src="../../assets/img/fm_sds.jpg" class="fem_eeer">
                </td>
                       <td>
                     <img src="../../assets/img/fm_sds.jpg" class="fem_eeer">
                </td>
                </tr>
                <tr>
                <td>医院名称</td>
                    <td>  <span class="fz18 ls">UPMC</span></td>
                    <td> <span class="fz18 ls">UPMC</span></td>
                     <td> <span class="fz18 ls">UPMC</span></td>
                </tr>
                <tr>
                <td>专业排名</td>
                     <td>15</td>
                     <td>15</td>
                      <td>15</td>
                </tr>
                <tr>
                <td>综合排名</td>
                     <td>15</td>
                     <td>15</td>
                        <td>15</td>
                </tr>
                
                
                
                 <tr>
                <td>医院评价</td>
                     <td><i class="dx icon-star ls fz16" v-for="sd in 4"></i>
                    <i class="dx icon-star ls fz16 ab" ></i></td>
                     <td><i class="dx icon-star ls fz16" v-for="sd in 4"></i>
                    <i class="dx icon-star ls fz16 ab" ></i></td>
                            <td><i class="dx icon-star ls fz16" v-for="sd in 4"></i>
                    <i class="dx icon-star ls fz16 ab" ></i></td>
                </tr>
                
                
                         <tr>
                <td>预约定金</td>
                     <td class="ls">$5000</td>
                     <td class="ls">$5000</td>
                                      <td class="ls">$5000</td>
                </tr>
                         <tr>
                <td>咨询全款</td>
                     <td class="ls">$5000</td>
                     <td class="ls">$5000</td>
                                      <td class="ls">$5000</td>
                </tr>
                
                       <tr>
                <td>反馈时间</td>
                     <td>2周</td>
                     <td>2周</td>
                                    <td>2周</td>
                </tr>
                <tr>
                <td>最近可预约时间</td>
                     <td>2017.09.01 - 2017.09.07</td>
                     <td>2017.09.01 - 2017.09.07</td>
                            <td>2017.09.01 - 2017.09.07</td>
                </tr>
                <tr>
                <td>地理位置</td>
                     <td>美国东北部宾夕法尼亚州</td>
                     <td>美国东北部宾夕法尼亚州</td>
                     <td>美国东北部宾夕法尼亚州</td>
                </tr>
                
                <tr>
                <td>医院简介</td>
                     <td>
                         <p class="df_deeeert">
                         upmc是美国领先的非盈利性医疗系统，也是全美最知名的学术研究医学中心之一，成立于1886年是世界上最大的移植中心。 2005年完成心脏移植45例肺移植96例，小肠移植46例，肾移植229例，肝移植259例，胰移植46例，胰腺移植96例。
    </p></td>
                     <td cl>
                           <p class="df_deeeert">upmc是美国领先的非盈利性医疗系统，也是全美最知名的学术研究医学中心之一，成立于1886年是世界上最大的移植中心。 2005年完成心脏移植45例肺移植96例，小肠移植46例，肾移植229例，肝移植259例，胰移植46例，胰腺移植96例。
    </p></td>
                                <td cl>
                           <p class="df_deeeert">upmc是美国领先的非盈利性医疗系统，也是全美最知名的学术研究医学中心之一，成立于1886年是世界上最大的移植中心。 2005年完成心脏移植45例肺移植96例，小肠移植46例，肾移植229例，肝移植259例，胰移植46例，胰腺移植96例。
    </p></td>
                    
                </tr>
                
        </tbody>
    
        </table>
        
        
        
        
        
    
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
                form: {},
                activeName: 'first',
                fenlei: ""
            }
        },
        components: {
            top_er,
            user_left_tap
        },
        methods: {

        },
        mounted() {

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

    .sd_jh_derrt li {}

    .dsf_deeert {
        position: absolute;
        right: 20px;
        z-index: 1000
    }
    .el-table::before{
        display: none
    }
    .fem_eeer{
        width: 180px;
        height: 120px;
    }
    .df_deeeert{
        width: 180px;
    }
</style>

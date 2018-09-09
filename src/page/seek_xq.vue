<!--医院详情-->
<template>
	<div >
 <top_er index_d="0"></top_er>
       <div class="wd1">
    <div class="wd mt20">
        
    <div class="bgff dfs_jh_drer">
    
        <div>
            <span class="fz36 ls cz">UPMC</span>
            <span class="sd_jh_de fr">
                <i class="dx icon-aixin"></i>
            </span>
            <p class="qc"></p>
        </div>
        
        <div class="mt20 btm pt20">
    
            <div class="sd_jh_eeet">
                <p>
                    <img src="../assets/img/fm_sds.jpg" class="fm_sds_deet">
                </p>
                <p class="fz18 ls mt10">
                可预约时间
                </p>
                
                <div class="df_j_deeert pl20">
                <span class="fz14 ">已选择：2017.10.17 - 2017.10.23</span>
                
                    <el-dropdown class="rili_deeer_ab ">
  <span class="el-dropdown-link sd_dert">
   <img src="../assets/img/liri.png" class="rili_deeer sz">
  </span>
                          <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>         <el-table
      :data="tableData"
      style="width: 100%" class="dsf_kjj_dser">
      <el-table-column
        prop="date"
        label="可预约时间"
        width="130"            
        >
      </el-table-column>
        
      <el-table-column
       class="cen"
        label="可预约名额"
       >
<template slot-scope="scope" >
   <span class="df_jh_Deert">{{scope.row.name}}</span>
      </template>


</el-table-column>
<el-table-column width="50" label="操作">
    <template slot-scope="scope">
          
 <el-button  type="text" size="small">预约</el-button>
      </template>
</el-table-column>


</el-table>
</el-dropdown-item>
</el-dropdown-menu>

</el-dropdown>


</div>

<p class="mt20 df_dfeert">
        <el-button type="primary" class="W100">开始预约</el-button>
</p>







</div>
<div class="ov">
    <ul class="sd_jh_deer fz16">
        <li>
            综合排名： <span>15</span>
        </li>
        <li>
            专业排名： <span>15</span>
        </li>
        <li>
            医院地址： <span>位于美国东北部宾夕法尼亚州</span>
        </li>
        <li>
            总评分：
            <i class="dx icon-star ls" v-for="sd in 4"></i><i class="dx icon-star ls ab" v-for="sd in 1"></i>

        </li>

        <li>
            医院简介：
            <div class="fz12 dsf_jh_deert">
                UPMC 是美国领先的非盈利性医疗系统，也是全美最知名的学术研究医学中心之一，成立于1886年。世界上最大的移植中心。2005年完成心脏移植45例肺移植96例，小肠移植46例，肾移植229例，肝移植259例，胰移植46例，胰腺移植96例。

            </div>
        </li>

        <li>
            平均反馈时间： <span>2周</span>
        </li>
        <li>
            预约定金： <span>$999</span>
        </li>
        <li>
            咨询全款： <span>$2,999</span>
        </li>


    </ul>

</div>

<p class="qc"></p>
</div>

</div>


<div class="bgff dfs_jh_drer mt20">
    <p class="ls fz20">患者评价</p>
    <div class="mt15 pt15 btm">

        <ul class="sd_jh_deer fz16 ab">
            <li v-for="sd in 10" class="bbm pm15">
                Nick：    <i class="dx icon-star ls" v-for="sd in 4"></i><i class="dx icon-star ls ab" v-for="sd in 1"></i>
             <div class="fz12 dsf_jh_deert">
                    非常感谢，服务一流，反馈周期短，点赞支持！
                </div>
            </li>

        </ul>
    </div>



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
                tableData: [{
                    date: '7月1日~7月7日',
                    name: '8'
                }, {
                    date: '7月1日~7月7日',
                    name: '8'
                }, {
                    date: '7月1日~7月7日',
                    name: '8'
                }, {
                    date: '7月1日~7月7日',
                    name: '8'
                }]
            }
        },
        components: {
            top_er
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>


    .sd_jh_de {
        width: 48px;
        height: 48px;
        background: #0099F6;
        border-radius: 4px;
        text-align: center;
        line-height: 48px;
        color: #fff;

    }

    .sd_jh_de i {
        font-size: 28px;
    }

    .sd_jh_eeet {
        float: right;
        width: 320px;
    }

    .fm_sds_deet {
        width: 100%;
        height: 220px;

    }

    .df_j_deeert {
        line-height: 40px;
        border: 1px solid #DBDBDB;
        height: 40px;
        margin-top: 10px;
        position: relative;

    }

    .rili_deeer_ab {
        position: absolute;
        right: 10px;
        top: 4px;
    }

    .rili_deeer {
        width: 18px;


    }

    .df_jh_Deert {
        display: inline-block;
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 50%;
        font-size: 14px;
        color: #fff;
        background: #0099F6;
    }

    .sd_jh_deer li {
        padding-left: 10px;
        margin-bottom: 15px;
        position: relative
    }
    .sd_jh_deer.ab li{
        line-height: 1;
        padding-left: 15px;
    }
    .sd_jh_deer.ab .dsf_jh_deert{
        line-height: 1.5
    }
    .sd_jh_deer li:after {
        content: ' ';
        position: absolute;
        width: 3px;
        height: 17px;
        background: #0099F6;
        left: 0px;
        top: 3px;
    }

    .sd_jh_deer.ab li:after {
        height: 45px;
        top: 0px;

    }

    .sd_jh_deer .icon-star {
        margin-right: 5px;

    }

    .dsf_jh_deert {
        width: 430px;
        line-height: 30px;
        margin-top: 10px;

    }
    .df_dfeert button{
        width: 100%;
    }

</style>

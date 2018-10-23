<!--搜索列表二-->
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
      <el-button type="primary" class="ssd_deer" >搜索</el-button>
    </el-col>
</el-row>
        </div>
        
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
</template>
<script>
    import top_er from "../components/top_er"
    export default {
        data() {
            return {
                query: "center",
                dfer_eer: ""
            }
        },
        components: {
            top_er
        },
        methods: {
         
        },
        mounted() {
           
        }
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

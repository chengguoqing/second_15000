<!--搜索列表二-->
<template>
	<div >
	<top_er></top_er>
       <div class="wd1">
    <div class="wd mt20">
        
        <div class="sd_jh_der bgff">

            <el-row>
  <el-col :span="19">
     <el-input class="w100" placeholder="请输入搜索内容"  v-model="query"></el-input>
    </el-col>
  <el-col :span="5" class="tr">
      <el-button type="primary" class="ssd_deer" @click="get_data">搜索</el-button>
    </el-col>
</el-row>
        </div>
        
        <div class="mt15 pm15 pl40 z9 fz12">
     对不起，无法找到您搜索的疾病。您可以在以

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
                query: "center",
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
                    console.log(data);
                })
            }
        },
        mounted() {
            this.get_data()
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
        padding-left: 40px;
        padding-right: 40px;
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

</style>

<!--我的预约-->

<template>
	<div >
	  <top_er index_d="0"></top_er>
       <div class="wd1">
        <div class="wd mt20">

    <div class="bgff  fz20 mb15" >
       
        <section class="user_left">
         
           <user_left_tap :index_e="1"></user_left_tap> 
            
        </section>
        <section class="ov pl30 blm df_jh_deeert df_jh_deeer pr30">
    
              <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="进行中的预约" name="first">
            
           <el-table
                      class="mt20"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="yybh"
        label="预约编号"
        width="60"               
                       
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
     >
      </el-table-column>
      <el-table-column
        prop="yuyuesj"
        label="预约时间">
      </el-table-column>
                 <el-table-column
        prop="jbzl"
        label="疾病种类">
      </el-table-column>
               
                <el-table-column
        prop="yuyueyy"
        label="预约医院">
      </el-table-column>
                <el-table-column
        prop="dqjd"
        label="当前进度">
      </el-table-column>
                <el-table-column
        prop="yjfksj"
        label="预计反馈时间"
         width="100"  
                                 >
      </el-table-column>
               
               
        <el-table-column
        label="操作">
        <template slot-scope="scope">
               <el-button type="primary" plain class="wancdeert" @click="hf('user_yuyuezhifu')">完成支付</el-button>  
            <el-button type="primary" plain class="wancdeert" @click="hf('user_yuyue')">补充资料</el-button>  
</template>
      </el-table-column>
               
    </el-table>
    
    </el-tab-pane>
    <el-tab-pane label="已完成的预约" name="second">
    
     <el-table
                      class="mt20"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="yybh"
        label="预约编号"
                
                       
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
     >
      </el-table-column>
      <el-table-column
        prop="yuyuesj"
        label="预约时间">
      </el-table-column>
                 <el-table-column
        prop="jbzl"
        label="疾病种类">
      </el-table-column>
               
                <el-table-column
        prop="yuyueyy"
        label="预约医院">
      </el-table-column>
                <el-table-column
        prop="dqjd"
        label="当前进度">
      </el-table-column>
                <el-table-column
        prop="yjfksj"
        label="反馈时间"
   
                                 >
      </el-table-column>
               
               
      
               
    </el-table>
        
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
                user_left: [{
                    icon: "icon-ico_user_info",
                    name: "我的信息",
                    cls: ""
                }, {
                    icon: "icon-ico_user_appoint",
                    name: "我的预约",
                    cls: "act"
                }, {
                    icon: "icon-ico_user_hospital",
                    name: "收藏医院",
                    cls: ""
                }],
                tableData: [{
                    yybh:"01",
                    name: '李小明',
                    yuyuesj: '2017.09.01 - 2017.09.07',
                    jbzl: '心脑血管',
                    yuyueyy: 'UPMC',
                    dqjd:"预约申请中",
                    yjfksj:"2017.09.26"
                },{
                    yybh:"01",
                    name: '李小明',
                    yuyuesj: '2017.09.01 - 2017.09.07',
                    jbzl: '心脑血管',
                    yuyueyy: 'UPMC',
                    dqjd:"预约申请中",
                    yjfksj:"2017.09.26"
                },{
                    yybh:"01",
                    name: '李小明',
                    yuyuesj: '2017.09.01 - 2017.09.07',
                    jbzl: '心脑血管',
                    yuyueyy: 'UPMC',
                    dqjd:"预约申请中",
                    yjfksj:"2017.09.26"
                },{
                    yybh:"01",
                    name: '李小明',
                    yuyuesj: '2017.09.01 - 2017.09.07',
                    jbzl: '心脑血管',
                    yuyueyy: 'UPMC',
                    dqjd:"预约申请中",
                    yjfksj:"2017.09.26"
                },{
                    yybh:"01",
                    name: '李小明',
                    yuyuesj: '2017.09.01 - 2017.09.07',
                    jbzl: '心脑血管',
                    yuyueyy: 'UPMC',
                    dqjd:"预约申请中",
                    yjfksj:"2017.09.26"
                },{
                    yybh:"01",
                    name: '李小明',
                    yuyuesj: '2017.09.01 - 2017.09.07',
                    jbzl: '心脑血管',
                    yuyueyy: 'UPMC',
                    dqjd:"预约申请中",
                    yjfksj:"2017.09.26"
                }],
                activeName: 'first'
            }
        },
        components: {
            top_er,
            user_left_tap
        },
        methods: {

            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        mounted() {
window.scrollTo(0,0)
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
    .wancdeert{
         padding: 5px 10px !important;
        margin-top: 5px;
        margin-left: 0px;
    }
</style>

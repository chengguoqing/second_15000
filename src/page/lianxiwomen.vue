<!--联系我们-->
<template>
	<div > 
	
    <top_er index_d="4"></top_er>
        
            <div class="wd1">
        <div class="wd mt20">

    <div class="bgff  fz20">
            <div class="sd_kjh_deet fl">
                <p class="cf fz30 b">SECOND</p>
                <div class="mt70">
                    <i class="dx icon-ico_contact_phone1 cf cz"></i>
                    
                    <span class="cf fz14 cz">客服电话：</span>
                    <p class="fz14 cf mt5">0519-874563759</p>
                </div>
                
                 <div class="mt40">
                    <i class="dx icon-ico_contact_wechat1 cf cz"></i>
                    
                    <span class="cf fz14 cz">微信：</span>
                    <p class="fz14 cf mt5">dedf8765623</p>
                </div>
                
                      <div class="mt30">
                    <i class="dx icon-ico_contact_mail1 cf cz"></i>
                    
                    <span class="cf fz14 cz">邮箱：</span>
                    <p class="fz14 cf mt5">86782345@qq.com</p>
                </div>
                
                         <div class="mt30">
                    <i class="dx icon-ico_contact_time1 cf cz"></i>
                    
                    <span class="cf fz14 cz">工作时间：</span>
                    <p class="fz14 cf mt5">周一至周五 上午9点到晚8点<br>周六至周日 上午9点到晚6点</p>
                </div>
                
            </div>      
        <div class="ov ">
        <div class="sd_der_ert">
                <p class="fz24">联系我们</p>
            <p class="z6 fz14 mt5">
    如您对我们的服务有任何问题，请给我们留言，我们会在24小时之内回复您的消息
    </p>
            <el-form  class="mt40">
            <el-row :gutter="20">
                <el-col :span="12">


    <el-form-item label="主题:">
        <el-input placeholder="请输入主题..."></el-input>
    </el-form-item>

                     
    
    </el-col>
             <el-col :span="12">
        <el-form-item label="联系邮箱:">
        <el-input placeholder="请输入联系邮箱..."></el-input>
    </el-form-item>
    
        </el-col>
            </el-row>
               
                
                 <el-form-item label="详细内容:">
       <el-input type="textarea" placeholder="请输入详细文字描述…" rows="7" ></el-input>
    </el-form-item>
                
            </el-form>
            
            <p class="cen dsf_deeer mt50">
                    <el-button type="primary" @click="tijiao_d" >提交</el-button>
    
    </p>
        
            </div>
    </div>
        
        
        <p class="qc"></p>
    </div>
            
            <div class="mt20 yj4 dfs_jh_drer bgff">
        <p class="fz24 cen">常见问题（FAQ）</p>
                
        <ul class="sd_jh_deet ">
        <li class="pt15 pm15 bbm" v-for="sd in 10">
            <p class="fz16 z3">Q：常见问题演示文字常见问题演示文字</p>
            <p class="fz16 z3 mt10">
    A：常见问题回答演示文字常见问题回答演示文字常见问题回答演示文字常见问题回答演示文字常见问题回答演示文字常见问题回答演示文字常见问题回答演示文字常见问题回答演示文字。
        </p>
        </li>
    </ul>
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

            }
        },
        components: {
            top_er
        },
        methods: {
            tijiao_d() {
                this.$alert('<p class="fz12 z9">您的留言已提交成功，我们会在24小时之内回复您的消息</p>', '提交成功', {
                    dangerouslyUseHTMLString: true,
                    type: 'success',
                });
            }
        },
        mounted() {


        },
    }

</script>
<style scoped>
    .sd_kjh_deet {
        width: 360px;
        height: 560px;
        background: url(../assets/img/image_contact.png);
        padding-left: 57px;
        padding-top: 90px;
    }

    .sd_der_ert {
        padding: 40px;
        padding-bottom: 0
    }

    .dsf_deeer button {
        width: 300px;
    }

</style>

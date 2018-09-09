<!--支付-->
<template>
	  <div class="mt20">
                <div class="sd_jhg_dere fz16">
                            <span class="cz">您可以选择支付：</span>
                       
            </div> 
          
                     <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">&nbsp;</el-col>
                                    <el-col :span="20">
    <el-radio-group v-model="resource">
      <el-radio label="定金：￥100"></el-radio>
        <p class="mt10">
      <el-radio label="全款支付：￥950（￥1000，享受5%优惠）"></el-radio>
        </p>
    
    </el-radio-group>
    
    
    </el-col>
                                </el-row>
                            </li>
    </ul>
          <div class="mt20 btm pt20">
        <div class="sd_jhg_dere fz16">
                            <span class="cz">支付方式：</span>
                       
            </div>
                 <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">&nbsp;</el-col>
                                    <el-col :span="20">
    <el-radio-group v-model="resource_er">
      <el-radio label="0">
        <img src="../assets/img/pay_alipay.png" class="cz">
    </el-radio>
        
             <el-radio label="1">
        <img src="../assets/img/pay_wechatpay.png" class="cz">
    </el-radio>
             <el-radio label="2">
        <img src="../assets/img/pay_paypal.png" class="cz">
    </el-radio>

    
    </el-radio-group>
    
    
    </el-col>
                                </el-row>
                            </li>
    </ul>
        </div>
    
          
	

	</div>
</template>
<script>
    export default {
        data() {
            return {
resource:"定金：￥100",
                resource_er:"0"
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
<style scoped>


</style>

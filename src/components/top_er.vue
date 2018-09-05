<template>
	<div class="top_e_eert">
	   <div class="wd1">
                <span class="fz20  b cf cz">SECOND</span>
           <div class="f_i ml40 df_deert cz">
                <a class="act">合作医院</a>
                <a>疾病分类</a>
                <a>关于我们</a>
                <a>服务流程</a>
                <a>联系我们</a>
            </div>
           
           <div class="fr">
                <span class="pr cz  df_jh_wedeert">
                    <i class="dx icon-lingdang cf fz26"></i>
                    <span class="yj df_jh_deert"></span>
                </span>
               
               <img src="../assets/img/user_xcdd.png" class="user_iconsd cz">
               
               <i class="dx icon-down cf cz fz12"></i>
            
            </div>
           
        </div>
        
	</div>
</template>
<script>
    export default {
        data() {
            return {

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
    .top_e_eert{
        position: sticky;
        top: 0px;
        left: 0px;
        line-height: 60px;
        height: 60px;
        background: #0C9FF5;
        z-index: 1000
    }
    .df_deert a{
        color: #fff;
        font-size: 16px;
        margin-left: 30px;
        padding-bottom: 6px;
    }
    .df_deert a.act{
        border-bottom: 1px solid #fff
    }
    .df_jh_deert{
        background: #FF8801;
        position: absolute;
        right: 2px;
        top: -8px;
        width: 10px;
        height: 10px;
    }
    .user_iconsd{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-left: 10px;
    }
    .df_jh_wedeert{
        position: relative;
        top: 3px;
    }

</style>

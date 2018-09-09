<!--疾病分类-->
<template>
	<div >
	    <top_er index_d="1"></top_er>
       <div class="wd1">
        <div class="wd mt20">

    <div class="bgff dfs_jh_drer fz20 mb15" v-for="sd in 2">
            <el-row :gutter="50">
        <el-col :span="8">
            <div>
                <p class="fz24 ls sdf_jh_der">
                    肝癌<br>
                    <span class="fz14 ">liver cancer</span>
                </p>
                <div class="mt15 btm pt15">
                     <div>
                        <p class="fz16 ds_jH_der">别称：</p>
                         <div class="ov fz16">
    肝脏恶性肿瘤
                            </div>
                        <p class="qc"></p>
                    </div>  
                    
                    
                      <div class="mt10">
                        <p class="fz16 ds_jH_der">英文名称：</p>
                         <div class="ov fz16">
liver cancer
                            </div>
                        <p class="qc"></p>
                    </div>  
                    
                      <div class="mt10">
                        <p class="fz16 ds_jH_der">就诊科室：</p>
                         <div class="ov fz16">
肿瘤科、外科
                            </div>
                        <p class="qc"></p>
                    </div>  
                    
                      <div class="mt10">
                        <p class="fz16 ds_jH_der">多发群体：</p>
                         <div class="ov fz16">
乙型肝炎和丙型肝炎患者、病毒性肝炎
                            </div>
                        <p class="qc"></p>
                    </div> 
                    
                    <div class=" mt20">
            <img src="../assets/img/dfs_dert.jpg" class=" dsf_deeet yj4">
                </div>
    
                </div>
    
            </div>
    </el-col>
             <el-col :span="16">
            <div>
                <p class="fz16 ">疾病简介</p>
                <p class="z6 fz16 dsf_jh_drr">
    原发性肝癌的病因及确切分子机制尚不完全清楚，目前认为其发病是多因素、多步骤的复杂过程，受环境和因此双重因素影响。流行病学及实验研究资料表明，乙型肝炎病毒（HBV）和丙型肝炎病毒（HCV）感染、黄曲霉素、饮水污染、酒精、肝硬化、性激素、亚硝胺类物质、微量元素等都与肝癌发病相关。继发性肝癌（转移性肝癌）可通过不同途径，如随血液、淋巴液转移或直接侵润肝脏而形成疾病。
    </p>
            </div>
                 
                 
                     <div class="mt20">
                <p class="fz16 ">国外先进技术 </p>
                <p class="z6 fz16 dsf_jh_drr">
肝癌介入治疗全称肝癌介入治疗，是在不开刀暴露病灶的情况下，在血管、皮肤上作直径几毫米的微小通道，或经人体原有的管道，在影像设备（血管造影机、透视机、CT、MR、B超）的引导下对病灶局部进行治疗的创伤最小的治疗方法。该方法是通过股动脉插管将抗癌药物或栓塞剂注入肝动脉的一种区域性局部化疗。它是非开腹手术治疗肝癌的首选方法，其疗效已得到肯定。它以其微创性、见效快及可重复性强等特点已广泛应用于临床。大量临床资料已表明，肝癌介入治疗可明显提高患者的生存质量、减轻痛苦，并能够延长生存期。
    </p>
            </div>
                 
                 
                     
                     <div class="mt20">
                <p class="fz16 ">常见疾病 </p>
                <p class="z6 fz16 dsf_jh_drr">
原发性肝癌、 肝细胞癌、胆管细胞癌、转移性肝癌、继发性肝癌
    </p>
            </div>
                 
                 
                   
                 
                 
    
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
    .sdf_jh_der{
        line-height: 1
    }
    .ds_jH_der{
        width: 80px;
        float: left;
    }
    .dsf_deeet{
        height: 274px;
        width: 260px;
    }
    .dsf_jh_drr{
        line-height: 30px;
        margin-top: 10px;
    }
</style>

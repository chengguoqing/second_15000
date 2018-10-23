<!--登录-->
<template>
<div class="cz_w sdf_jh_deer"  v-if="$store.state.is_deng_box">
        <section class="cz_a">
    <section class="yj4 bgff sdf_jh_deert">
        <p class="tr fg_deeerert">
            <i class="dx icon-close1 z9 fz26 sz" @click="$store.state.is_deng_box=false"></i>
        </p>
      
        <section v-if="$store.state.id_der==0">
            <denglu ></denglu>
        </section>
        
        <section v-if="$store.state.id_der==1"> 
    <bound></bound>
        </section> 
        
               <section v-if="$store.state.id_der==2">
    <forget_password></forget_password>
        </section>
        
        <section v-if="$store.state.id_der==3">
    <reset_passwords></reset_passwords>
        </section>
        
        
    </section>
            
            
    </section>

</div>
</template>
<script>
    import denglu from "./denglu"
    import bound from "./bound"
    import forget_password from "./forget_password"
    import reset_passwords from "./reset_passwords"

    export default {
       
        data() {
            return { 
               

            }
        },
        components: {
            denglu,
            bound,
            forget_password,
            reset_passwords
        },
        methods: {
            wd_deert(){
               
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>

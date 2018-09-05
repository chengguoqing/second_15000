<!--登录-->
<template>
<div class="cz_w sdf_jh_deer" >
        <section class="cz_a">
    <section class="yj4 bgff sdf_jh_deert">
        <p class="tr">
            <i class="dx icon-close1 z9 fz26 sz"></i>
        </p>
      
        <section v-if="id_der==0">
            <denglu></denglu>
        </section>
        
        <section v-if="id_der==1">
    <bound></bound>
        </section>
        
               <section v-if="id_der==2">
    <forget_password></forget_password>
        </section>
        
        <section v-if="id_der==3">
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
                id_der: 3, //0登录 1.绑定  2忘记密码 3.重置密码

            }
        },
        components: {
            denglu,
            bound,
            forget_password,
            reset_passwords
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>

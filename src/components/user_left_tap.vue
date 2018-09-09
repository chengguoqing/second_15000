<template>
	   <ul class="d_kj_deerer mt10">
                <li v-for="sd in user_left" :class="sd.cls" class="sz" @click="hf(sd.hr)">
                    <span class="sd_jh_der cz" v-if="sd.cls"></span>
                    <i class="dx  ls" :class="sd.icon"></i>
                    <span class="fz15 z6">{{sd.name}}</span>
                 
                </li>
            </ul>
</template>
<script>
    export default {
        props: {
            index_e: ""
        },
        data() {
            return {
                user_left: [{
                    icon: "icon-ico_user_info",
                    name: "我的信息",
                    hr: "user_index",
                    cls: "act"
                }, {
                    icon: "icon-ico_user_appoint",
                    name: "我的预约",
                    hr: "wodeyuyue",
                    cls: ""
                }, {
                    icon: "icon-ico_user_hospital",
                    hr: "user_scyf",
                    name: "收藏医院",
                    cls: ""
                }]
            }
        },
        components: {

        },
        methods: {
            sd_der(sd) {
          
            },
        },
        mounted() {
            this.user_left.map(a => {
                a.cls = ""
            })
            this.user_left[this.index_e].cls = "act"
        },
    }

</script>
<style scoped>
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

</style>

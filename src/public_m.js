import router from './router'
export default {
    install(Vue, options) {

        Vue.prototype.ge_t = function (url, cn, xy) {
            this.$http.get(url+cn, {
                params: {}
            }).then((response) => {
                xy(response.data)
            }, (response) => {
               
            });
        }

    }

}

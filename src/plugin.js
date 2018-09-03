import components from "./components";
export default {
    install: function (Vue, options) {
        Object.keys(components).forEach(item => {
            Vue.component(item, components[item])
        })
    }
}


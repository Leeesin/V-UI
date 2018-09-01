import renderless from "../components/renderless.js";
import vCardItem from "../components/v-card-item.vue";
import vCard from "../components/v-card.vue";

let myPlugin = {}
myPlugin.install = function (Vue, options) {
    // Vue.component('renderless', renderless)

    Vue.component('v-card-item', vCardItem)
    Vue.component('v-card', vCard)

    Vue.component('renderless-tags-input', {
        props: ['value'],
        data() {
            return {
                newTag: ''
            }
        },
        methods: {
            removeTag: function (tag) {
                this.$emit('input', this.value.filter(t => t !== tag))
            },
            addTag: function () {
                if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
                    return
                }
                this.$emit('input', [...this.value, this.newTag.trim()])
                this.newTag = ''
            }
        },
        render() {
            return this.$scopedSlots.default({
                tags: this.value,
                removeTag: this.removeTag,
                inputAttrs: {
                    value: this.newTag
                },
                inputEvents: {
                    input: (e) => { this.newTag = e.target.value },
                    keydown: (e) => {
                        if (e.keyCode === 13) {
                            e.preventDefault()
                            this.addTag()
                        }
                    }
                },
                addTag: this.addTag
            })
        }
    })


    Vue.component('my-component', {
        // Props 可选
        props: {
            // ...
        },
        // 为了弥补缺少的实例
        // 提供第二个参数作为上下文
        render() {
            return this.$scopedSlots.default({})
        }
    })


}

export default myPlugin
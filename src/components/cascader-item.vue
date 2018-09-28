<template>
    <div class='cascader-item'>
        <div>{{data.label}}</div>
        <cascaderItem v-if='data.children'
                      v-for='(item,index) in data.children '
                      :key="index"
                      :data='item'></cascaderItem>
    </div>
</template>

<script>
export default {
  name: "cascaderItem",
  props: {
    data: ""
  },
  data() {
    return {};
  },
  methods: {
    getInfo() {}
  },
  computed: {},
  mounted() {
    this.getInfo();
  },
  components: {}
};
</script>

<style lang='scss'>
.cascader-item {
}
</style >

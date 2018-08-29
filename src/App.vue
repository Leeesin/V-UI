<template>
  <div id="app">
    <!-- <v-button size='middle'
              icon="poweroff">button</v-button>

    <v-button size='middle'
              icon="zhu"
              :loading='loading'
              @click="test"
              iconPosition='right'>button</v-button> 

    <v-switch v-model="demo"></v-switch>
    <div>22222</div>
    <v-switch v-model="demo"></v-switch> -->
    <v-checkbox :myValue='demo'
                ref='demo'></v-checkbox>

    <button @click="test">test</button>

  </div>
</template>

<script>
import VButton from "./components/button/button.vue";
import vIcon from "./components/icon";
import vSwitch from "./components/switch";
import VCheckbox from "./components/checkbox.vue";

export default {
  name: "app",
  components: {
    VButton,
    vIcon,
    vSwitch,
    VCheckbox
  },
  methods: {
    test() {
      setTimeout(() => {
        this.$refs.demo.update([1, 2, 3]);
      }, 2000);
    }
  },
  mounted() {},
  data() {
    return {
      demo: []
    };
  }
};
</script>

<style lang='scss' scoped>
</style>

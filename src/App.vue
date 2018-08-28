<template>
  <div id="app">
    <v-button size='middle'
              icon="poweroff">button</v-button>

    <v-button size='middle'
              icon="zhu"
              :loading='loading'
              @click="test"
              iconPosition='right'>button</v-button> -->

    <v-switch v-model="demo"></v-switch>
    <div>22222</div>
    <v-switch v-model="demo"></v-switch>

  </div>
</template>

<script>
import VButton from "./components/button/button.vue";
import vIcon from "./components/icon";
import vSwitch from "./components/switch";

export default {
  name: "app",
  components: {
    VButton,
    vIcon,
    vSwitch
  },
  methods: {
    test() {
      alert(1);
    }
  },
  mounted() {
  },
  data() {
    return {
      demo: false,
      demo2: true,
      loading: true
    };
  }
};
</script>

<style lang='scss' scoped>
</style>

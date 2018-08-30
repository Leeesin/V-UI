<template>
  <div id="app">
    <v-switch v-model="demo"
              @click.native="test"
              :lazy='true'
              activeValue='1'
              activeLabel='卡卡'
              inActiveValue='2'
              inActiveLabel='122'></v-switch>

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
      alert(111);
    }
  },
  mounted() {},
  data() {
    return {
      demo: 1
    };
  }
};
</script>

<style lang='scss' scoped>
</style>

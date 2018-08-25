<template>
  <div id="app">
    <v-button size='middle'
              icon="poweroff">button</v-button>

    <v-button size='middle'
              icon="zhu"
              iconPosition='right'>button</v-button>

    <v-icon icon='zhu'></v-icon>
  </div>
</template>

<script>
import VButton from "./components/button/button.vue";
import vIcon from "./components/icon";

export default {
  name: "app",
  components: {
    VButton,
    vIcon
  },
  methods: {
    test() {}
  },
  data() {
    return {
      icon: "poweroff"
    };
  }
};
</script>

<style lang='scss' scoped>
</style>

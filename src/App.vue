<template>
  <div id="app">
    <v-button size='middle'
              icon="poweroff">button</v-button>

    <v-button size='middle'
              icon="zhu"
              iconPosition='right'>button</v-button>
  </div>
</template>

<script>
import VButton from "./components/button/button.vue";

export default {
  name: "app",
  components: {
    VButton
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

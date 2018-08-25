<template>
  <div id="app">
    <v-button size='middle'
              icon="poweroff">button</v-button>

    <v-button size='middle'
              icon="zhu"
              :loading='loading'
              @click="test"
              iconPosition='right'>button</v-button>

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
    test() {
      alert(1);
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style lang='scss' scoped>
</style>

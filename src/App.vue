<template>
  <div id="app">
    <v-button type='success'
              @click="test"
              size='large'>wqwq</v-button>

    <!-- <div class="demo">
      123132
    </div> -->
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
  }
};
</script>

<style lang='scss'>
.demo {
  width: 200px;
  height: 200px;
  border: 1px solid;
}
</style>

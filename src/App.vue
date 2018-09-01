<template>
  <div id="app">
    <v-card>
      <v-card-item label='测试2'
                   value='value'>
        <template slot-scope="scope">
          <div>
            <div>
              {{scope.data.name}}
            </div>
          </div>
        </template>

      </v-card-item>

      <v-card-item label='测试'
                   value='name'>
      </v-card-item>

      <v-card-item label='测试33'
                   value='age'></v-card-item>

      <v-card-item></v-card-item>

      <v-card-item></v-card-item>

    </v-card>

  </div>
</template>

<script>
import VButton from "./components/button/button.vue";
import vIcon from "./components/icon";
import vSwitch from "./components/switch";
import VCheckbox from "./components/checkbox.vue";
import noRender from "./components/renderless.js";

export default {
  name: "app",
  components: {
    VButton,
    vIcon,
    vSwitch,
    VCheckbox,
    noRender
  },
  methods: {},
  mounted() {},
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.demo {
  height: 100px;
  width: 100%;
  background: red;
}
</style>

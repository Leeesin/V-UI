<template>
  <div class=''>
    <v-button :loading='true'>1211</v-button>
  </div>
</template>

<script>
import VButton from "../../../src/components/button/button";
export default {
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
  components: { VButton }
};
</script>



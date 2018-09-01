<template>
  <div class='m-checkbox'>
    <input type="checkbox"
           :checked='value'>

  </div>
</template>

<script>
export default {
  props: {
    value: {
      // type: Boolean
    }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.value, "this.value");
  },
  computed: {
    myValue: function() {
      return this.value;
    }
  }
};
</script>

<style lang='scss' scoped>
.m-checkbox {
}
</style >

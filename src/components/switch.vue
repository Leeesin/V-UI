<template>
  <div class='v-switch'
       :class="[value?'v-switch--active':'v-switch--inactive',round?'v-switch--round':'']"
       @click="change">
    <!-- <span>开</span> -->
    <!-- <span>关</span> -->
  </div>
</template>

<script>
export default {
  props: {
    value: "",
    round: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    change() {
      this.$emit("input", !this.value);
    }
  },
  watch: {
    value: function() {}
  },
  computed: {},
  mounted() {},
  components: {}
};
</script>

<style lang='scss' scoped>
@mixin move($left) {
  position: absolute;
  content: "";
  width: 49%;
  height: calc(100% - 2px);
  left: (50% - $left);
  background: #fff;
  transition: all 0.5s ease;
}
.v-switch {
  width: 40px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 1px;
  position: relative;

  &--round {
    border-radius: 10px;
  }
  &--round:after {
    border-radius: 10px;
  }

  &--active {
    background: #1890ff;
  }

  &--active:after {
    @include move(1%);
  }

  &--inactive {
    background: rgba(0, 0, 0, 0.25);
  }

  &--inactive:after {
    @include move(49%);
  }
}
</style >

<template>
  <div class="v-switch-wrap">
    <!-- 为了兼容和提高容错性，采用非严格等于 -->
    <div class="v-switch-text">{{value==activeValue?activeLabel:inActiveLabel}}</div>
    <div class='v-switch'
         :class="[value==activeValue?'v-switch--active':'v-switch--inactive',round?'v-switch--round':'']"
         @click="handleChange">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: "",
    round: {
      type: Boolean,
      default: false
    },
    activeValue: {
      default: true
    },
    activeLabel: {
      default: "启用"
    },
    inActiveValue: {
      default: true
    },
    inActiveLabel: {
      default: "禁用"
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleChange() {
      this.beforeChange() ? this.change() : "";
    },

    change() {
      let res =
        this.value === this.activeValue ? this.inActiveValue : this.activeValue;
      this.$emit("input", res);
    },
    beforeChange() {
      return !this.lazy;
    }
  },
  watch: {},
  computed: {},
  mounted() {
    // console.log(,'');
  },
  components: {}
};
</script>

<style lang='scss' scoped>
@mixin move($left) {
  position: absolute;
  content: "";
  width: 49%;
  height: calc(100% - 1.5px);
  left: (50% - $left);
  background: #fff;
  transition: all 0.5s ease;
  border-radius: 2px;
}
.v-switch-wrap {
  display: inline-flex;
  align-items: center;
  .v-switch-text {
    margin-right: 0.3em;
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
    border-radius: 2px;

    &--round {
      border-radius: 10px;
    }
    &--round:after {
      border-radius: 10px;
    }

    &--active {
      background: #ffc836;
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
}
</style >

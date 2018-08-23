<template>
  <button class='v-button'
          @click="handleClick"
          :type="nativeType"
          :class="[type?'v-button--'+type:'',size?'v-button--'+size:'']">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary",
      validator(val) {
        return ["primary", "success", "danger"].includes(val);
      }
    },
    size: {
      type: String,
      default: "middle",
      validator(val) {
        return ["small", "middle", "large"].includes(val);
      }
    },
    nativeType: {
      type: String,
      default: "button"
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  },
  computed: {
    styleObject: function() {
      return {
        width: "200px"
      };
    }
  },
  mounted() {},
  components: {}
};
</script>

<style lang='scss' scoped>
$small: "16px";
$middle: "18px";
$large: "20px";

.v-button {
  box-sizing: border-box;
  position: relative;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  outline: none;
  &:active {
    border: none;
  }
  &--primary {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
  &--success {
    color: #fff;
    background-color: #19be6b;
    border-color: #19be6b;
  }
  &--danger {
    color: #fff;
    background-color: #ed4014;
    border-color: #ed4014;
  }
  &--small {
    font-size: $small;
    padding: 3px 6px;
  }
  &--middle {
    font-size: $middle;
    padding: 6px 12px;
  }
  &--large {
    font-size: $middle;
    padding: 12px 24px;
  }
}
</style >

<template>
  <div class='v-button'
       @click="handleClick"
       :class="[type?'v-button--'+type:'',
                loading?'v-button--disable':'',
                  size?'v-button--'+size:'',
                  `icon-${iconPosition}`]">

    <v-icon class='loading'
            v-if='loading'
            icon='loading'></v-icon>
    <template v-else>
      <v-icon class="icon"
              v-if='icon'
              :icon='icon'></v-icon>
    </template>

    <div class="content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
import vIcon from "./icon.vue";
export default {
  props: {
    icon: "",

    iconPosition: {
      type: String,
      default: "left",
      validator(val) {
        return ["left", "right"].includes(val);
      }
    },
    type: {
      type: String,
      default: "primary",
      validator(val) {
        return ["primary", "success", "danger"].includes(val);
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "middle",
      validator(val) {
        return ["small", "middle", "large"].includes(val);
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      this.loading ? undefined : this.$emit("click", e);
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
  components: { vIcon }
};
</script>

<style lang='scss' scoped>
$small: "16px";
$middle: "18px";
$large: "20px";

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.v-button {
  color: red;
  box-sizing: border-box;
  margin: 1em;
  vertical-align: middle;
  border-radius: 2px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  .loading {
    animation: spin 1s infinite linear;
    margin-right: 0.3em;
  }
  > .icon {
    order: 1;
    padding-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    .icon {
      order: 2;
      padding-left: 0.3em;
    }
    .content {
      order: 1;
    }
  }

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
    width: 30px;
    height: 30px;
    // padding: 3px 6px;
  }
  &--middle {
    font-size: $middle;
    width: 100px;
    height: 30px;
    // padding: 6px 12px;
  }
  &--large {
    font-size: $middle;
    // padding: 12px 24px;
  }

  &--disable {
    cursor: not-allowed;
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
}

.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  // border: 1px solid;
}
</style >

<template>
  <div class='v-card-item'>
    <div class="v-card-item-label">{{label}}</div>

    <div class="v-card-item-value"
         v-if='$scopedSlots.default'>
      <slot :data='source'></slot>
    </div>

    <div class="v-card-item-value"
         v-else>
      {{source[value]}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: "",
    value: "",
    height: {
      type: String,
      default: "40px"
    }
  },
  data() {
    return {
      source: {}
    };
  },
  methods: {
    hasScopedSlots() {
      return this.$scopedSlots.default ? true : false;
    }
  },
  watch: {
    "$parent.myData": function(val) {
      this.source = val;
    }
  },
  mounted() {
    this.hasScopedSlots();
  }
};
</script>

<style lang='scss' scoped>
@mixin base($width) {
  padding-left: 20px;
  display: flex;
  align-items: center;
  width: $width;
}

$width_label: 30%;
$width_value: 100%-$width_label;

.v-card-item {
  display: flex;
  min-height: 40px;
  &-label {
    @include base($width_label);
  }
  &-value {
    @include base($width_value);
    border-left: 1px solid #d8d8d8;
  }
}
</style >

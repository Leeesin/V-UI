<template>
    <div>
        <svg class='v-icon'>
            <use :xlink:href='`#i-${icon}`'></use>
        </svg>
    </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang='scss' scoped>
.v-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style >

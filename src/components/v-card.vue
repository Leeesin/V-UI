<template>
  <div class='v-card'>
    <div class="v-card-title">测试</div>
    <div class="v-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myData: {}
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      let source = {
        name: "胡欢",
        age: "23",
        height: "163"
      };
      this.myData = source;
    }, 1000);
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.v-card {
  width: 300px;
  border: 1px solid burlywood;

  &-title {
    display: flex;
    align-items: center;
    height: 50px;
    background: #d8d8d8;
  }
  &-content {
    & > div:nth-child(even) {
      background: #f8f8f8;
    }
    & > div:nth-child(odd) {
      background: #ffffff;
    }
  }
}
</style >

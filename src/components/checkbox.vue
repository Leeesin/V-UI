<template>
    <div class='m-checkbox'>
        <div v-for='(item) in arr'
             :key="item">
            <input type="checkbox"
                   :checked='binding[item]'> item
        </div>

    </div>
</template>

<script>
export default {
  props: {
    myValue: {
      type: Array
    }
  },
  data() {
    return {
      arr: [1, 2, 3],
      binding: {}
    };
  },
  methods: {
    generate() {
      let obj = {};
      for (let i = 0; i < 10; i++) {
        obj[i] = false;
      }
      this.binding = obj;
    },
    update(val) {
      for (const item of val) {
        this.binding[item] = true;
      }
      // alert(11)

      //   for (const item of this.myValue) {
      //     this.binding[item] = true;
      //   }
    }
  },
  mounted() {
    this.generate();
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.m-checkbox {
}
</style >

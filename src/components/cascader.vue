<template>
    <div class='v-cascader'>
        <div class="v-cascader-label"
             @click="handleClick">
        </div>
        <div class="v-cascader-picker"
             :class="[pickerVisible?'v-cascader-picker--show':'v-cascader-picker--hide']">
            <div class="v-cascader-picker-level_1">
                <div v-for='(item,index) in options '
                     :key="index"
                     @click="getActiveChildren(item)">{{item.label}}</div>
            </div>
            <div class="v-cascader-picker-level_2"
                 v-show='level_2_visible'>
                <div v-for='(item2,index2) in activeChildren '
                     :key="index2"
                     @click="getActiveChildren2(item2)">{{item2.label}}</div>
            </div>
            <div class="v-cascader-picker-level_3"
                 v-if='level_3_visible'>
                <div v-for='(item3,index3) in activeChildren[0].children '
                     :key="index3"
                     @click="getActiveChildren2(item3)">{{item3.label}}</div>
            </div>
        </div>
    </div>
</template>

<script>
const options = [
  {
    value: "zhejiang",
    label: "浙江",
    children: [
      {
        value: "hangzhou",
        label: "杭州",
        children: [
          {
            value: "xihu",
            label: "西湖"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "江苏",
    children: [
      {
        value: "nanjing",
        label: "南京",
        children: [
          {
            value: "zhonghuamen",
            label: "种瓜们"
          }
        ]
      }
    ]
  }
];
export default {
  data() {
    return {
      pickerVisible: false,
      level_2_visible: false,
      level_3_visible: false,
      options,
      activeChildren: []
    };
  },
  methods: {
    handleClick() {
      this.pickerVisible = !this.pickerVisible;
      this.level_2_visible = !this.pickerVisible;
      //   this.level_3_visible = !this.level_3_visible;
    },

    getActiveChildren(item) {
      this.level_2_visible = true;
      this.level_3_visible = false;
      this.activeChildren = item.children;
    },
    getActiveChildren2(item) {
      this.level_3_visible = true;
      this.activeChildren.children = item;
    }
  },
  computed: {},
  mounted() {},
  components: {}
};
</script>

<style lang='scss' scoped>
.v-cascader {
  box-sizing: border-box;
  width: 400px;
  height: 20px;
  border: 1px solid;
  position: relative;
  &-label {
    width: 100%;
    height: 100%;
  }
  &-picker {
    height: 0px;
    display: flex;
    & > div {
      width: 33%;
      border: 1px solid darkgray;
    }
    &--show {
      top: 20px;
      position: absolute;
      width: calc(100% - 2px);
      height: 120px;
      //   border: 1px solid blue;
      transition: height 0.1s ease;
    }
    &--hide {
      top: 20px;
      display: none;
      position: absolute;
      width: calc(100% - 2px);
      height: 0px;
      border: 1px solid blue;
      transition: height 0.1s ease;
    }
    &-level_1 {
      cursor: pointer;
    }
    &-level_2 {
      cursor: pointer;
    }
    &-level_3 {
      cursor: pointer;
    }
  }
}
</style >

<template>
  <div class='v-datePicker'>
    <div>{{temp.year}}年{{temp.month}}月</div>
    <button @click="getLastMonth">上一月</button>
    <hr>
    <button @click="getNextMonth">下一月</button>
    <table class="el-date-table">
      <thead>
        <tr>
          <th>一</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
          <th>六</th>
          <th>日</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item,index) in dateMap'
            :key="index">
          <td :class="item2.showDate===current.date&&item2.month===current.month?'active':''"
              v-for='(item2,index2) in item'
              :key="index2"
              @click="changeDate(item2.showDate)">{{item2.showDate}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      current: {
        year: "",
        month: "",
        date: ""
      },
      //用户点击选择的date
      temp: {
        year: "",
        month: "",
        date: ""
      },

      monthDate: [],
      dateMap: {} //将数据按照每一行分类
    };
  },
  methods: {
    getMonthDate(year, month) {
      let ret = [];
      // let year;
      // let month;
      if (!year || !month) {
        let today = new Date();
        year = today.getFullYear();
        month = today.getMonth() + 1;
        this.current.year = today.getFullYear();
        this.current.month = today.getMonth() + 1;
        this.current.date = today.getDate();
      }
      let firstDay = new Date(year, month - 1, 1);
      let firstDayWeekDay = firstDay.getDay();
      if (firstDayWeekDay === 0) firstDayWeekDay = 7;
      let lastDayOfLastMonth = new Date(year, month - 1, 0);
      let lastDateOfLastMonth = lastDayOfLastMonth.getDate();
      let preMonthDayCount = firstDayWeekDay - 1;
      let lastDay = new Date(year, month, 0);
      let lastDate = lastDay.getDate();

      for (let i = 0; i < 6 * 7; i++) {
        let date = i + 1 - preMonthDayCount;
        let showDate = date;
        let thisMonth = month;
        if (date <= 0) {
          //上一月
          thisMonth = month - 1;
          showDate = lastDateOfLastMonth + date;
        } else if (date > lastDate) {
          //下一月
          thisMonth = month + 1;
          showDate = showDate - lastDate;
        }
        if (thisMonth === 0) thisMonth = 12;
        if (thisMonth === 13) thisMonth = 1;
        ret.push({
          month: thisMonth,
          date: date,
          showDate
        });
      }
      return ret;
    },
    //将数据按照每一行分类
    generateRowData() {
      let obj = {};
      let arr = [0, 7, 14, 21, 28, 35];
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        obj[i] = this.monthDate.slice(item, item + 7);
      }
      this.dateMap = obj;
    },
    getLastMonth() {
      this.temp.month = this.temp.month - 1;
      this.monthDate = this.getMonthDate(this.temp.year, this.temp.month);
      this.generateRowData();
    },
    getNextMonth() {
      this.temp.month = this.temp.month + 1;
      this.monthDate = this.getMonthDate(this.temp.year, this.temp.month);
      this.generateRowData();
    },
    changeDate(date) {
      this.current.date = date;
    }
  },
  computed: {},
  mounted() {
    this.monthDate = this.getMonthDate();
    this.generateRowData();
    this.temp = { ...this.current };
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.v-datePicker {
  font-size: 16px;
  font-weight: 500;
  color: #606266;
  th,
  td {
    cursor: pointer;
  }
  .active {
    color: red;
  }
}
</style >

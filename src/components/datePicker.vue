<template>
  <div class='v-datePicker'>
    <div>{{current.year}}年{{current.month}}月</div>
    <button @click="getLastMonth">上一月</button>
    <hr>
    <button @click="getNextMonth">下一月</button>
    <table class="el-date-table">
      <thead>
        <tr>
          <th>日</th>
          <th>一</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
          <th>六</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td :class="item.showDate===current.date?'active':''"
              v-for='(item,index) in row1'
              :key="index"
              @click="changeDate(item.showDate)">{{item.showDate}}</td>
        </tr>
        <tr>
          <td :class="item.showDate===current.date?'active':''"
              v-for='(item,index) in row2'
              :key="index"
              @click="changeDate(item.showDate)">{{item.showDate}}</td>
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

      monthDate: [],
      row1: [],
      row2: [],
      row3: [],
      row4: [],
      row5: [],
      row6: [],
      row7: []
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
        this.current.month = today.getMonth();
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
    generateHtmlString() {
      // [0, 6, 13, 20, 27, 34, 41]
      let arr = [0];
      this.row1 = [];
      this.row2 = [];
      for (let i = 0; i < this.monthDate.length; i++) {
        if (0 <= i && i <= 6) {
          this.row1.push(this.monthDate[i]);
        } else if (7 <= i && i <= 13) {
          this.row2.push(this.monthDate[i]);
        }
      }
    },
    getLastMonth() {
      this.current.month -= 1;
      this.monthDate = this.getMonthDate(this.current.year, this.current.month);
      this.generateHtmlString();
    },
    getNextMonth() {},
    changeDate(date) {
      this.current.date = date;
    }
  },
  computed: {},
  mounted() {
    this.monthDate = this.getMonthDate();
    this.generateHtmlString();
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

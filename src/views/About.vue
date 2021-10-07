<template>
  <div class="mx-auto">
    <DatePicker/>
    <a-date-picker class="mx-auto" @change="onChange" />
    <br />
    <a-month-picker class="mx-auto" placeholder="Select month" @change="onChange" />
    <br />
    <a-range-picker class="mx-auto" @change="onChange" />
    <br />
    <a-week-picker class="mx-auto" placeholder="Select week" @change="onChange" />
  </div>
</template>
<script>
import { DatePicker } from 'ant-design-vue';

export default {
  components: {
    DatePicker,
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>

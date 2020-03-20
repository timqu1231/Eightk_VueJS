// eightk.vue
<template>
  <div>
      <h1>eightk_main_subset1.json</h1>
      <button v-on:click="getList">Get eightk_data.json</button>
      <div>{{eightkList}}</div>

  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'eightk',
  data() {
    return {
      eightkList: []
    };
  },
  methods: {
    // getList() {
    //   fetch("eight_main_subset1.json")
    //   .then(response => response.json())
    //   .then(data => (this.eightkList = data));
    // }
    getList() {
      axios.get("eight_main_subset1.json").then(response => (this.eightkList = response.data));
    }
  }
}
</script>
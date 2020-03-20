<template>
  <div class="eightk">
    <h1>Eightk Information Board</h1>
    <div v-if="eightk.length > 0" class="table-wrap">
      <table>
        <tr>
          <!-- ideightk_main -->
          <td>ID</td>
          <td>Company Name</td>
          <td>Business Address</td>
          <td>Street</td>
          <td>State</td>
          <!-- item -->
          <td>File Type</td>
          <td>Filling Date</td>
          <td>File NO.</td>
          <!-- 8-K-->
          <td>File Category</td>
          <td>File Size</td>
          <td>File URL</td>
        </tr>
        <tr v-for="item in eightk" :key="item.ideightk_main">
          <td>{{item.ideightk_main}}</td>
          <td>{{item.coname}}</td>
          <td>{{item.business_address1}}</td>
          <td>{{item.business_address2}}</td>
          <td>{{item.state_of_incorp}}</td>
          <td>{{item.item}}</td>
          <td>{{item.filling_date}}</td>
          <td>{{item.file_no}}</td>
          <td>{{item.type}}</td>
          <td>{{item.fsize}}</td>
          <td>{{item.eightk_file_url}}</td>
        </tr>
      </table>
      <!-- <DynamicScroller
        page-mode
        :items="eightk"
        :min-item-size="100"
        class="scroller"
      > -->
        <!-- <table>
          <tr> -->
            <!-- ideightk_main -->
            <!-- <td>ID</td>
            <td>Company Name</td>
            <td>Business Address</td>
            <td>Street</td>
            <td>State</td> -->
            <!-- item -->
            <!-- <td>File Type</td>
            <td>Filling Date</td>
            <td>File NO.</td> -->
            <!-- 8-K-->
            <!-- <td>File Category</td>
            <td>File Size</td>
            <td>File URL</td>
          </tr>
          <template v-slot="{ item, active }">
            <DynamicScrollerItem
              :item="item"
              :active="active"
            >
            <tr :key="item.ideightk_main">
              <td>{{item.ideightk_main}}</td>
              <td>{{item.coname}}</td>
              <td>{{item.business_address1}}</td>
              <td>{{item.business_address2}}</td>
              <td>{{item.state_of_incorp}}</td>
              <td>{{item.item}}</td>
              <td>{{item.filling_date}}</td>
              <td>{{item.file_no}}</td>
              <td>{{item.type}}</td>
              <td>{{item.fsize}}</td>
              <td>{{item.eightk_file_url}}</td>
            </tr>
            </DynamicScrollerItem>
          </template>
        </table>
      </DynamicScroller> -->
    </div>
  </div>
</template>

<script>
import EightkService from '../services/EightkService'
export default {
  name: 'eightk',
  data () {
    return {
      eightk: []
    }
  },
  mounted () {
    this.getEightk()
  },
  methods: {
    async getEightk () {
      const response = await EightkService.getEightk()
      this.eightk = response.data.eightk
    }
  }
}
</script>

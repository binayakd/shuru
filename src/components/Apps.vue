<template>
<p class="text-2xl pt-14 font-black">APPLICATIONS</p>
  <div class="pt-5" v-for="appSet in appList" v-bind:key="appSet.name">
    <p class="pb-2 text-lg font-bold">{{ appSet.name.toUpperCase() }}</p>
    <AppRow :appList='appSet.apps'/>
  </div>
</template>

<script>
import appList from "../../config/appList.json"
import AppRow from "./AppRow.vue"
export default {
  components: {
    AppRow
  },
  setup() {
    return {
      appList
    } 
  }
}
</script>
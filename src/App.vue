<template>
  <div class="h-screen flex justify-center items-center bg-background text-primary"> 
    <div class="container mx-auto w-[90%] xl:w-[60%]">
      <DateDisplay />
      <Apps />
    </div>
  </div>
  
</template>

<script>
import DateDisplay from './components/DateDisplay.vue'
import Apps from './components/Apps.vue'

export default {
  name: 'App',
  components: {
    DateDisplay,
    Apps
  }
}
</script>

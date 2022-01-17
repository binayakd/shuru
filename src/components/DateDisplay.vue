<template>
  <p class="text-9xl text-title text-center font-display pt-14">{{ dateTime.time }}</p>
  <p class="text-2xl font-light text-center font-display">{{ dateTime.date }}</p>
</template>


<script>
import { ref, onMounted } from "vue";

export function getDateTime() {
  const dateTime = ref({ date: "", time: "" })
  const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "long",
  };

  const timeOptions = {
    hour: '2-digit', minute: '2-digit', second: "2-digit"
  }

  onMounted(() => {
    setInterval(() => {
      const now = new Date()
      var currentDateTime = {
        date: now.toLocaleDateString("en-GB", dateOptions),
        time: now.toLocaleTimeString("en-GB", timeOptions)
      }
      dateTime.value = currentDateTime
    }, 1000)
  })
  return dateTime
}

export default {
  setup() {
    const dateTime = getDateTime();

    return {
      dateTime
    }
  
  }
}
</script>

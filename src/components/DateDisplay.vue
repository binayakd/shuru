<template>
  <p class="font-light">{{ date }}</p>
  <p class="text-5xl font-bold pt-5">{{ greeting }}</p>
</template>


<script>
import { computed } from "vue";
const currentDate = new Date();

export default {
  setup() {
    const date = computed(() => { 
      const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return currentDate.toLocaleDateString("en-GB", dateOptions).toUpperCase();
    });

    const greeting = computed(() => {
      let greetNum = Math.floor(currentDate.getHours() / 6);

      switch (greetNum) {
        case 0:
          return "Good night!";
        case 1:
          return "Good morning!";
        case 2:
          return "Good afternoon!";
        case 3:
          return "Good evening!";
      }
    });

    return {
      date,
      greeting
    }
  
  }
}
</script>

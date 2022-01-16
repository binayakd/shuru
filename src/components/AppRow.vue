<template>
  <div class="grid grid-cols-3 lg:grid-cols-4 gap-0">
    <div class="flex" v-for="app in appList" :key="app.name">
      <div class="flex-none h-[64px] pr-2">
        <span class="iconify icon text-4xl" :data-icon="`mdi-${app.icon}`"></span>
      </div>
      <div class="flex-none">
        <a :href="app.url" target="_blank" rel="noreferrer noopener">
          <p>{{ app.name.toUpperCase() }}</p>
          <p class="text-secondary text-xs leading-none">{{ app.url.toUpperCase().replace("HTTP://", "").replace("HTTPS://", "") }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appList: Object
  },
  setup(props, context) {
    const appList = props.appList
    return {
      appList
    }
  }
}
</script>
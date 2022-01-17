<template>
  <div class="grid grid-cols-3 lg:grid-cols-4 gap-0s">
    <div class="flex hover:text-title hover:font-black" v-for="app in appList" :key="app.name">
      <a :href="app.url" target="_blank" rel="noreferrer noopener">
        <div class="flex-none h-[64px] pr-2">
          <span class="iconify icon text-5xl" :data-icon="`mdi-${app.icon}`"></span>
        </div>
      </a>
      <a :href="app.url" target="_blank" rel="noreferrer noopener">
        <div class="flex-none">
          <p class="text-xl">{{ app.name.toUpperCase() }}</p>
          <p class="text-secondary font-condensed leading-none">{{ app.url.toUpperCase().replace("HTTP://", "").replace("HTTPS://", "") }}</p>
        </div>
      </a>
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
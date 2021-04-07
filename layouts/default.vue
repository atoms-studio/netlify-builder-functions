<template>
  <div class="p-4 h-full">
    <Nuxt />
  </div>
</template>
<style>
html {
  height: -webkit-fill-available;
}
body {
  height: 100vh;
  height: -webkit-fill-available;
  @apply bg-gray-100;
}

#__nuxt, #__layout {
  min-height: 100%;
}
</style>
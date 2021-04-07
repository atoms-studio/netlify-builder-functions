<template>
  <div>
    <pre>{{ movie }}</pre>
  </div>
</template>

<script>
  export default {
    asyncData({ params, $config, $axios }) {
      return $axios.get('https://www.omdbapi.com/', {
        params: {
          i: params.id,
          apiKey: $config.omdbKey
        }
      }).then(({ data }) => {
        return {
          movie: data
        }
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
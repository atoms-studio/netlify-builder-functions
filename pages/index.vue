<template>
  <div class="flex flex-col h-full">
    <div class="max-w-md mx-auto w-full">
      <Logo class="w-full md:w-1/3 h-auto" />
      <h1 class="text-3xl text-center">
        +<br>
        Builder Functions
      </h1>
      <form class="mt-4 flex" @submit.prevent="search">
        <input v-model="query" type="search" class="w-full shadow rounded px-4 py-2 focus:outline-none focus:ring focus:border-green-300" placeholder="Type a movie title and hit enter" />
        <button type="submit" class="px-4 py-2 bg-green-500 shadow ml-1 rounded text-white focus:outline-none focus:ring focus:border-green-600">Search</button>
      </form>
      <p class="mt-4 text-center font-light">Search for movies, then click on one of the results.<br> The movie detail page will be cached after the first render.</p>
    </div>
    <div class="flex flex-wrap mt-4">
      <nuxt-link :to="{ name: 'movies-id', params: { id: result.imdbID } }" v-for="result of results" :key="result.imdbID" class="w-1/2 md:w-1/3 lg:w-1/4 2xl:w-auto p-2">
        <div class="h-96 aspect-ratio bg-gray-400 shadow-md rounded-xl p-2 bg-cover bg-center relative overflow-hidden" :style="{backgroundImage: `url(${result.Poster})`}">
          <div class="absolute bottom-0 left-0 right-0 backdrop-filter backdrop-blur p-8 text-white bg-black bg-opacity-30">
            <h1 class="text-2xl font-bold">{{ result.Title }}</h1>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      results: [],
    }
  },

  methods: {
    search() {
      this.results = []

      if (this.query) {
        this.$axios.get('https://www.omdbapi.com/', {
          params: {
            s: this.query,
            apiKey: this.$config.omdbKey
          }
        }).then(({ data }) => {
          this.results = data.Search
        })
      }
    }
  }
}
</script>

<style>
.aspect-ratio {
  @screen 2xl {
    aspect-ratio: 3/4;
  }
}
</style>
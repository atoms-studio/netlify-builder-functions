<template>
  <div>
    <div class="flex mb-8 shadow">
      <nuxt-link to="/" class="px-4 py-2 rounded-l bg-green-500 text-white focus:outline-none focus:ring focus:border-green-600">
        Back
      </nuxt-link>
      <div class="flex-grow bg-white rounded-r flex items-center justify-center font-bold text-sm p-2">
        {{ ssr ? 'This page is cached! It has been rendered on ' + date : 'Navigated via nuxt-link. Reload the page to cache it.' }}
      </div>
    </div>
    <div class="flex">
      <div class="w-full md:w-1/2">
        <img :src="movie.Poster" class="mx-auto w-1/2 h-auto shadow-xl rounded-xl" />
      </div>
      <div class="w-full md:w-1/2 pr-16">
        <h1 class="text-5xl font-bold">{{ movie.Title }}</h1>
        <h4 class="text-2xl font-bold mt-4">{{ movie.Year }}</h4>
        <p class="text-xl mt-4">{{ movie.Plot }}</p>
        <h4 class="text-xl uppercase font-bold mt-8">Ratings</h4>
        <ul>
          <li v-for="rating of movie.Ratings" class="text-lg" :key="rating.Source"><span class="font-light">{{ rating.Source }}:</span> <span class="font-medium">{{ rating.Value }}</span></li>
        </ul>
      </div>
    </div>
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
        const time = new Date()
        return {
          movie: data,
          ssr: process.server,
          date: time.toGMTString(),
        }
      })
    },
  }
</script>

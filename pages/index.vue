<template>
  <div>
    Default page
    {{ store.stateMovies.movies }}
    <nuxt-link to="/custom" style="color: red">
      Go to custom
    </nuxt-link>
  </div>
</template>
<script setup>
import { useMoviesStore } from '@/store/modules/movies'

const store = useMoviesStore()
</script>
<style lang="scss" scoped>

</style>

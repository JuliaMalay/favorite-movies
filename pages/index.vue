<template>
  <div class="movies">
    <Tabs
      v-model="currentTab"
      class="movies__tabs"
      :tabs="tabs"
    />
    <Input
      id="search-input"
      v-model="searchValue"
      data-selector="SEARCH-INPUT"
      name="search-input"
    >
      <template #iconRight>
        <img
          src="@/assets/img/search.svg"
          alt="icon-search"
          class="input__img"
          @click="clickSearch"
        >
      </template>
    </Input>
    <div class="movies__list">
      <Movie
        v-for="movie in store.stateMovies.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMoviesStore } from '@/store/modules/movies'
import { NAV_TABS } from '~/enums'

const store = useMoviesStore()
const tabs = [{
  value: NAV_TABS.SEARCH,
  label: 'Search'
},
{
  value: NAV_TABS.FAVORITES,
  label: 'Favorites'
}]
const currentTab = ref(NAV_TABS.SEARCH)
const searchValue = ref('')

function clickSearch (): void {
  console.log(searchValue.value)
}
</script>
<style lang="scss" scoped>
.movies {
  &__tabs {
    display: flex;
    justify-content: center;
    padding: 16px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    column-gap: 16px;
  }
}
.input {
  &__img {
    width: 24px;
    height: 24px;
  }
}
</style>

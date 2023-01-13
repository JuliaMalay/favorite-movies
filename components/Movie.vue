<template>
  <div class="movie">
    <div class="movie__content">
      <h2 class="movie__title">
        {{ props.movie.original_title }}
      </h2>
      <span class="movie__date">{{ props.movie.release_date }}</span>
      <img
        class="movie__img"
        :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.movie.poster_path}`"
        alt="movie poster"
      >
      <p>{{ props.movie.overview }}</p>
    </div>
    <div class="movie__buttons">
      <button class="movie__button movie__button_primary">
        <span v-if="!props.movie.isWatched">Watched</span>
        <span v-else>Unwatched</span>
      </button>
      <button
        class="movie__button movie__button_danger"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IMovie } from '~/types'

export interface Props {
  movie: IMovie
}

const props = withDefaults(defineProps<Props>(), {
})
</script>

<style scoped lang="scss">
.movie {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 6px 6px 2px 1px rgba(36, 36, 114, 0.2);

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-grow: 1;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    color: black;
  }

  &__date {
    font-size: 16px;
    font-weight: 400;
    color: black;
  }

  &__img {
    width: 100%;
    object-fit: contain;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  &__button {
    min-height: 40px;
    max-width: 100%;
    width: 100%;
    border-radius: 8px;
    &_primary {
      background-color: aquamarine;
    }
    &_danger {
      background-color: red;
    }
  }
}
</style>

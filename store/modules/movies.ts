import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', () => {
    const stateMovies = reactive({
        movies: ['Tor'],
        count: 0
    })

    return {
        stateMovies
    }
})

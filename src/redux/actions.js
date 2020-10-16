export const MOVIES_LOADED = 'MOVIES_LOADED';
export const moviesLoaded = (loadedMovies) => ({
    type: MOVIES_LOADED,
    payload: loadedMovies
});
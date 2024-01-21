import request from "./request";

export const getMovies = (page = 1, limit = 10) => {
  return request.get('api/movie', {
    params: {
      page,
      limit
    }
  })
}
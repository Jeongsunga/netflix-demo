import { useQuery } from "@tanstack/react-query";
import api from '../utils/api'

const fetchUpComingdMovies = () => {
    return api.get(`/movie/upcoming`)
}

export const useUpComingMoviesQuery = () => {
    return useQuery({
        queryKey:['movie-upcoming'],
        queryFn: fetchUpComingdMovies,
        select: (result)=>result.data
    })
}
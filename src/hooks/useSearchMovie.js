import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchSearchMovie = ({keyword, page}) => {
    return keyword
        ?api.get(`/search/movie?query=${keyword}&page=${page}`)
        :api.get(`/movie/popular?page=${page}`)
}

export const useSearchMovieQuery = ({keyword, page}) => {
    return useQuery({
        queryKey: ['movie-search', {keyword, page}], // 유니크한 queryKey 만들어야 함!
        queryFn: () => fetchSearchMovie({keyword, page}),
        select: (result) => result.data
    })
}
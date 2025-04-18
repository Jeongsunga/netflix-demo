import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedSlide from './components/TopRatedSlide/TopRatedSlide'
import UpComingSlide from './components/UpComingSlide/UpComingSlide'

// 1. 배너 (popular movie의 첫 번째 아이템)
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
const Homepage = () => {
  return (
    <div>
        <Banner/>
        <PopularMovieSlide/>
        <TopRatedSlide/>
        <UpComingSlide/>
    </div>
  )
}

export default Homepage
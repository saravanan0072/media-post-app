import React from 'react'
import Feed from './Feed.js'
import './css/Home.css'
import { ImSpinner9 } from "react-icons/im";
import { useContext } from 'react';
import DataContext from './Context/DataContext.js';

const Home = () => {
  const {searchResults,isLoading,axiosError} = useContext(DataContext)
  return (
    <main className="home">
      {isLoading ? (<p className="loading"><ImSpinner9 className="spinner"/></p>) : axiosError ? (<p className="errorMessage">{axiosError}</p>) :
        searchResults.length ? (<Feed posts={searchResults} />) : (<p className="errorMessage">No posts to display</p>)}
    </main>

  )
  
}

export default Home
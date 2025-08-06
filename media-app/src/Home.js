import React from 'react'
import Feed from './Feed.js'

const Home = ({posts}) => {
  return (
    <main className="home">
      {posts.length ? (<Feed posts={posts} />) : (<p style={{
        marginTop: '2rem',
        color: 'red',
        textAlign: 'center',
        fontSize: '2rem',
      }}>No posts to display</p>)}
    </main>

  )
  
}

export default Home
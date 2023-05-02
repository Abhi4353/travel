import React from 'react'
import Layout from '../layouts/Layout'
import Crousel from '../components/Crousel'
import Findtour from '../components/Findtour'
import PopularPlaces from '../components/PopularPlaces'
import Subscribe from '../components/Subscribe'
import PopularDestination from '../components/PopularDestination'
import Video from '../components/Video'
import Features from '../components/Features'

const Home = () => {
  return (
    <div>
      <Layout>
        <Crousel />
        <Findtour />
        <PopularPlaces />
        <Subscribe />
        <PopularDestination/>
        <Video/>
        <Features/>
      </Layout>
    </div>
  )
}

export default Home

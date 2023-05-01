import React from 'react'
import Layout from '../layouts/Layout'
import Crousel from '../components/Crousel'
import Findtour from '../components/Findtour'
import PopularPlaces from '../components/PopularPlaces'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <div>
      <Layout>
        <Crousel />
        <Findtour />
        <PopularPlaces />
        <Subscribe />
      </Layout>
    </div>
  )
}

export default Home

import React from 'react'
import Header from '../Header/Header'
import Banner from '../WashingMachine/Banner'
import Banner2 from '../Banner2/Banner2'
import Banner3 from '../Banner3/Banner3'
import Banner4 from '../LED_TV Banner/Banner4'
import MixerGrinder from '../MixerGrinder/MixerGrinder'
import YouTube from '../YouTube/YouTube'

const Home = () => {
  return (
    <div>
        <Header />  
        <Banner />
        <Banner2 />
        <Banner3 />
        <Banner4 />
        <MixerGrinder />
        <YouTube />
    </div>
  )
}

export default Home
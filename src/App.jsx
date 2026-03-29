import React, { Suspense } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import View from './components/view/View'
import PremiumSection from './components/PremiumSection/PremiumSection'

const dataLoad = async()=> {
  const res =await fetch('/data.json');
  return res.json();
}

const App = () => {
  const dataCardLoad= dataLoad()
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <View></View>
      <Suspense fallback={<h1>Loding.....</h1>}>
        <PremiumSection dataCardLoad={dataCardLoad}></PremiumSection>
      </Suspense>
    </div>
  )
}

export default App

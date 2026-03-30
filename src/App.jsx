import React, { Suspense, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import View from './components/view/View'
import PremiumSection from './components/PremiumSection/PremiumSection'
import AccountStart from './components/accountStart/AccountStart'
import Subscription from './components/subscription/Subscription'
import ExploreSection from './components/exploreSection/ExploreSection'
import Footer from './components/footer/Footer'
 import { ToastContainer} from 'react-toastify';


const dataLoad = async()=> {
  const res =await fetch('/data.json');
  return res.json();
}

const App = () => {
  const [card, setCard]=useState([]);
  
  const dataCardLoad= dataLoad()
  return (
    <div>
      <Navbar card={card}></Navbar>
      <Hero></Hero>
      <View></View>
      <Suspense fallback={<h1>Loding.....</h1>}>
        <PremiumSection dataCardLoad={dataCardLoad} card={card} setCard={setCard}></PremiumSection>
      </Suspense>
      <AccountStart></AccountStart>
      <Subscription></Subscription>
      <ExploreSection></ExploreSection>
      <Footer></Footer>


      <ToastContainer />
    </div>
  )
}

export default App

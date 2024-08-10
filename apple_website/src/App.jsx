import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighLights from './components/HighLights';
import Model from './components/Model';
import * as Sentry from "@sentry/react";
import Features from './components/Feature';

const App = () => {
  
  return (
    <>
      <main className='bg-black'>
        <Navbar/>
        <Hero/>
        <HighLights/>
        <Model/>
        <Features/>
      </main>
    </>
  )
}

export default Sentry.withProfiler(App);

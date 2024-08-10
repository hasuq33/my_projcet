import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GsapTo from './pages/GsapTo.jsx';
import GsapFrom from './pages/GsapFrom.jsx';
import GSapFromTo from './pages/GsapFromTo.jsx';
import GsapTimeline from './pages/GsapTimeline.jsx';
import GsapStagger from './pages/GsapStagger.jsx';
import GsapScrollTrigger from './pages/GsapScrollTrigger.jsx';
import GsapText from './pages/GsapText.jsx';

const router = createBrowserRouter([
  {
    path:'/', 
    element: <App/>,
  },{
    path:'/GsapTo', 
    element: <GsapTo/>,
  },{
    path:'/GsapFrom', 
    element: <GsapFrom/>
  },{
    path:'/GsapFromTo', 
    element: <GSapFromTo/>
  },{
    path:'/GsapTimeline', 
    element: <GsapTimeline/>
  },{
    path:'/GsapStagger', 
    element:<GsapStagger/>
  },{
    path:'/GsapScrollTrigger',
    element: <GsapScrollTrigger/>,
  },{
    path:'/GsapText',
    element: <GsapText/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

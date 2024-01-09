
import "ol/ol.css";

import { MapComponent,useMap } from './index'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


const Test = () => {
  const map =useMap()
  console.log('first',map)
  return (
    <div>Test</div>
  )
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <MapComponent id='map' className='map'>
      <Test/>
    </MapComponent>
  </>,
)






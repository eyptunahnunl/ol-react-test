# React + Openlayers + MapViewer TEST

Bu proje openlayers siniflarinin react paket yapisina donusturulmesi icin on arastirma icin yapilmistir. 


## Install

```js
yarn add ol-react-test
npm install ol-react-test 
```

## Usage

```js
import { MapComponent } from 'ol-react-test'
const App = () => {
  return (
      <MapComponent id={'map'} className="map">
        
      </MapComponent>
  )
}
```

Her seviyede map objesini donduren useMap().
```
const map = useMap()
```


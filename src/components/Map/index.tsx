import { View } from "ol";
import OSM from 'ol/source/OSM.js';
import TileLayer from "ol/layer/Tile";
import Map from 'ol/Map.js';

import { fromLonLat } from "ol/proj";
import { ReactNode, useCallback } from "react";
interface IProps {
  children?: ReactNode;
  zoom?: number;
  center?: number[];
}

const MapComponent = ({ children, ...passThroughProps }: IProps) => {
  const defaultMap = () => {
 

    const center = fromLonLat([35.240741, 38.9573415]);

    const options = {
      view: new View({
        zoom: 7,
        center,
        projection: 'EPSG:3857',
        constrainOnlyCenter: true,
        minZoom: 2.6,
        maxZoom: 20,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      controls: [],
      overlays: [],
    };
    const mapObject = new Map(options);

    return mapObject;
  };

  const map = defaultMap();
  const refCallback = useCallback(
    (ref: HTMLDivElement) => {
      if (!map) {
        return;
      }
      if (ref === null) {
        map.setTarget(undefined);
      } else {
        map.setTarget(ref);
      }
    },
    [map]
  );
  return (
    <div
    id="map"
    ref={refCallback}
    className="map"
    role="presentation"
    // tabIndex={0}
    {...passThroughProps}
  >
    
    {children}
  </div>
  )
}

export default MapComponent
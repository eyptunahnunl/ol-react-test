import { View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import { ReactNode, useCallback } from "react";
import OSM from "ol/source/OSM.js";
import Map from "ol/Map.js";
import MapContext from "context/MapContext";

interface MapComponentProps {
  childeren?: ReactNode;
  id: any;
  className?: any;
}
const MapComponent = (props: MapComponentProps) => {
  const defaultMap = () => {
    const center = fromLonLat([35.240741, 38.9573415]);
    const options = {
      view: new View({
        zoom: 7,
        center,
        projection: "EPSG:3857",
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
    [map],
  );
  return (
    <MapContext.Provider value={map}>
      <div
        id={props.id}
        ref={refCallback}
        className={props.className}
        role="presentation"
      >
        {props.childeren}
      </div>
    </MapContext.Provider>
  );
};

export default MapComponent;

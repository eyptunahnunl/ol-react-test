import { useContext } from "react";

import { Map } from "ol";
import MapContext from "context/MapContext";

export const useMap = (): Map | null => {
  return useContext(MapContext);
};

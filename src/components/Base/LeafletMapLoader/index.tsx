import "@/assets/css/vendors/leaflet.css";
import { createRef, useEffect } from "react";
import { initializeMap, MapConfig, LeafletElement } from "./leaflet-map-loader";
import clsx from "clsx";

export type Init = (
  callback: (
    mapConfig: MapConfig
  ) => ReturnType<typeof initializeMap> | undefined
) => void;

interface LeafletMapLoaderProps extends React.ComponentPropsWithoutRef<"div"> {
  init: Init;
  darkMode?: boolean;
}

function LeafletMapLoader({
  init = () => {},
  darkMode,
  className,
}: LeafletMapLoaderProps) {
  const mapRef = createRef<LeafletElement>();

  useEffect(() => {
    init((mapConfig) => {
      if (mapRef.current) {
        return initializeMap(mapRef.current, mapConfig);
      }
    });
  }, [init]);

  return (
    <div
      ref={mapRef}
      className={clsx([
        !darkMode && "[&_.leaflet-tile-pane]:saturate-[.3]",
        darkMode &&
          "[&_.leaflet-tile-pane]:grayscale [&_.leaflet-tile-pane]:invert [&_.leaflet-tile-pane]:brightness-90 [&_.leaflet-tile-pane]:hue-rotate-15",
        className,
      ])}
    ></div>
  );
}

export default LeafletMapLoader;

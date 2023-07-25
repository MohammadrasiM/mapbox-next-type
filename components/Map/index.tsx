"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import CreateMarker from "./CreateMarker";
import getAddress from "./GetAddress";
import { debounce, isEmpty } from "lodash";
type mapType = {
  setStart: (e: number[]) => void | null;
  setCenterAddressLoading: (e: boolean) => void | null;
  setCenterAddress: (e: string) => void | null;
  setEnds: (e: (x: number[][]) => number[][]) => void | null;
  map: React.MutableRefObject<any>;
  start: number[];
  ends: number[][];
};

const Map = ({ map, setStart, setEnds, start, ends, setCenterAddress, setCenterAddressLoading }: mapType) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  // const map = useRef<any>(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [isMoving, setIsMoving] = useState(false);
  const [zoom] = useState(8);
  const [API_KEY] = useState("46dU95buENbQHJaft75d");
  const [center, setCenter] = useState([lng, lat]);

  const checkTyping = useCallback(
    debounce(() => {
      setIsMoving(false);
    }, 1000),
    []
  );

  useMemo(() => {
    if (center[0] && !isMoving) {
      setTimeout(
        () =>
          getAddress({
            latitude: center[1],
            longitude: center[0],
            setCenterAddress: setCenterAddress,
            setCenterAddressLoading: setCenterAddressLoading,
          }),
        1000
      );
    }
  }, [center, isMoving]);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current || "",
      // style: `https://api.maptiler.com/maps/openstreetmap/style.json?key=46dU95buENbQHJaft75d`,
      style: `https://api.maptiler.com/maps/streets/style.json?key=46dU95buENbQHJaft75d`,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    map.current.on("move", () => {
      setCenter([map.current.getCenter().lng, map.current.getCenter().lat]);
      setIsMoving(true);
      checkTyping();
    });
  }, [API_KEY, lng, lat, zoom, map, mapContainer]);

  return (
    <div className="map-wrap relative">
      <div ref={mapContainer} id="map" className="map w-screen h-screen" />
      {ends?.length < 1 ? (
        <img
          id={"center_location"}
          className="fixed w-8 cursor-pointer aspect-square top-1/2 left-1/2 "
          style={{ transform: "translate(-50%,-50%)" }}
          src="/assets/icons/sidebar/location.svg"
          onClick={() => {
            const el = CreateMarker({
              url: start[0] != 0 ? "/assets/icons/orders/end.svg" : "/assets/icons/orders/start.svg",
            });
            if (start[0] != 0) {
              setEnds((e: number[][]) => [...e, [center[0], center[1]]]);
            } else {
              setStart([center[0], center[1]]);
            }
            new maplibregl.Marker({ element: el, anchor: "center" })
              .setLngLat([center[0], center[1]])
              .addTo(map.current);
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;

"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import Map from "@/components/Map";
import dynamic from "next/dynamic.js";
import Loading from "@/components/shared/Loading/Loading";
import Button from "@/components/shared/Button/Button";
// import MapPopUp from "@/components/Map/MapPopUp";

// import { dehydrate } from "@tanstack/react-query";
// import getQueryClient from "@/api_services/common/get-query-client";

export interface AllPropType {
  banners_up: { image_location: string; id: number }[];
  fixed_banners?: { image_location: string; link: string; category_id: number; title: string };
}

interface reduxType {
  params: {
    zipCode: string;
  };
}
export default function Home({
  params,
  searchParams,
}: {
  params: { lang: "en" };
  searchParams: { categories: string };
}) {
  const MapPopUp = useMemo(
    () =>
      dynamic(() => import("@/components/Map/MapPopUp"), {
        ssr: false,
      }),
    []
  );

  const map = useRef<any>(null);
  const [start, setStart] = useState([0, 0]);
  const [ends, setEnds] = useState<number[][]>([]);
  const [centerAddress, setCenterAddress] = useState("");
  const [centerAddressLoading, setCenterAddressLoading] = useState(false);
  const handExitComplete = () => {
    if (typeof window !== "undefined") {
      // Get the hash from the url

      // Use the hash to find the first element with that id
      const element = document.getElementById("scrolly");

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  };

  return (
    <div className="  !overflow-visible">
      <Map
        map={map}
        start={start}
        ends={ends}
        setStart={setStart}
        setEnds={setEnds}
        setCenterAddress={setCenterAddress}
        setCenterAddressLoading={setCenterAddressLoading}
      />
      <MapPopUp status={10} handExitComplete={handExitComplete}>
        <div id="scrolly" className="w-full h-full  rtl dark:bg-zinc-700 flex flex-col p-4 gap-4 ">
          <div className="items-center flex flex-col gap-2">
            <div className="flex w-full rounded-2xl p-4 bg-slate-50  items-center justify-start ">
              {centerAddressLoading ? <Loading /> : <p className="">{centerAddress}</p>}
            </div>
            {ends?.length < 1 ? (
              <Button
                title={start[0] == 0 ? "start point" : "end point"}
                width="w-full"
                containerClass="w-full"
                onClick={() => document.getElementById("center_location")?.click()}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </MapPopUp>
    </div>
  );
}

"use client";
import dynamic from "next/dynamic";

import { GlobeConfig } from "@/components/ui/globe";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

const ATL_LAT = 33.749;
const ATL_LNG = -84.388;

export const Globe = () => {
  const globeConfig: GlobeConfig = {
    pointSize: 4,
    globeColor: "#000000",
    showAtmosphere: false,
    atmosphereColor: "#e6f7f3",
    atmosphereAltitude: 0.1,
    emissive: "#001813",
    emissiveIntensity: 1,
    shininess: 0,
    polygonColor: "rgba(255,255,255,1)",
    ambientLight: "#e6f7f3",
    directionalLeftLight: "#e6f7f3",
    directionalTopLight: "#e6f7f3",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: ATL_LAT, lng: ATL_LNG },
    autoRotate: false,
    autoRotateSpeed: 0,
    disableVerticalRotation: true,
  };

  return (
    <div className="size-full aspect-square">
      <World
        data={[
          {
            order: 1,
            startLat: ATL_LAT,
            startLng: ATL_LNG,
            endLat: ATL_LAT,
            endLng: ATL_LNG,
            arcAlt: 0.1,
            color: "#e6f7f3",
          },
        ]}
        globeConfig={globeConfig}
      />
    </div>
  );
};

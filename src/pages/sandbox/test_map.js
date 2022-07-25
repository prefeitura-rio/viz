import { useState } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";

export default function TestMap() {
  const [location, setLocation] = useState({
    desktop: {
      center: {
        lat: -22.9121089,
        lon: -43.2301558
      },
      zoom: 15,
      bearing: 0,
      pitch: 0,
      duration: 4000
    },
    mobile: {
      center: {
        lat: -22.9121089,
        lon: -43.2301558
      },
      zoom: 15,
      bearing: 0,
      pitch: 0,
      duration: 4000
    }
  });

  const setPosition = (position) => {
    setLocation({
      ...location,
      desktop: {
        ...position
      },
      mobile: {
        ...position
      }
    });
    console.log(location);
  };

  const setPositionOne = () => {
    setPosition({
      center: { lon: -43.32934, lat: -22.87653 },
      zoom: 10.36,
      pitch: 0.0,
      bearing: 0.0
    });
  };

  const setPositionTwo = () => {
    setPosition({
      center: { lon: -43.20881, lat: -22.90198 },
      zoom: 12.74,
      pitch: 0.0,
      bearing: 0.0
    });
  };

  const setPositionThree = () => {
    setPosition({
      center: { lon: -43.39513, lat: -22.97986 },
      zoom: 12.5,
      pitch: 0.0,
      bearing: 0.0
    });
  };

  return (
    <div>
      <button onClick={setPositionOne}>Pos1</button>
      <button onClick={setPositionTwo}>Pos2</button>
      <button onClick={setPositionThree}>Pos3</button>
      <MultilayerMap
        interactive={true}
        scrollZoom={true}
        mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        mapStyle="mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b"
        layers={[
          {
            layerType: "mapbox-style",
            layer: {
              id: "linhasantigas"
            }
          }
        ]}
        location={location}
      />
    </div>
  );
}

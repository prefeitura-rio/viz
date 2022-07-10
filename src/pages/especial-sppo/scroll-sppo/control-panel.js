import * as React from "react";

const CITIES = [
  { name: "sp", lat: -23.5691, lon: -46.6474 },
  { name: " rj", lat: -22.9121089, lon: -43.2301558 },
];

function ControlPanel(props) {
  return (
    <div>
      {CITIES.filter((city) => city.name === "sp").map((city, index) => (
        <div key={`btn-${index}`} className="input">
          <input
            id={`city-${index}`}
            defaultChecked={city.name === "sp"}
            onClick={() => props.onSelectCity(city)}
          />
          <label htmlFor={`city-${index}`}>{city.name}</label>
        </div>
      ))}
    </div>
  );
}

export default React.memo(ControlPanel);

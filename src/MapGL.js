import React, { useState, useEffect } from "react";
import { Map } from 'react-map-gl';
import mapboxgl from 'mapbox-gl'; // do not remove this line
import DeckGL from "@deck.gl/react";
import { TripsLayer } from "@deck.gl/geo-layers";


// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


// Source data CSV
const trips = require("./trips.json")
const MAPBOX_API_TOKEN = "pk.eyJ1IjoiZDExNjYyNiIsImEiOiJjazM1ODVoZ3MxNjJoM21vcWMwZmhycHVvIn0.7hxPP_9w7z8QAVc2nStP6w";
const animationSpeed = 3
const loopLength = 1800

export default function MapGL() {

    const [time, setTime] = useState(0);
    const [animation] = useState({});

    useEffect(() => {
        const animate = () => {
            setTime(t => (t + animationSpeed) % loopLength);
            animation.id = window.requestAnimationFrame(animate);
        };
        animation.id = window.requestAnimationFrame(animate);
        return () => window.cancelAnimationFrame(animation.id);
    }, [animation]);



    const layers = [
        new TripsLayer({
            id: 'trips',
            data: trips,
            getPath: d => d.path,
            getTimestamps: d => d.timestamps,
            getColor: [253, 128, 93],
            widthMinPixels: 5,
            fadeTrail: true,
            currentTime: time,
            opacity: 1,
            rounded: true,
            trailLength:600,
            shadowEnabled: false
        }),
    ];
    
    
    const INITIAL_VIEW_STATE = {
        longitude: -43.17785,
        latitude: -22.9561,
        zoom: 11,
        pitch: 0,
        bearing: 0
    };
    
    return (
        <div>
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={layers}
            >
            <Map
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxAccessToken={MAPBOX_API_TOKEN}
            />
            </DeckGL>
        </div>
    );
}





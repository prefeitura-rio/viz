import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { lineString } from '@turf/helpers';
import along from '@turf/along';
import length from '@turf/length';
import bearing from '@turf/bearing'; // Importing bearing from the correct module
import 'mapbox-gl/dist/mapbox-gl.css';
import pinRouteGeojson from './pinRouteGeojson.json';
import carro from './images/carro.png';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w';

const MapboxElevationApp = () => {
  const mapContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        zoom: 14,
        center: [-43.36105513587367, -22.864784742263154],
        pitch: 50,
        bearing: 150,
        style: 'mapbox://styles/escritoriodedados/clzu707th00ro01pc69du960f',
        interactive: false,
        hash: false,
      });

      await map.once('style.load');

      map.setFog({});

      const pinRoute = pinRouteGeojson.features[0].geometry.coordinates;

      const markerElement = document.createElement('div');
      markerElement.style.backgroundImage = `url(${carro})`;
      markerElement.style.width = '20px';
      markerElement.style.height = '50px';
      markerElement.style.backgroundSize = 'contain';
      markerElement.style.backgroundRepeat = 'no-repeat';

      const marker = new mapboxgl.Marker({
        element: markerElement,
        draggable: false,
        pitchAlignment: '90',
        rotationAlignment: 'map',
      })
        .setLngLat(pinRoute[0])
        .addTo(map);

      map.addSource('line', {
        type: 'geojson',
        lineMetrics: true,
        data: pinRouteGeojson,
      });

      map.addLayer({
        type: 'line',
        source: 'line',
        id: 'line',
        paint: {
          'line-color': 'rgba(0,0,0,0)',
          'line-width': 5,
        },
        layout: {
          'line-cap': 'round',
          'line-join': 'round',
        },
      });

      await map.once('idle');
      const path = lineString(pinRoute);
      const pathDistance = length(path);

      const updateAnimation = () => {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const containerHeight = containerRef.current.offsetHeight;
        const scrollProgress = (window.innerHeight - 500 - containerTop) / containerHeight;

        const alongPath = along(path, pathDistance * scrollProgress).geometry.coordinates;
        const nextAlongPath = along(path, pathDistance * (scrollProgress + 0.0001)).geometry.coordinates;

        const lngLat = {
          lng: alongPath[0],
          lat: alongPath[1],
        };

        const elevation = Math.floor(
          map.queryTerrainElevation(lngLat, { exaggerated: false })
        );

        // Calculate the bearing between the current position and the next position
        const markerBearing = bearing(alongPath, nextAlongPath); // Adjusted bearing

        marker.setLngLat(lngLat);
        marker.setRotation(markerBearing);

        map.setPaintProperty('line', 'line-gradient', [
          'step',
          ['line-progress'],
          '#00BFFF',
          scrollProgress,
          'rgba(255, 0, 0, 0)',
        ]);

        const rotation = 150 - scrollProgress * 40.0;
        map.setBearing(rotation % 360);

        map.easeTo({
          center: lngLat,
          bearing: 108.625,
          duration: 0,
          pitch: 50,
        });

        animationFrameRef.current = requestAnimationFrame(updateAnimation);
      };

      window.addEventListener('scroll', updateAnimation);

      return () => {
        window.removeEventListener('scroll', updateAnimation);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    })();
  }, []);

  return (
    <div ref={containerRef}>
      <div ref={mapContainerRef} style={{ position: 'fixed', top: 0, bottom: 0, width: '100%' }} />
      <div style={{ height: '1000vh' }}>
        {/* animation on scroll */}
      </div>
    </div>
  );
};

export default MapboxElevationApp;

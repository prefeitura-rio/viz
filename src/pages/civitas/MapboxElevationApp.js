import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { lineString } from '@turf/helpers';
import along from '@turf/along';
import length from '@turf/length';
import 'mapbox-gl/dist/mapbox-gl.css';
import pinRouteGeojson from './pinRouteGeojson.json';
mapboxgl.accessToken = 'pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w';

const MapboxElevationApp = () => {
  const mapContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const containerRef = useRef(null); // Ref for the 200vh container

  useEffect(() => {
    (async () => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        zoom: 14,
        center: [-43.35808542573136, -22.86497771755093],
        pitch: 50,
        bearing: 150,
        style: 'mapbox://styles/escritoriodedados/clzu707th00ro01pc69du960f',
        interactive: false,
        hash: false,
      });

      await map.once('style.load');

      map.setFog({});

      const pinRoute = pinRouteGeojson.features[0].geometry.coordinates;

      const marker = new mapboxgl.Marker({
        color: 'red',
        scale: 0.8,
        draggable: false,
        pitchAlignment: 'auto',
        rotationAlignment: 'auto',
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
        const lngLat = {
          lng: alongPath[0],
          lat: alongPath[1],
        };

        const elevation = Math.floor(
          map.queryTerrainElevation(lngLat, { exaggerated: false })
        );

        marker.setLngLat(lngLat);

        map.setPaintProperty('line', 'line-gradient', [
          'step',
          ['line-progress'],
          'red',
          scrollProgress,
          'rgba(255, 0, 0, 0)',
        ]);

        const rotation = 150 - scrollProgress * 40.0;
        map.setBearing(rotation % 360);

        map.easeTo({
          center: lngLat,
          bearing: rotation % 360,
          duration: 0,
          pitch: 50
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

import React, { useRef, useEffect, FunctionComponent } from 'react';
import Heatmap from 'heatmap.js';

interface HeatmapProps {
  data: {
    x: number;
    y: number;
    value: number;
  }[];
  width?: number;
  height?: number;
}

const HeatmapComponent: FunctionComponent<HeatmapProps> = ({
  data,
  width = 800,
  height = 600,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const heatmapInstance = Heatmap.create({
        container: containerRef.current,
        maxOpacity: 0.6,
        radius: 10,
        blur: .90,
        backgroundColor: 'rgba(228,228,255, 0.1)'
      });

      heatmapInstance.setData({
        max: 1,
        min: 0,
        data,
      });
    }
  }, [containerRef, data]);

  return (
    <div
      ref={containerRef}
      style={{ 
        width: `${width}px`,
        height: `${height}px`, 
        backgroundImage: "url('/test.png')",
        position: 'relative' 
      }}
    ></div>
  );
};

export default HeatmapComponent;
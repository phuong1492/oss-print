import React, { FunctionComponent, useState, useEffect } from 'react';
import HeatmapComponent from '../components/Heatmap';
import { fetchDataFromAPI } from '../services/heatmapApiService';

const HeatmapPage: FunctionComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchDataFromAPI("opsdata01023_mvsqlalylg_click_PC");
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Heatmap</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <HeatmapComponent data={data} width={1920} height={4665} />
      </div>
      
    </div>
  );
};

export default HeatmapPage;
import React from "react";
import "./LineChart.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position:'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };


function LineChart(props)
{
    return <div className="chart">
            <Line options={options} data={props.data} />
        </div>
}

export default LineChart
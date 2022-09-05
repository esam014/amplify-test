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

const labels = ['January', 'February', 'March'];

export const data = {
    labels,
    datasets: [
        {
        label: 'Dataset 1',
        data: [100, 20, 50],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'Dataset 2',
        data: [72, 63, 99],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function LineChart(props)
{
    return <div className="chart">
            <Line options={options} data={data} />
        </div>
}

export default LineChart
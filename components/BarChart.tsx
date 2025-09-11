'use client';

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Record {
  date: string;
  amount: number; // Hours slept
}

const BarChart = ({ records }: { records: Record[] }) => {
  const [colors, setColors] = useState({
    foreground: '#2c3e50',
    muted: '#7f8c8d',
    border: '#e0e0e0',
  });

  // Read CSS variables for dark mode support
  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    setColors({
      foreground: root.getPropertyValue('--foreground').trim() || '#2c3e50',
      muted: root.getPropertyValue('--muted-foreground').trim() || '#7f8c8d',
      border: root.getPropertyValue('--border').trim() || '#e0e0e0',
    });
  }, []);

  const data = {
    labels: records.map((record) =>
      new Date(record.date).toLocaleDateString()
    ),
    datasets: [
      {
        data: records.map((record) => record.amount),
        backgroundColor: records.map((record) =>
          record.amount < 7
            ? 'rgba(255, 99, 132, 0.2)' // Red semi-transparent for <7
            : 'rgba(75, 192, 192, 0.2)' // Green semi-transparent for >=7
        ),
        borderColor: records.map((record) =>
          record.amount < 7 ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)'
        ),
        borderWidth: 1,
        borderRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          font: {
            size: 14,
            weight: 'bold' as const,
          },
          color: colors.foreground,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: colors.muted,
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Hours Slept',
          font: {
            size: 16,
            weight: 'bold' as const,
          },
          color: colors.foreground,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: colors.muted,
        },
        grid: {
          color: colors.border,
        },
        suggestedMin: 4,
        suggestedMax: 10,
        beginAtZero: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
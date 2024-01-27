/* eslint-disable react/jsx-key */
"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
];

const yAxisTicks = [0, 50000, 40000, 30000, 20000, 10000, 5000];

// Use a single color with varying opacities for all bars except Jun
const faintColor = "rgba(52, 202, 165, 0.15)";
const juneColor = "rgba(52, 202, 165, 4)";
const barColors = Array.from({ length: 12 }, (_, index) =>
  index === 5 ? juneColor : faintColor
);


export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={450} className="text-foreground">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={14}
          tickCount={data.length} // Set tickCount to the length of the data array
          tickLine={false} // Remove tick lines if needed
          axisLine={false} // Remove axis line if needed
        />
        <YAxis
          fontSize={14}
          tickCount={yAxisTicks.length} // Set tickCount to the length of yAxisTicks
          tickLine={false} // Remove tick lines
          axisLine={false} // Remove axis lines
          tickFormatter={(value) => {
            switch (value) {
              case 0:
                return "0";
              case 50000:
                return "50.000";
              case 40000:
                return "40.000";
              case 30000:
                return "30.000";
              case 20000:
                return "20.000";
              case 10000:
                return "10.000";
              case 5000:
                return "5.000";
              default:
                return value.toLocaleString();
            }
          }}
        />
        <Tooltip
          cursor={{ stroke: "none" }}
          contentStyle={{ background: "#000000", border: "none" }}
          label={{ fill: "#fffffff" }}
          itemStyle={{ color: "#ffffff" }}
        />
        <defs>
          {barColors.map((color, index) => (
            <linearGradient
              key={`colorUv${index}`}
              id={`colorUv${index}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              {index === 5 ? (
                <>
                  <stop offset="0" stopColor={juneColor} />
                  <stop offset="1" stopColor={faintColor} />
                </>
              ) : (
                <>
                  <stop offset="0" stopColor={color} />
                  <stop offset="1" stopColor={color} />
                </>
              )}
            </linearGradient>
          ))}
        </defs>
        <Bar
          dataKey="total"
          className="bar"
          barSize={30}
          radius={[40, 40, 0, 0]}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`url(#colorUv${index})`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

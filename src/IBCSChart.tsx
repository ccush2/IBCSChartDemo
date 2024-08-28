import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { DataPoint } from "./types";
import "./IBCSChart.css";

interface IBCSChartProps {
  data: DataPoint[];
  title: string;
  subtitle?: string;
}

const CustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <div className="custom-legend-container">
      <ul className="custom-legend">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`}>
            <svg width="14" height="14">
              {entry.dataKey === "actual" ? (
                <rect width="14" height="14" fill="#000000" />
              ) : (
                <rect
                  width="14"
                  height="14"
                  fill="#FFFFFF"
                  stroke="#000000"
                  strokeWidth="1"
                />
              )}
            </svg>
            <span>{entry.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const IBCSChart: React.FC<IBCSChartProps> = ({ data, title, subtitle }) => {
  return (
    <div className="ibcs-chart">
      <h2 className="ibcs-chart-title">{title}</h2>
      {subtitle && <h3 className="ibcs-chart-subtitle">{subtitle}</h3>}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis
            type="number"
            domain={[0, 1500]}
            ticks={[0, 500, 1000, 1500]}
            tickFormatter={(value: number) => value.toString()}
          />
          <Tooltip formatter={(value: number) => [`$${value}k`, "Sales"]} />
          <Legend content={<CustomLegend />} />
          <Bar dataKey="actual" fill="#000000" name="Actual" />
          <Bar
            dataKey="budget"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth={1}
            name="Budget"
          />
          <ReferenceLine y={0} stroke="#000000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IBCSChart;

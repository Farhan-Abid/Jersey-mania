import React from 'react';
import {LineChart,Line,YAxis,XAxis,BarChart,CartesianGrid,Tooltip,Legend,Bar} from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <h2>Month Wise sell</h2>
        <LineChart width={800} height={500} data={data}>
            <Line dataKey={'investment'}></Line>
            <Line dataKey={'revenue'}></Line>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>

        </LineChart>
        <br />
        <h2>Investment vs Revenue</h2>
        <BarChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
        </div>
         

    );
};

export default MyLineChart;
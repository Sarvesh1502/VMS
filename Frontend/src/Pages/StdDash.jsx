/* eslint-disable no-unused-vars */
import React from 'react';
import './StdDash.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const attendanceData = [
  { name: 'Jan', hours: 10 },
  { name: 'Feb', hours: 15 },
  { name: 'Mar', hours: 12 },
  { name: 'Apr', hours: 20 },
  { name: 'May', hours: 18 },
];

const eventParticipationData = [
  { name: 'Applied', value: 30 },
  { name: 'Selected', value: 15 },
  { name: 'Attended', value: 25 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

function StdDash() {
  return (
    <div className="std-dash-container">
      <Stats />
      <Charts />
    </div>
  );
}

function Stats() {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>Total Hours Volunteered</h3>
        <p>75 Hours</p>
      </div>
      <div className="stat-card">
        <h3>Total Events Applied</h3>
        <p>12</p>
      </div>
      <div className="stat-card">
        <h3>Events Selected</h3>
        <p>8</p>
      </div>
    </div>
  );
}

function Charts() {
  return (
    <div className="charts-container">
      <div className="chart-card">
        <h3>Monthly Attendance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="hours" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-card">
        <h3>Event Participation</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={eventParticipationData} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value">
              {eventParticipationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StdDash;

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Progress() {
  // fake data
  const data = [
    { date: "2025-09-01", volume: 12000 },
    { date: "2025-09-05", volume: 15000 },
    { date: "2025-09-10", volume: 14000 },
    { date: "2025-09-15", volume: 16000 },
    { date: "2025-09-20", volume: 15500 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Progress: Volume Over Time</h2>
      <ResponsiveContainer width="50%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="volume" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

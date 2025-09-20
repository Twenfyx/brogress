import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { lift: "Bench", weight: 100 },
  { lift: "Squat", weight: 140 },
  { lift: "Deadlift", weight: 200 },
];

export default function LiftsChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md ">
      <h3 className="text-lg font-semibold mb-4">Big 3 Comparison</h3>
      <ResponsiveContainer width="100%" height={250}> 
        <BarChart data={data}>
          <XAxis dataKey="lift" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="weight" fill="#4F46E5" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

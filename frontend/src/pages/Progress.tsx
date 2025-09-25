import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, Legend,
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

const data2 = [
  {
    subject: 'Chest',
    A: 110,
    B: 120,
    fullMark: 150,
  },
  {
    subject: 'Triceps',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Quads',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Biceps',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Back',
    A: 100,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Shoulders',
    A: 95,
    B: 85,
    fullMark: 150,
  },
  { subject: 'Hamstrings', A: 45, B: 85, fullMark: 150 },

  { subject: 'Forearms', A: 25, B: 85, fullMark: 150 },
  { subject: 'Abs', A: 60, B: 85, fullMark: 150 },
  
];


  const workoutsPerWeek = [
    { week: "Week 1", workouts: 3 },
    { week: "Week 2", workouts: 4 },
    { week: "Week 3", workouts: 5 },
    { week: "Week 4", workouts: 2 },
    { week: "Week 5", workouts: 4 },
  ];

  const prData = [
    { date: "2025-07-28", bench: 105, squat: 145, deadlift: 185 },
    { date: "2025-08-15", bench: 105, squat: 145, deadlift: 185 },
    { date: "2025-09-01", bench: 100, squat: 140, deadlift: 180 },
    { date: "2025-09-20", bench: 120, squat: 150, deadlift: 190 },
    { date: "2025-09-10", bench: 120, squat: 150, deadlift: 185 },
];

  const benchPR = [
    { date: "2025-09-01", weight: 100 },
    { date: "2025-09-08", weight: 102.5 },
    { date: "2025-09-15", weight: 105 },
    { date: "2025-09-22", weight: 107.5 },
    { date: "2025-09-29", weight: 110 },
  ];



  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center p-6">Your Progress</h1>


    <div className="flex">

      <div className="p-6 w-1/2">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={benchPR}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis label={{ value: "kg", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

      </div>
      
    

      <div className="p-6 w-1/2">
  <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
</div>
</div>

<div className="p-6 w-1/2">
      <h2 className="text-xl font-bold mb-4 text-center">Progress: Volume Over Time</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis /> 
          <Tooltip />
          <Line type="monotone" dataKey="volume" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="p-6 w-1/2">
     <ResponsiveContainer width="100%" height={400}>
        <LineChart data={prData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis label={{ value: "kg", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="bench" stroke="#2563eb" strokeWidth={2} name="Bench" />
          <Line type="monotone" dataKey="squat" stroke="#16a34a" strokeWidth={2} name="Squat" />
          <Line type="monotone" dataKey="deadlift" stroke="#dc2626" strokeWidth={2} name="Deadlift" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    
    </>
  );
}

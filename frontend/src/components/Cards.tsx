import LiftsChart from "./LiftsChart";

export default function Cards() {
  return (
    <main className="flex-1 p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Gym Dashboard</h1>

      {/* PR cards + Chart side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <div className="bg-white p-6 rounded-xl shadow-md mb-4">
            <h3 className="text-lg font-semibold">Bench Press PR</h3>
            <p className="text-2xl font-bold">100kg</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md mb-4">
            <h3 className="text-lg font-semibold">Squat PR</h3>
            <p className="text-2xl font-bold">140kg</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">Deadlift PR</h3>
            <p className="text-2xl font-bold">200kg</p>
          </div>
        </div>

        {/* Chart next to the PR cards */}
        <LiftsChart />
      </div>

      {/* Workouts + Weight */}
      <div className="flex gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md flex-1">
          <h3 className="text-lg font-semibold">Workouts this month:</h3>
          <p className="text-2xl font-bold">13</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex-1">
          <h3 className="text-lg font-semibold">Your weight:</h3>
          <p className="text-2xl font-bold">75kg</p>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
  {/* Split card */}
  <div className="bg-white p-6 rounded-xl shadow-md flex-1">
    <h3 className="text-lg font-semibold">Your Split</h3>
    <p className="text-2xl font-bold">Push / Pull / Legs</p>
    <p className="text-sm text-gray-500 mt-1">Next workout: Pull</p>
  </div>

  {/* Current Phase card */}
  <div className="bg-white p-6 rounded-xl shadow-md flex-1">
    <h3 className="text-lg font-semibold">Current Phase</h3>
    <p className="text-2xl font-bold">Bulking</p>
    <p className="text-sm text-gray-500 mt-1">22 days left</p>
  </div>
</div>
    </main>
  );
}

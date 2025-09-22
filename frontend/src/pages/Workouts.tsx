import { useState } from "react";

export default function Workouts() {

 const [showForm, setShowForm] = useState(false);

  return (
    <main className="flex-1 p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Workouts</h1>

    {/* style={{ display: showForm ? 'block' : 'none' }*/}

    <form action="post" className ="bg-white p-6 shadow-md mb-4 hover:shadow-lg transition rounded-lg" >
      <div>
          <label className="block font-medium" >Date </label>
          <input type="date" name="" id="" className="w-full" />
      </div>

      <div>
        <label className="block font-medium">Type:</label>
        <select name="type" id="type" className="w-full">
          <option value="push">Push</option>
          <option value="pull">Pull</option>
          <option value="legs">Legs</option>
        </select>
      </div>

       <div>
          <label className="block font-medium" >Duration </label>
          <input type="text" name="" id="" className="w-full" />
      </div>

       <div>
          <label className="block font-medium" >Note</label>
        <textarea name="note" id="note" className="w-full border" rows={3}></textarea>
      </div>
    </form>

      {/* Add Workout Button */}
      <div className="flex justify-center mb-6">
        <button onClick={() => setShowForm(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          + Add Workout
        </button>
      </div>

  <div className="bg-white p-6 rounded-xl shadow-md mb-4 hover:shadow-lg transition cursor-pointer">
  {/* Date */}
  <h3 className="text-sm text-gray-500 mb-2">09/20/2025</h3>

  {/* Header row */}
  <div className="flex justify-between items-center mb-3">
    <p className="text-xl font-bold text-gray-800">Push Day</p>
    <button className="bg-red-500 text-white text-sm px-3 py-1 rounded-md hover:bg-red-600 transition">
      Delete
    </button>
  </div>

  {/* Extra info */}
  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
    <p><span className="font-semibold">Exercises:</span> 6</p>
    <p><span className="font-semibold">Sets:</span> 18</p>
    <p><span className="font-semibold">Volume:</span> 14,500 kg</p>
    <p><span className="font-semibold">Duration:</span> 1h 20m</p>
  </div>
</div>

{/* Pull */}
  <div className="bg-white p-6 rounded-xl shadow-md mb-4 hover:shadow-lg transition cursor-pointer">
  {/* Date */}
  <h3 className="text-sm text-gray-500 mb-2">09/12/2025</h3>

  {/* Header row */}
  <div className="flex justify-between items-center mb-3">
    <p className="text-xl font-bold text-gray-800">Pull Day</p>
    <button className="bg-red-500 text-white text-sm px-3 py-1 rounded-md hover:bg-red-600 transition">
      Delete
    </button>
  </div>

  {/* Extra info */}
  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
    <p><span className="font-semibold">Exercises:</span> 7</p>
    <p><span className="font-semibold">Sets:</span> 12</p>
    <p><span className="font-semibold">Volume:</span> 17,000 kg</p>
    <p><span className="font-semibold">Duration:</span> 1h 35m</p>
  </div>
</div>

  <div className="bg-white p-6 rounded-xl shadow-md mb-4 hover:shadow-lg transition cursor-pointer">
  {/* Date */}
  <h3 className="text-sm text-gray-500 mb-2">09/03/2025</h3>

  {/* Header row */}
  <div className="flex justify-between items-center mb-3">
    <p className="text-xl font-bold text-gray-800">Leg day</p>
    <button className="bg-red-500 text-white text-sm px-3 py-1 rounded-md hover:bg-red-600 transition">
      Delete
    </button>
  </div>

  {/* Extra info */}
  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
    <p><span className="font-semibold">Exercises:</span> 6</p>
    <p><span className="font-semibold">Sets:</span> 20</p>
    <p><span className="font-semibold">Volume:</span> 11,000 kg</p>
    <p><span className="font-semibold">Duration:</span> 1h 00m</p>
  </div>
</div>

    </main>
  );
}

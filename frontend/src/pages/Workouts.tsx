import { useState } from "react";
import { Form } from "react-router-dom";
import FormAddNew from "../components/FormAddNew";


export default function Workouts() {

interface WorkoutProps{
  id: number;
  date: string;
  exercises?: number;
  volume?: string;
  sets?: number;
  type?: string;
  duration?: string;
  note?: string
}


 const [showForm, setShowForm] = useState(false);
  const [workouts, setWorkouts] = useState<WorkoutProps[]>([{
    id: 1, date: "2025-09-20", type: "Push", exercises: 12, volume: "15,000" , sets: 20,  duration: "1h 20m", note: "Felt strong today!"}]);
    const [formData, setFormData] = useState({
      date: '',
      type: '',
      note: '',
      exercises: '',
      volume: '',
      sets: '',
      duration: ''
});


interface NewWorkoutData {
  date: string;
  type?: string;
  note?: string;
  exercises?: number;
  volume?: string;
  sets?: number;
  duration?: string;
}


const addWorkout = (newWorkout: NewWorkoutData) => {
  setWorkouts([...workouts, { id: Date.now(), ...newWorkout }]);
};

function deleteWorkout(id: number) {
  setWorkouts(workouts.filter(workout => workout.id !== id));
}


  return (
    <main className="flex-1 p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Workouts</h1>
    <div style={{ display: showForm ? 'block' : 'none' }}>
     <FormAddNew onAddWorkout={addWorkout} />
    </div>
       {/* Add Workout Button */}
      <div className="flex justify-center mb-6">
        <button onClick={() => setShowForm(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          + Add Workout
        </button>
      </div>

    {workouts.map((workout) => (
          <div className="bg-white p-6 rounded-xl shadow-md mb-4 hover:shadow-lg transition cursor-pointer">
        {/* Date */}
        <h3 className="text-sm text-gray-500 mb-2">{workout.date}</h3>

        {/* Header row */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold text-gray-800">{workout.type}</p>
          <button onClick={() => deleteWorkout(workout.id)} className="bg-red-500 text-white text-sm px-3 py-1 rounded-md hover:bg-red-600 transition">
            Delete
          </button>
        </div>

        {/* Extra info */}
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <p><span className="font-semibold">Exercises:</span> {workout.exercises}</p>
          <p><span className="font-semibold">Sets:</span> {workout.sets}</p>
          <p><span className="font-semibold">Volume:</span> {workout.volume} kg</p>
          <p><span className="font-semibold">Duration:</span> {workout.duration}</p>
        </div>
</div>
        ))}

   

  

    </main>
  );
}

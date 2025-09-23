import { useState } from "react";

interface NewWorkoutData {
  date: string;
  type?: string;
  note?: string;
  exercises?: number;
  volume?: string;
  sets?: number;
  duration?: string;
}

interface FormAddNewProps {
  onAddWorkout: (newWorkout: NewWorkoutData) => void;
}

export default function FormAddNew({ onAddWorkout }: FormAddNewProps) {
  const [formData, setFormData] = useState({
    date: "",
    type: "",
    note: "",
    exercises: "",
    volume: "",
    sets: "",
    duration: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAddWorkout({
      date: formData.date,
      type: formData.type || undefined,
      note: formData.note || undefined,
      exercises: formData.exercises ? Number(formData.exercises) : undefined,
      volume: formData.volume || undefined,
      sets: formData.sets ? Number(formData.sets) : undefined,
      duration: formData.duration || undefined,
    });

    setFormData({
      date: "",
      type: "",
      note: "",
      exercises: "",
      volume: "",
      sets: "",
      duration: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-6 hover:shadow-lg transition space-y-4 w-full"
    >
      {/* Date */}
      <div>
        <label className="block text-sm font-semibold mb-1">Date</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>

      {/* Type */}
      <div>
        <label className="block text-sm font-semibold mb-1">Type</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="">Select type</option>
          <option value="Push">Push</option>
          <option value="Pull">Pull</option>
          <option value="Legs">Legs</option>
          <option value="Upper">Upper</option>
          <option value="Lower">Lower</option>
          <option value="Full-body">Full-body</option>
        </select>
      </div>

      {/* Exercises & Sets */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Exercises</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.exercises}
            onChange={(e) =>
              setFormData({ ...formData, exercises: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Sets</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.sets}
            onChange={(e) => setFormData({ ...formData, sets: e.target.value })}
          />
        </div>
      </div>

      {/* Volume & Duration */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Volume</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.volume}
            onChange={(e) =>
              setFormData({ ...formData, volume: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Duration</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
          />
        </div>
      </div>

      {/* Note */}
      <div>
        <label className="block text-sm font-semibold mb-1">Note</label>
        <textarea
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg shadow hover:bg-green-700 transition"
      >
        Save Workout
      </button>
    </form>
  );
}

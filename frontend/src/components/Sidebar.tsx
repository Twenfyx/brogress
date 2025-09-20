import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Brogress</h2>
        <ul>
          <li className="mb-3"><Link to="/">Dashboard</Link></li>
          <li className="mb-3"><Link to="/workouts">Workouts</Link></li>
          <li className="mb-3"><Link to="/progress">Progress</Link></li>
        </ul>
      </aside>
  ) 
  }
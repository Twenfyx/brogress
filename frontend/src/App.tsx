import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Pages
import Cards from "./components/Cards"; // use this as Dashboard for now
import Workouts from "./pages/Workouts";
import Progress from "./pages/Progress";

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar always visible */}
      <Sidebar />

      {/* Main content changes with routes */}
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Cards />} />   {/* Dashboard */}
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </main>
    </div>
  );
}

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AetherisVoyage from './projects/aetheris-voyage/AetherisVoyage';
import Velorah from './projects/velorah/Velorah';
import VexVentures from './projects/vex-ventures/VexVentures';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center font-body p-8">
            <h1 className="text-4xl font-heading italic mb-8">Design Portfolio Registry</h1>
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Link to="/aetheris-voyage" className="bg-neutral-800 p-4 rounded-xl hover:bg-neutral-700 transition flex justify-between items-center">
                <span>1. Aetheris Voyage</span>
                <span className="text-sm text-neutral-400">View →</span>
              </Link>
              <Link to="/velorah" className="bg-neutral-800 p-4 rounded-xl hover:bg-neutral-700 transition flex justify-between items-center">
                <span>2. Velorah</span>
                <span className="text-sm text-neutral-400">View →</span>
              </Link>
              <Link to="/vex-ventures" className="bg-neutral-800 p-4 rounded-xl hover:bg-neutral-700 transition flex justify-between items-center">
                <span>3. VEX Ventures</span>
                <span className="text-sm text-neutral-400">View →</span>
              </Link>
            </div>
          </div>
        } />
        <Route path="/aetheris-voyage" element={<AetherisVoyage />} />
        <Route path="/velorah" element={<Velorah />} />
        <Route path="/vex-ventures" element={<VexVentures />} />
      </Routes>
    </Router>
  );
}

export default App;

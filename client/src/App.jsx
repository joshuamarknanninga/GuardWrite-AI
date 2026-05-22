import { useMemo, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NewReport from "./pages/NewReport.jsx";
import Reports from "./pages/Reports.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
  const [reports, setReports] = useState([]);
  const [latestReport, setLatestReport] = useState(null);

  const categoryCounts = useMemo(() => {
    return reports.reduce((acc, report) => {
      acc[report.category] = (acc[report.category] || 0) + 1;
      return acc;
    }, {});
  }, [reports]);

  const saveReport = (report) => {
    setReports((previous) => [report, ...previous]);
    setLatestReport(report);
  };

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Dashboard reports={reports} latestReport={latestReport} categoryCounts={categoryCounts} />} />
            <Route path="/new-report" element={<NewReport onSaveReport={saveReport} latestReport={latestReport} />} />
            <Route path="/reports" element={<Reports reports={reports} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

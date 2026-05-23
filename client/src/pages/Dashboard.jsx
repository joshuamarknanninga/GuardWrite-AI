import StatCard from "../components/StatCard.jsx";
import ReportCard from "../components/ReportCard.jsx";

const categories = ["trespass", "disturbance", "theft", "medical", "maintenance", "safety hazard", "lost property", "other"];

function Dashboard({ reports, latestReport, categoryCounts }) {
  return (
    <section className="grid">
      <header className="card">
        <h1>GuardWrite AI</h1>
        <p>Security incident report generator for professional guard documentation.</p>
      </header>

      <div className="stat-grid">
        <StatCard label="Total Reports" value={reports.length} />
        <StatCard label="Open Shift" value="Active" />
        <StatCard label="Top Category" value={Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A"} />
        <StatCard label="Last Report" value={latestReport ? "Generated" : "Pending"} />
      </div>

      <section className="card">
        <h2>Incident category cards</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category} className="report-item">
              <strong>{category}</strong>
              <p className="meta">Reports: {categoryCounts[category] || 0}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Recent reports</h2>
        <div className="report-list">
          {reports.length > 0 ? reports.slice(0, 5).map((report) => <ReportCard key={report.id} report={report} />) : <p className="meta">No reports generated yet.</p>}
        </div>
      </section>
    </section>
  );
}

export default Dashboard;

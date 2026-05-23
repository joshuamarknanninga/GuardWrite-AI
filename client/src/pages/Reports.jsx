import ReportCard from "../components/ReportCard.jsx";

function Reports({ reports }) {
  return (
    <section className="card">
      <h1>All Reports</h1>
      <div className="report-list">
        {reports.length ? reports.map((report) => <ReportCard key={report.id} report={report} />) : <p className="meta">No reports saved yet.</p>}
      </div>
    </section>
  );
}

export default Reports;

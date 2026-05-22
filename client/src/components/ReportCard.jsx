function ReportCard({ report }) {
  return (
    <article className="report-item">
      <strong>{report.title}</strong>
      <p className="meta">{report.category} · {new Date(report.createdAt).toLocaleString()}</p>
      <p>{report.body.slice(0, 170)}...</p>
    </article>
  );
}

export default ReportCard;

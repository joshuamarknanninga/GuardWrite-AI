function ReportPreview({ report }) {
  return (
    <section className="card">
      <h2>Dashboard Preview</h2>
      {report ? (
        <article>
          <h3>{report.title}</h3>
          <p className="meta">Category: {report.category} · {new Date(report.createdAt).toLocaleString()}</p>
          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{report.body}</pre>
        </article>
      ) : (
        <p className="meta">Generate a report to see formatted output here.</p>
      )}
    </section>
  );
}

export default ReportPreview;

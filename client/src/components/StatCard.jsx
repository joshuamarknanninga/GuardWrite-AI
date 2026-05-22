function StatCard({ label, value }) {
  return (
    <div className="card">
      <p className="meta">{label}</p>
      <h3>{value}</h3>
    </div>
  );
}

export default StatCard;

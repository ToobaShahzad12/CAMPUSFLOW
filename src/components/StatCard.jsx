export default function StatCard({ label, value, detail }) {
  return (
    <article className="stat-card">
      <div className="stat-top">
        <p>{label}</p>
        <span className="stat-dot" />
      </div>
      <div className="stat-value">{value}</div>
      <p className="stat-detail">{detail}</p>
    </article>
  );
}

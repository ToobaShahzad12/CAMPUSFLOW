export default function AssignmentCard({ subject, due, status, priority, progress, course }) {
  const statusMap = {
    'In review': 'in-progress',
    'Not started': 'pending',
    'Drafting': 'in-progress',
    'Submitted': 'complete'
  };

  return (
    <article className="assignment-card">
      <div className="assignment-meta">
        <span className="assignment-course">{course}</span>
        <span className={`assignment-status ${statusMap[status] || 'pending'}`}>{status}</span>
      </div>
      <h4 className="assignment-title">{subject}</h4>
      <div className="assignment-progress-section">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="progress-meta">
          <span>{progress}% complete</span>
          <span className={`priority ${priority.toLowerCase()}`}>{priority}</span>
        </div>
      </div>
      <p className="assignment-due">Due {due}</p>
    </article>
  );
}

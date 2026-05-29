export default function NoteCard({ title, snippet, tag, time, color }) {
  return (
    <article className={`note-card accent-${color || 'blue'}`}>
      <div className="note-header">
        <span className="note-tag">{tag}</span>
        <span className="note-time">{time}</span>
      </div>
      <h4 className="note-title">{title}</h4>
      <p className="note-snippet">{snippet}</p>
      <button className="note-action">Read more →</button>
    </article>
  );
}

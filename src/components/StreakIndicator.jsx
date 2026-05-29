export default function StreakIndicator() {
  const streakData = [
    { metric: 'Study streak', value: 12, unit: 'days', color: 'flame' },
    { metric: 'Focus hours', value: 28, unit: 'this week', color: 'blue' },
    { metric: 'Assignment rate', value: 94, unit: 'on-time', color: 'green' },
  ];

  return (
    <div className="streak-grid">
      {streakData.map((item) => (
        <div key={item.metric} className={`streak-card ${item.color}`}>
          <div className="streak-info">
            <p className="streak-label">{item.metric}</p>
            <div className="streak-value">
              <strong>{item.value}</strong>
              <span>{item.unit}</span>
            </div>
          </div>
          <div className="streak-indicator">
            <div className="indicator-bar" style={{ width: `${item.value}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

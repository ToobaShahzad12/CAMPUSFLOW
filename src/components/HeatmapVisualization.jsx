export default function HeatmapVisualization({ data }) {
  const getIntensity = (val) => {
    if (val === 0) return 'absent';
    if (val === 1) return 'present';
    return 'partial';
  };

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const weeks = ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6', 'Wk 7'];

  return (
    <div className="heatmap-container">
      <div className="heatmap-grid">
        <div className="heatmap-labels">
          <div className="heatmap-spacer"></div>
          {weekDays.map((day) => (
            <div key={day} className="heatmap-day-label">{day}</div>
          ))}
        </div>
        {weeks.map((week, i) => (
          <div key={week} className="heatmap-row">
            <div className="heatmap-week-label">{week}</div>
            {data[i].map((val, j) => (
              <div
                key={`${i}-${j}`}
                className={`heatmap-cell ${getIntensity(val)}`}
                title={val === 1 ? 'Present' : 'Absent'}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="heatmap-legend">
        <span><div className="legend-cell absent"></div>Absent</span>
        <span><div className="legend-cell present"></div>Present</span>
      </div>
    </div>
  );
}

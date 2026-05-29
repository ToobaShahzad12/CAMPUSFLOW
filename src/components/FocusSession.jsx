export default function FocusSession({ active, onToggle, streak, timer }) {
  return (
    <div className={`focus-container ${active ? 'active' : ''}`}>
      <div className="focus-content">
        <div className="focus-left">
          <div className="focus-badge">
            <span className="focus-dot"></span>
            {active ? 'Focus mode active' : 'Start a focus session'}
          </div>
          <h3 className="focus-title">
            {active ? 'In deep work' : 'Ready to focus?'}
          </h3>
          <p className="focus-text">
            {active 
              ? `You're ${streak} days into your study streak. Keep it going!`
              : 'Block distractions and maximize study time. Estimated: 45 minutes'}
          </p>
          {active && (
            <div className="focus-timer">
              <div className="timer-display">{timer || '45:00'}</div>
              <p className="timer-label">Remaining</p>
            </div>
          )}
        </div>
        <button 
          className={`focus-button ${active ? 'active' : ''}`}
          onClick={onToggle}
        >
          {active ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
}

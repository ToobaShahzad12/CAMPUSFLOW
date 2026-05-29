export default function Sidebar({ items, active, onSelect, visible, onClose }) {
  return (
    <aside className={`sidebar ${visible ? 'visible' : ''}`}>
      <div className="sidebar-brand">
        <div className="brand-mark">CF</div>
        <div>
          <p>CampusFlow</p>
          <span>v2.1</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {items.map((item) => (
          <button
            key={item.id}
            className={item.id === active ? 'nav-item active' : 'nav-item'}
            onClick={() => {
              onSelect(item);
              onClose();
            }}
            title={item.label}
          >
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-divider"></div>

      <div className="sidebar-profile">
        <div className="profile-avatar">TS</div>
        <div className="profile-details">
          <p className="profile-name">Tooba Shahzad</p>
          <p className="profile-status">Active today</p>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="footer-stat">
          <span className="stat-label">Streak</span>
          <span className="stat-value">12</span>
        </div>
        <div className="footer-stat">
          <span className="stat-label">Target</span>
          <span className="stat-value">92%</span>
        </div>
      </div>
    </aside>
  );
}

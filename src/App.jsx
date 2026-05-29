import { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar.jsx';
import AssignmentCard from './components/AssignmentCard.jsx';
import NoteCard from './components/NoteCard.jsx';
import ScheduleRow from './components/ScheduleRow.jsx';
import HeatmapVisualization from './components/HeatmapVisualization.jsx';
import FocusSession from './components/FocusSession.jsx';
import StreakIndicator from './components/StreakIndicator.jsx';

const navItems = [
  { label: 'Dashboard', id: 'dashboard' },
  { label: 'Assignments', id: 'assignments' },
  { label: 'Notes', id: 'notes' },
  { label: 'Attendance', id: 'attendance' },
  { label: 'Schedule', id: 'schedule' },
  { label: 'Settings', id: 'settings' },
];

const assignments = [
  { subject: 'Organic Chemistry', due: 'May 22, 2:30 PM', status: 'In review', priority: 'High', progress: 65, course: 'CHEM 301' },
  { subject: 'Modern History', due: 'May 24', status: 'Not started', priority: 'Medium', progress: 0, course: 'HIST 205' },
  { subject: 'Calculus II', due: 'May 26', status: 'Drafting', priority: 'High', progress: 40, course: 'MATH 102' },
  { subject: 'UI Design Case Study', due: 'May 28', status: 'Submitted', priority: 'Low', progress: 100, course: 'DES 401' },
];

const schedule = [
  { day: 'Mon', events: ['9:00 AM • Physics lecture', '1:00 PM • Study block', '5:30 PM • Club meeting'] },
  { day: 'Tue', events: ['10:30 AM • Statistics lab', '3:00 PM • Group review'] },
  { day: 'Wed', events: ['8:30 AM • Seminar', '12:00 PM • Library session'] },
  { day: 'Thu', events: ['11:00 AM • Workshop', '4:00 PM • Assignment sprint'] },
  { day: 'Fri', events: ['2:00 PM • Presentation prep'] },
];

const notes = [
  { title: 'Lecture highlights', snippet: 'Supply and demand curves, elasticity concepts, real-world applications', tag: 'Economics', time: '2 hours ago', color: 'teal' },
  { title: 'Project outline', snippet: 'Sprint phases: design, prototyping, testing. Team milestones locked.', tag: 'Team work', time: '1 day ago', color: 'purple' },
  { title: 'Exam prep notes', snippet: 'Chapters 5–8 review, formula cheat sheet, past exam patterns', tag: 'Revision', time: '3 days ago', color: 'rose' },
];

const attendanceData = [
  [1,1,1,1,1],
  [1,1,0,1,1],
  [1,1,1,1,1],
  [0,1,1,1,1],
  [1,1,1,1,0],
  [1,0,1,1,1],
  [1,1,1,1,1],
];

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusActive, setFocusActive] = useState(false);
  const [focusSeconds, setFocusSeconds] = useState(45 * 60);
  const [selectedAssignment, setSelectedAssignment] = useState(assignments[0]);
  const [selectedNote, setSelectedNote] = useState(notes[0]);

  const pageHeaders = {
    dashboard: { title: 'Workspace', subtitle: 'Your assignments, schedule, notes, and study streaks.' },
    assignments: { title: 'Assignments', subtitle: 'Track tasks, monitor deadlines, and update progress.' },
    notes: { title: 'Notes', subtitle: 'Capture ideas, organize study notes, and find key insights.' },
    attendance: { title: 'Attendance', subtitle: 'Monitor class presence and build a strong attendance record.' },
    schedule: { title: 'Schedule', subtitle: 'Plan your week with time blocks and priority sessions.' },
    settings: { title: 'Settings', subtitle: 'Manage preferences and account settings.' },
  };

  const header = pageHeaders[activePage] || pageHeaders.dashboard;

  return (
    <div className="campusflow-shell">
      <Sidebar
        items={navItems}
        active={activePage}
        onSelect={(item) => {
          setActivePage(item.id);
          setMenuOpen(false);
        }}
        visible={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="campusflow-main">
        <header className="topbar">
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)}>
            <span />
            <span />
            <span />
          </button>
          <div className="header-content">
            <p className="eyebrow">{header.title}</p>
            <h1 className="header-title">{header.title}</h1>
            <p className="topline">{header.subtitle}</p>
          </div>
          <div className="profile-card">
            <div className="profile-info">
              <p className="profile-label">Good afternoon</p>
              <strong>Tooba Shahzad</strong>
            </div>
            <span className="profile-dot" />
          </div>
        </header>

        <main className="page-content">
          {activePage === 'dashboard' && (
            <>
              <section className="focus-section">
                <FocusSession 
                  active={focusActive} 
                  onToggle={() => setFocusActive(!focusActive)}
                  streak={12}
                  timer="45:00"
                />
              </section>

              <section className="primary-grid">
                <div className="panel assignments-panel">
                  <div className="panel-heading">
                    <div>
                      <p className="eyebrow">Workload</p>
                      <h2>Assignments</h2>
                    </div>
                    <span className="badge danger">3 urgent</span>
                  </div>
                  <div className="assignment-list">
                    {assignments.map((item) => (
                      <AssignmentCard key={item.subject} {...item} />
                    ))}
                  </div>
                </div>

                <div className="panel-dual">
                  <div className="panel schedule-compact">
                    <div className="panel-heading">
                      <div>
                        <p className="eyebrow">This week</p>
                        <h3>Schedule</h3>
                      </div>
                    </div>
                    <div className="schedule-grid compact">
                      {schedule.map((item) => (
                        <ScheduleRow key={item.day} day={item.day} events={item.events} />
                      ))}
                    </div>
                  </div>

                  <div className="panel attendance-panel">
                    <div className="panel-heading">
                      <div>
                        <p className="eyebrow">Attendance</p>
                        <h3>Heatmap</h3>
                      </div>
                      <span className="badge success">92%</span>
                    </div>
                    <HeatmapVisualization data={attendanceData} />
                    <p className="attendance-note">7 weeks tracked. Strong consistency!</p>
                  </div>
                </div>
              </section>

              <section className="secondary-grid">
                <div className="panel notes-focus">
                  <div className="panel-heading">
                    <div>
                      <p className="eyebrow">Knowledge</p>
                      <h2>Recent notes</h2>
                    </div>
                    <span className="badge soft">3 saved</span>
                  </div>
                  <div className="notes-grid">
                    {notes.map((note) => (
                      <NoteCard key={note.title} {...note} />
                    ))}
                  </div>
                </div>

                <div className="panel productivity-panel">
                  <div className="panel-heading">
                    <div>
                      <p className="eyebrow">Performance</p>
                      <h2>Study metrics</h2>
                    </div>
                  </div>
                  <StreakIndicator />
                </div>
              </section>
            </>
          )}

          {activePage === 'assignments' && (
            <section className="page-full">
              <div className="panel">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">Assignment board</p>
                    <h2>All tasks</h2>
                  </div>
                </div>
                <div className="assignment-list expanded">
                  {assignments.map((item) => (
                    <AssignmentCard key={item.subject} {...item} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {activePage === 'notes' && (
            <section className="page-full">
              <div className="panel">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">Study library</p>
                    <h2>All notes</h2>
                  </div>
                </div>
                <div className="notes-grid large">
                  {notes.map((note) => (
                    <NoteCard key={note.title} {...note} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {activePage === 'attendance' && (
            <section className="page-full">
              <div className="panel">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">Session tracker</p>
                    <h2>Presence heatmap</h2>
                  </div>
                </div>
                <div className="metric-row">
                  <article className="metric-card">
                    <p className="metric-label">Present</p>
                    <h3>32 days</h3>
                  </article>
                  <article className="metric-card">
                    <p className="metric-label">Missed</p>
                    <h3>3 days</h3>
                  </article>
                </div>
                <HeatmapVisualization data={attendanceData} />
                <p className="attendance-note">Strong consistency above class average.</p>
              </div>
            </section>
          )}

          {activePage === 'schedule' && (
            <section className="page-full">
              <div className="panel">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">Weekly plan</p>
                    <h2>Time blocks</h2>
                  </div>
                </div>
                <div className="schedule-grid">
                  {schedule.map((item) => (
                    <ScheduleRow key={item.day} day={item.day} events={item.events} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {activePage === 'settings' && (
            <section className="page-full">
              <div className="panel">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">Workspace</p>
                    <h2>Preferences</h2>
                  </div>
                </div>
                <div className="settings-form">
                  <label>
                    <span>Theme</span>
                    <select>
                      <option>Light</option>
                      <option>Dark</option>
                    </select>
                  </label>
                  <label>
                    <span>Notifications</span>
                    <select>
                      <option>Enabled</option>
                      <option>Muted</option>
                    </select>
                  </label>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

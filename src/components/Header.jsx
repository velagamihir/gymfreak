import React from 'react';
import { Dumbbell, Flame, Moon, Sun, Award, Sparkles } from 'lucide-react';

export default function Header({ currentWeight, streak, theme, toggleTheme, onOpenProgress }) {
  return (
    <header className="header-wrapper">
      <div className="header-content">
        <div className="brand-logo">
          <div className="brand-icon">
            <Dumbbell size={24} />
          </div>
          <div>
            <div className="brand-name">
              HostelFit <span className="brand-badge">PRO</span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              21yo • 91kg → 75kg Transformation Hub
            </div>
          </div>
        </div>

        <div className="user-quick-stats">
          <button 
            className="stat-pill" 
            onClick={onOpenProgress}
            title="Click to view Weight Transformation & Water Tracker"
            style={{ cursor: 'pointer' }}
          >
            <Award size={16} color="var(--accent-emerald)" />
            <span><strong>{currentWeight} kg</strong></span>
            <span style={{ color: 'var(--text-muted)', fontSize: '11px' }}>→ 75 kg</span>
          </button>

          <div className="stat-pill">
            <Flame size={16} color="var(--accent-amber)" />
            <span><strong>{streak}</strong> Day Streak</span>
          </div>

          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

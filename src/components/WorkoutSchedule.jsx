import React, { useState } from 'react';
import { Play, Video, Clock, Flame, Dumbbell, Sparkles, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { weeklyPlan } from '../data/workoutPlan';

export default function WorkoutSchedule({ onStartWorkout, onOpenVideo, completedDays = [] }) {
  // Default to today's day of week or Monday (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday
  const defaultDayId = currentDayIndex === 0 ? "day7" : `day${currentDayIndex}`;
  
  const [selectedDayId, setSelectedDayId] = useState(defaultDayId);

  const selectedDay = weeklyPlan.find(d => d.id === selectedDayId) || weeklyPlan[0];

  return (
    <div className="animate-fade-in">
      {/* 7-Day Quick Selector Strip */}
      <div className="days-scroll-container">
        {weeklyPlan.map((day) => {
          const isSelected = day.id === selectedDayId;
          const isCompleted = completedDays.includes(day.id);

          return (
            <button
              key={day.id}
              className={`day-chip ${isSelected ? 'active' : ''}`}
              onClick={() => setSelectedDayId(day.id)}
            >
              <div className="day-chip-name">
                {day.dayName} {isCompleted && '✓'}
              </div>
              <div className="day-chip-tag" style={{ color: isSelected ? 'var(--accent-emerald)' : 'inherit' }}>
                {day.tag.split(' ')[0]}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px' }}>
                {day.exercises.length} Drills
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Day Workout Card */}
      <div className="workout-day-card">
        {/* Day Header */}
        <div className="day-header-flex">
          <div>
            <div 
              className="day-title-badge"
              style={{ background: `${selectedDay.color}20`, color: selectedDay.color, border: `1px solid ${selectedDay.color}40` }}
            >
              <Activity size={14} /> {selectedDay.dayName} • {selectedDay.tag}
            </div>
            <h2 style={{ fontSize: '24px', color: 'var(--text-primary)', margin: '4px 0' }}>
              {selectedDay.title}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              {selectedDay.subtitle}
            </p>

            {/* Equipment Pills */}
            <div className="equipment-pill-row">
              {selectedDay.equipmentNeeded.map((eq, i) => (
                <span key={i} className="equipment-pill">
                  <Dumbbell size={12} color="var(--accent-cyan)" /> {eq}
                </span>
              ))}
              <span className="equipment-pill" style={{ color: 'var(--accent-amber)' }}>
                <Clock size={12} /> {selectedDay.duration}
              </span>
              <span className="equipment-pill" style={{ color: 'var(--accent-pink)' }}>
                <Flame size={12} /> {selectedDay.caloriesBurn}
              </span>
            </div>
          </div>

          {/* Start Live Session Button */}
          {selectedDay.id !== "day7" && (
            <button 
              className="start-workout-btn"
              onClick={() => onStartWorkout(selectedDay)}
            >
              <Play size={18} fill="#042f2e" /> Start Today's Session
            </button>
          )}
        </div>

        {/* Diet Highlight for Tuesday (Eggs) or Friday (Fried Rice) */}
        {selectedDay.dietHighlight && (
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 18px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Sparkles size={20} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '13px', color: 'var(--text-primary)' }}>
              <strong>Mess Diet Alignment: </strong> {selectedDay.dietHighlight}
            </div>
          </div>
        )}

        {/* Warmup Routine */}
        <div className="warmup-box">
          <div className="warmup-title">
            <Flame size={15} /> Pre-Workout Warmup & Joint Prep (5-7 mins):
          </div>
          <div className="warmup-list">
            {selectedDay.warmup.map((w, idx) => (
              <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={13} color="var(--accent-amber)" /> {w}
              </span>
            ))}
          </div>
        </div>

        {/* Exercises Grid */}
        <div className="exercises-grid">
          {selectedDay.exercises.map((ex, index) => (
            <div key={ex.id} className="exercise-card">
              <div>
                <div className="ex-top">
                  <div>
                    <div className="ex-name">{index + 1}. {ex.name}</div>
                    <div className="ex-target">{ex.target}</div>
                  </div>
                  <span className="ex-badge">{ex.intensity || ex.equipment}</span>
                </div>

                <div className="ex-stats-row">
                  <div className="ex-stat-item">
                    <div className="ex-stat-val">{ex.sets}</div>
                    <div className="ex-stat-lbl">Sets</div>
                  </div>
                  <div className="ex-stat-item">
                    <div className="ex-stat-val">{ex.reps}</div>
                    <div className="ex-stat-lbl">Reps</div>
                  </div>
                  <div className="ex-stat-item">
                    <div className="ex-stat-val">{ex.rest ? `${ex.rest}s` : 'LISS'}</div>
                    <div className="ex-stat-lbl">Rest</div>
                  </div>
                </div>

                <div className="ex-tip-text">
                  <strong>Form Cue:</strong> {ex.tip}
                </div>
              </div>

              <div className="ex-action-row">
                <button 
                  className="btn-watch-video"
                  onClick={() => onOpenVideo(ex)}
                  title="Watch step-by-step form tutorial"
                >
                  <Video size={14} /> Watch Tutorial Video
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

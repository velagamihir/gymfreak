import React from 'react';
import { X, Play, AlertTriangle, CheckCircle, Info, ExternalLink } from 'lucide-react';
import { exercisesData } from '../data/exercisesData';

export default function ExerciseVideoModal({ exercise, onClose }) {
  if (!exercise) return null;

  // Search full exercise data details if available
  const fullDetails = exercisesData.find(e => e.id === exercise.id) || exercise;
  const videoId = exercise.videoId || fullDetails.videoId || "rT7DgCr-3pg";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card animate-pop" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="ex-badge">{exercise.equipment || fullDetails.equipment}</span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Target: <strong>{exercise.target || fullDetails.target || fullDetails.muscleGroup}</strong>
              </span>
            </div>
            <h2 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>
              {exercise.name}
            </h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Responsive YouTube Embed */}
        <div className="video-container">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={exercise.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="modal-body">
          {/* Quick Stats Banner */}
          <div style={{
            display: 'flex',
            gap: '12px',
            background: 'var(--bg-tertiary)',
            padding: '12px 16px',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '18px',
            flexWrap: 'wrap'
          }}>
            <div>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Recommended Sets & Reps</span>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--accent-emerald)' }}>
                {exercise.sets} Sets × {exercise.reps}
              </div>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Rest Period</span>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--accent-cyan)' }}>
                {exercise.rest || 60} Seconds
              </div>
            </div>
          </div>

          {/* Form Step-by-Step Instructions */}
          {fullDetails.instructions && (
            <div style={{ marginBottom: '18px' }}>
              <h4 style={{ fontSize: '14px', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <CheckCircle size={16} /> Perfect Form & Execution Guide:
              </h4>
              <ul style={{ paddingLeft: '18px', fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {fullDetails.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Mistakes to Avoid */}
          {fullDetails.mistakesToAvoid && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: 'var(--radius-sm)',
              padding: '12px 16px',
              marginBottom: '16px'
            }}>
              <h4 style={{ fontSize: '13px', color: '#f87171', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <AlertTriangle size={15} /> Mistakes to Avoid (Joint & Knee Safety):
              </h4>
              <ul style={{ paddingLeft: '18px', fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {fullDetails.mistakesToAvoid.map((mistake, idx) => (
                  <li key={idx}>{mistake}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Hostel Gym Equipment Hack */}
          {fullDetails.gymHack && (
            <div style={{
              background: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              borderRadius: 'var(--radius-sm)',
              padding: '12px 16px',
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start'
            }}>
              <Info size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-cyan)' }}>Hostel Gym Setup Tip: </span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{fullDetails.gymHack}</span>
              </div>
            </div>
          )}

          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
            <a 
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(exercise.name + " form tutorial")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                color: 'var(--text-muted)',
                textDecoration: 'none'
              }}
            >
              Watch more videos on YouTube <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

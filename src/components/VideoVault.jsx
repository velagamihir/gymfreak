import React, { useState } from 'react';
import { Search, Filter, Video, Dumbbell, CheckCircle2, AlertTriangle, Play } from 'lucide-react';
import { exercisesData } from '../data/exercisesData';

const EQUIPMENT_FILTERS = [
  "All Equipment",
  "Straight Barbell",
  "Crooked Barbell (EZ-Bar)",
  "Dumbbells (10 - 12.5 kg)",
  "Air Bike (Hands + Legs Move)",
  "Treadmill",
  "Stationary Bike (Legs Only)"
];

const MUSCLE_FILTERS = [
  "All Muscles",
  "Chest",
  "Back",
  "Legs",
  "Shoulders",
  "Arms",
  "Cardio & Full Body"
];

export default function VideoVault({ onOpenVideo }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState('All Equipment');
  const [selectedMuscle, setSelectedMuscle] = useState('All Muscles');

  const filteredExercises = exercisesData.filter(ex => {
    const matchesSearch = ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ex.muscleGroup.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ex.equipment.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesEquipment = selectedEquipment === "All Equipment" || 
                             ex.equipment.toLowerCase().includes(selectedEquipment.toLowerCase().split(' ')[0]);

    const matchesMuscle = selectedMuscle === "All Muscles" ||
                          ex.muscleGroup.toLowerCase().includes(selectedMuscle.toLowerCase().split(' ')[0]);

    return matchesSearch && matchesEquipment && matchesMuscle;
  });

  return (
    <div className="animate-fade-in">
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(236, 72, 153, 0.08) 100%)',
        border: '1px solid rgba(239, 68, 68, 0.25)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        marginBottom: '24px'
      }}>
        <div className="brand-badge" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', marginBottom: '8px' }}>
          🎬 Form Master Video Vault
        </div>
        <h2 style={{ fontSize: '22px', color: 'var(--text-primary)' }}>
          Exercise Technique Library & Video Tutorials
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '650px', marginTop: '4px' }}>
          Watch step-by-step video tutorials from world-class strength coaches. Master your barbell lifts, avoid joint injury, and maximize muscle growth with your hostel gear.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        marginBottom: '24px',
        alignItems: 'center'
      }}>
        {/* Search Input */}
        <div style={{ position: 'relative', flex: '1', minWidth: '240px' }}>
          <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text"
            placeholder="Search exercises (e.g. Squat, EZ Bar Curl, Bench)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px 10px 38px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--card-border)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '13px'
            }}
          />
        </div>

        {/* Muscle Selector */}
        <select
          value={selectedMuscle}
          onChange={(e) => setSelectedMuscle(e.target.value)}
          style={{
            padding: '10px 14px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--card-border)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '13px',
            color: 'var(--text-primary)'
          }}
        >
          {MUSCLE_FILTERS.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        {/* Equipment Selector */}
        <select
          value={selectedEquipment}
          onChange={(e) => setSelectedEquipment(e.target.value)}
          style={{
            padding: '10px 14px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--card-border)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '13px',
            color: 'var(--text-primary)'
          }}
        >
          {EQUIPMENT_FILTERS.map(eq => (
            <option key={eq} value={eq}>{eq}</option>
          ))}
        </select>
      </div>

      {/* Exercises Video Grid */}
      <div className="exercises-grid">
        {filteredExercises.map((ex) => (
          <div key={ex.id} className="exercise-card">
            <div>
              <div className="ex-top">
                <div>
                  <div className="ex-name">{ex.name}</div>
                  <div className="ex-target">{ex.muscleGroup} • <span style={{ color: 'var(--text-muted)' }}>Coach: {ex.instructor}</span></div>
                </div>
                <span className="ex-badge">{ex.difficulty}</span>
              </div>

              {/* YouTube Thumbnail Preview Card */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '140px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  background: '#000'
                }}
                onClick={() => onOpenVideo(ex)}
              >
                <img 
                  src={`https://img.youtube.com/vi/${ex.videoId}/mqdefault.jpg`}
                  alt={ex.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 0, 0, 0.4)'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(239, 68, 68, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)'
                  }}>
                    <Play size={20} fill="#fff" color="#fff" style={{ marginLeft: '3px' }} />
                  </div>
                </div>
                <span style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                  fontSize: '11px',
                  fontWeight: '700',
                  background: 'rgba(0,0,0,0.7)',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}>
                  {ex.equipment}
                </span>
              </div>

              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: '1.4' }}>
                {ex.instructions ? ex.instructions[0] : `Step-by-step masterclass on how to execute ${ex.name}.`}
              </div>
            </div>

            <div className="ex-action-row">
              <button 
                className="btn-watch-video"
                onClick={() => onOpenVideo(ex)}
                style={{ width: '100%' }}
              >
                <Video size={14} /> Watch Tutorial & Form Cues
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

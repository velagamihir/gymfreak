import React, { useState, useEffect } from 'react';
import { Target, TrendingDown, Droplet, Plus, Trash2, Award, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { userProfile } from '../data/hostelDietData';

export const STORAGE_KEY_WEIGHTS = 'hostelfit_weight_history';
export const STORAGE_KEY_WATER = 'hostelfit_daily_water_cups';

export default function ProgressDashboard({ onWeightUpdate }) {
  // Weight Log State
  const [weightHistory, setWeightHistory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_WEIGHTS);
      return saved ? JSON.parse(saved) : [
        { date: 'Initial (Week 1)', weight: 91.0, note: 'Starting weight at hostel' }
      ];
    } catch {
      return [{ date: 'Initial (Week 1)', weight: 91.0, note: 'Starting weight at hostel' }];
    }
  });

  const [newWeight, setNewWeight] = useState('');
  const [newNote, setNewNote] = useState('');

  // Water Tracker State (14 cups of 250ml = 3.5L)
  const totalCups = 14;
  const [waterCups, setWaterCups] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_WATER);
      return saved !== null ? Number(saved) : 0;
    } catch {
      return 0;
    }
  });

  // Height & BMI Calculator
  const [heightCm, setHeightCm] = useState(175);

  const currentWeight = weightHistory.length > 0 ? weightHistory[weightHistory.length - 1].weight : 91;
  const totalLost = (91 - currentWeight).toFixed(1);
  const remainingToGoal = (currentWeight - userProfile.targetWeight).toFixed(1);
  const percentComplete = Math.max(0, Math.min(100, Math.round(((91 - currentWeight) / (91 - userProfile.targetWeight)) * 100)));

  // BMI Calculation
  const heightMeters = heightCm / 100;
  const currentBMI = (currentWeight / (heightMeters * heightMeters)).toFixed(1);
  const targetBMI = (userProfile.targetWeight / (heightMeters * heightMeters)).toFixed(1);

  // Save weights
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_WEIGHTS, JSON.stringify(weightHistory));
    } catch (e) {
      console.warn("Save weight error", e);
    }
    if (onWeightUpdate) {
      onWeightUpdate(currentWeight);
    }
  }, [weightHistory, currentWeight, onWeightUpdate]);

  // Save water
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_WATER, waterCups.toString());
    } catch (e) {
      console.warn("Save water error", e);
    }
  }, [waterCups]);

  const addWeightEntry = (e) => {
    e.preventDefault();
    if (!newWeight) return;
    const entry = {
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      weight: parseFloat(newWeight),
      note: newNote || 'Weekly Check-in'
    };
    setWeightHistory(prev => [...prev, entry]);
    setNewWeight('');
    setNewNote('');
  };

  const removeWeightEntry = (index) => {
    if (weightHistory.length <= 1) return;
    setWeightHistory(prev => prev.filter((_, i) => i !== index));
  };

  const toggleWaterCup = (index) => {
    if (index < waterCups) {
      setWaterCups(index);
    } else {
      setWaterCups(index + 1);
    }
  };

  const resetWater = () => {
    setWaterCups(0);
  };

  return (
    <div className="animate-fade-in">
      {/* 91kg -> 75kg Road to Transformation Card */}
      <div className="hero-banner">
        <div className="hero-left">
          <div className="brand-badge" style={{ marginBottom: '6px' }}>
            🎯 91 kg → 75 kg Recomposition Roadmap
          </div>
          <h1>Target: Lean & Muscular Transformation</h1>
          <p>
            By sticking to your 1,950 kcal deficit, hitting 140g protein, lifting 5 days/week in the hostel gym, and doing air bike/treadmill cardio, here is your projected progress:
          </p>

          {/* Road Milestones */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginTop: '16px' }}>
            <div style={{ background: 'var(--card-bg)', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Phase 1 (W1-3)</div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--accent-emerald)' }}>88 kg</div>
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Water drop & digestion reset</div>
            </div>
            <div style={{ background: 'var(--card-bg)', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Phase 2 (W4-8)</div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--accent-cyan)' }}>84 kg</div>
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Visible waist reduction</div>
            </div>
            <div style={{ background: 'var(--card-bg)', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Phase 3 (W9-14)</div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--accent-pink)' }}>80 kg</div>
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Jawline & shoulder definition</div>
            </div>
            <div style={{ background: 'var(--card-bg)', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--card-border)' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Goal (W15-20)</div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--accent-amber)' }}>75 kg</div>
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Athletic, lean & muscular!</div>
            </div>
          </div>
        </div>

        {/* Progress Gauge */}
        <div style={{ textAlign: 'center', minWidth: '180px' }}>
          <div style={{ fontSize: '38px', fontWeight: '900', color: 'var(--accent-emerald)', fontFamily: 'Outfit' }}>
            {currentWeight} <span style={{ fontSize: '18px' }}>kg</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            {totalLost > 0 ? `🎉 ${totalLost} kg Dropped!` : `Starting Point: 91 kg`}
          </div>

          <div style={{ width: '100%', height: '8px', background: 'var(--bg-tertiary)', borderRadius: '4px', margin: '10px 0', overflow: 'hidden' }}>
            <div style={{ width: `${Math.max(5, percentComplete)}%`, height: '100%', background: 'var(--gradient-main)', borderRadius: '4px' }} />
          </div>
          <div style={{ fontSize: '11px', color: 'var(--accent-cyan)', fontWeight: '700' }}>
            {remainingToGoal} kg to 75 kg Target
          </div>
        </div>
      </div>

      {/* Water Tracker Section */}
      <div className="water-tracker-card">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Droplet size={20} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '17px', color: 'var(--text-primary)' }}>
              Daily Hostel Hydration Tracker (3.5 Liters Goal)
            </h3>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Tap cups as you drink (Each cup = 250ml). Drinking 3.5L flushes hostel mess sodium and boosts fat loss.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="water-cups-row">
            {Array.from({ length: totalCups }).map((_, idx) => (
              <button 
                key={idx}
                className={`water-cup-btn ${idx < waterCups ? 'filled' : ''}`}
                onClick={() => toggleWaterCup(idx)}
                title={`Cup ${idx + 1} (250ml)`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--accent-cyan)' }}>
              {(waterCups * 0.25).toFixed(2)} / 3.5 L
            </div>
            <button onClick={resetWater} style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Left = Weigh-in Logger, Right = BMI & Health Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
        {/* Left Column: Weekly Weigh-in History */}
        <div>
          <div className="workout-day-card">
            <h3 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={18} color="var(--accent-emerald)" />
              Weekly Weigh-in Logger
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Weigh yourself every Sunday morning on an empty stomach and record it here:
            </p>

            <form onSubmit={addWeightEntry} style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <input 
                type="number"
                step="0.1"
                placeholder="Weight (e.g. 89.5)"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
                style={{ width: '130px', padding: '8px 12px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', fontSize: '13px' }}
                required
              />
              <input 
                type="text"
                placeholder="Note (e.g. Completed week 2 workouts!)"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                style={{ flex: 1, minWidth: '160px', padding: '8px 12px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', fontSize: '13px' }}
              />
              <button 
                type="submit" 
                className="start-workout-btn"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                <Plus size={14} /> Log Weight
              </button>
            </form>

            {/* Weigh-in Table */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '300px', overflowY: 'auto' }}>
              {weightHistory.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--card-border)',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '14px', fontWeight: '800', color: 'var(--accent-emerald)', marginRight: '10px' }}>
                      {item.weight} kg
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {item.date} • {item.note}
                    </span>
                  </div>
                  {idx > 0 && (
                    <button 
                      onClick={() => removeWeightEntry(idx)}
                      style={{ color: 'var(--text-muted)', padding: '4px' }}
                      title="Delete entry"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: BMI & Physical Metrics */}
        <div>
          <div className="workout-day-card">
            <h3 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>
              Body Mass Index (BMI) & Ideal Metrics
            </h3>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                Your Height (in cm):
              </label>
              <input 
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                style={{ width: '120px', padding: '8px 12px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', fontSize: '13px' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
              <div style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Current BMI (at 91kg)</div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--accent-amber)' }}>{currentBMI}</div>
                <div style={{ fontSize: '10px', color: 'var(--accent-amber)' }}>Overweight (Recomp Starting)</div>
              </div>

              <div style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Target BMI (at 75kg)</div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--accent-emerald)' }}>{targetBMI}</div>
                <div style={{ fontSize: '10px', color: 'var(--accent-emerald)' }}>Normal & Athletic Range</div>
              </div>
            </div>

            <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '12px', borderRadius: 'var(--radius-sm)', fontSize: '12px', color: 'var(--text-secondary)' }}>
              <strong>The Power of Body Recomposition:</strong> At 21 years old, your testosterone and recovery potential are at their lifetime peak! By lifting heavy with your gym's barbells and dumbbells while in a mild 600 kcal deficit, you will burn pure belly fat while simultaneously packing on solid muscle fiber.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

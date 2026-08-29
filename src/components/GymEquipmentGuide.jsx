import React from 'react';
import { Dumbbell, Activity, ShieldCheck, Flame, Compass, Zap } from 'lucide-react';

export default function GymEquipmentGuide() {
  const equipmentCards = [
    {
      name: "Straight Barbell + Weight Plates",
      role: "Heavy Strength & Testosterone Compound Engine",
      exercises: ["Flat Bench Press / Floor Press", "Barbell Back Squat", "Conventional Deadlift", "Standing Overhead Press", "Barbell Bent-Over Row"],
      advice: "The straight barbell is your #1 tool for moving heavy loads and building core compound strength. Since plates are available, use progressive overload (adding 2.5kg or 5kg every 1-2 weeks as you get stronger).",
      icon: "🏋️‍♂️",
      color: "#3b82f6"
    },
    {
      name: "Crooked Barbell (EZ-Curl Bar)",
      role: "Joint-Friendly Hypertrophy & Arm Builder",
      exercises: ["EZ-Bar Standing Bicep Curls", "EZ-Bar Skull Crushers (Triceps)", "EZ-Bar Upright Rows (Shoulders)", "21s Bicep Finisher"],
      advice: "The curved 'crooked' design puts your wrists at a natural 45-degree angle. This prevents forearm/wrist tendonitis and allows maximum bicep & tricep peak contraction!",
      icon: "💪",
      color: "#ec4899"
    },
    {
      name: "Dumbbells (2.5 kg to 12.5 kg Pairs)",
      role: "Unilateral Muscle Balance & Tempo Hypertrophy",
      exercises: ["Lateral Raises (5-7.5kg)", "Incline DB Press (10-12.5kg)", "Single-Arm Rows (12.5kg)", "Romanian Deadlifts", "Walking Lunges"],
      advice: "If 12.5kg starts feeling light for presses or rows, use TEMPO HACKS: 3 seconds slow lowering (eccentric), 1 second pause at bottom stretch, and 12-15 reps. This creates the same muscle hypertrophy as a 20kg dumbbell!",
      icon: "⚡",
      color: "#10b981"
    },
    {
      name: "Dual-Action Air Bike (Arms + Legs Move)",
      role: "Metabolic Fat Torch & VO2 Max Engine",
      exercises: ["4-Min Tabata Sprints (20s work / 10s rest)", "10-Min Calorie Shredder", "Pyramid Intervals"],
      advice: "Unlike a regular bike, when you push and pull the handles while pedaling, your upper chest, back, and shoulders burn simultaneous calories with your quads and glutes!",
      icon: "🚴‍♂️",
      color: "#06b6d4"
    },
    {
      name: "Treadmill (Incline Motorized)",
      role: "Zero-Impact Zone 2 Fat Loss",
      exercises: ["12-3-30 Incline Walk (12% Incline, 4.8 km/h)", "Post-Lift 15-Min Fat Oxidation Walk"],
      advice: "At 91kg starting bodyweight, steep incline walking burns the exact same calories as running, but protects your meniscus and knee joints completely!",
      icon: "🏃‍♂️",
      color: "#f59e0b"
    },
    {
      name: "Stationary Cycle (Legs Only)",
      role: "Active Recovery & Lactic Acid Clearance",
      exercises: ["15-Min Post-Leg Day Flush", "Zone 2 Moderate Spin"],
      advice: "Use this on leg days and recovery Thursdays to keep blood circulating and accelerate muscle repair without inducing soreness.",
      icon: "🔄",
      color: "#8b5cf6"
    }
  ];

  return (
    <div className="animate-fade-in">
      <div style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        marginBottom: '24px'
      }}>
        <div className="brand-badge" style={{ background: 'rgba(59, 130, 246, 0.2)', color: 'var(--accent-blue)', marginBottom: '8px' }}>
          🛠️ Equipment Mastery
        </div>
        <h2 style={{ fontSize: '22px', color: 'var(--text-primary)' }}>
          How to Maximize Your Hostel Gym's Exact Setup
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '650px', marginTop: '4px' }}>
          You have everything needed for a world-class physique transformation. Here is the blueprint on how each machine and barbell works in harmony:
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '18px' }}>
        {equipmentCards.map((eq, i) => (
          <div key={i} className="glass-panel" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span style={{ fontSize: '24px' }}>{eq.icon}</span>
              <div>
                <h3 style={{ fontSize: '16px', color: 'var(--text-primary)' }}>{eq.name}</h3>
                <div style={{ fontSize: '12px', color: eq.color, fontWeight: '600' }}>{eq.role}</div>
              </div>
            </div>

            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: '1.4' }}>
              {eq.advice}
            </p>

            <div style={{ background: 'var(--bg-tertiary)', padding: '10px 12px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Key Drills in Your Split:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {eq.exercises.map((exName, idx) => (
                  <span key={idx} style={{ fontSize: '11px', background: 'var(--bg-secondary)', padding: '2px 8px', borderRadius: '4px', color: 'var(--text-primary)' }}>
                    {exName}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

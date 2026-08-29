import React, { useState, useEffect, useRef } from 'react';
import { Flame, Play, Pause, RotateCcw, Activity, Wind, CheckCircle2, ChevronRight, Volume2 } from 'lucide-react';
import { cardioProtocols } from '../data/cardioProtocols';
import { soundEffects } from '../utils/audioUtils';

export default function CardioHub() {
  const [selectedProtocol, setSelectedProtocol] = useState(cardioProtocols[0]);

  // Interactive Tabata Timer State
  const [isTabataRunning, setIsTabataRunning] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [isWorkPhase, setIsWorkPhase] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(20);
  const timerRef = useRef(null);

  const totalRounds = 8;
  const workDuration = 20;
  const restDuration = 10;

  useEffect(() => {
    if (isTabataRunning) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 4 && prev > 1) {
            soundEffects.playCountdownTick();
          }
          if (prev === 1) {
            // Phase transition
            if (isWorkPhase) {
              // Switch to REST
              soundEffects.playStartHorn();
              setIsWorkPhase(false);
              return restDuration;
            } else {
              // Switch to WORK (Next round or finish)
              if (currentRound >= totalRounds) {
                // Completed all rounds!
                soundEffects.playVictoryChime();
                setIsTabataRunning(false);
                return 0;
              } else {
                soundEffects.playStartHorn();
                setCurrentRound(r => r + 1);
                setIsWorkPhase(true);
                return workDuration;
              }
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTabataRunning, isWorkPhase, currentRound]);

  const toggleTabata = () => {
    if (timeRemaining === 0) {
      setCurrentRound(1);
      setIsWorkPhase(true);
      setTimeRemaining(workDuration);
    }
    setIsTabataRunning(prev => !prev);
  };

  const resetTabata = () => {
    setIsTabataRunning(false);
    setCurrentRound(1);
    setIsWorkPhase(true);
    setTimeRemaining(workDuration);
  };

  return (
    <div className="animate-fade-in">
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.12) 100%)',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        marginBottom: '28px'
      }}>
        <div className="brand-badge" style={{ background: 'rgba(6, 182, 212, 0.2)', color: 'var(--accent-cyan)', marginBottom: '8px' }}>
          🚴‍♂️ Gym Cardio & Fat-Burn Engine
        </div>
        <h2 style={{ fontSize: '22px', color: 'var(--text-primary)' }}>
          Air Bike, Treadmill & Stationary Cycle Protocols
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '650px', marginTop: '4px' }}>
          Tailored specifically to your hostel gym's machines. Low joint impact protocols that torch body fat while protecting knees at 91kg.
        </p>
      </div>

      {/* Main Grid: Left = Machine Protocols, Right = Live Tabata / HIIT Timer */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
        {/* Left Column: Protocol Selectors */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {cardioProtocols.map((proto) => {
              const isSelected = proto.id === selectedProtocol.id;

              return (
                <div 
                  key={proto.id}
                  className="glass-panel"
                  style={{
                    padding: '20px',
                    borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--card-border)',
                    cursor: 'pointer',
                    background: isSelected ? 'var(--card-hover)' : 'var(--card-bg)'
                  }}
                  onClick={() => setSelectedProtocol(proto)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div>
                      <span className="ex-badge" style={{ background: 'rgba(6, 182, 212, 0.15)', color: 'var(--accent-cyan)' }}>
                        {proto.machine}
                      </span>
                      <h3 style={{ fontSize: '16px', color: 'var(--text-primary)', marginTop: '4px' }}>
                        {proto.title}
                      </h3>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-emerald)' }}>
                      {proto.duration}
                    </span>
                  </div>

                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    {proto.description}
                  </p>

                  <div style={{ background: 'var(--bg-tertiary)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', marginBottom: '12px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Execution Checklist:
                    </div>
                    <ul style={{ paddingLeft: '16px', fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {proto.steps.map((st, i) => (
                        <li key={i}>{st}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: 'var(--text-muted)' }}>
                    <span>Recommended on: <strong>{proto.recommendedDays.join(", ")}</strong></span>
                    <span style={{ color: 'var(--accent-pink)', fontWeight: '700' }}>{proto.intensity}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live HIIT / Tabata Countdown Clock */}
        <div>
          <div className="timer-widget" style={{ top: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <Flame size={18} color={isWorkPhase ? "var(--accent-pink)" : "var(--accent-cyan)"} />
              <h3 style={{ fontSize: '16px', color: 'var(--text-primary)' }}>
                Air Bike Tabata Interval Timer
              </h3>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
              8 Rounds × (20s Work Sprint + 10s Rest Coast)
            </p>

            {/* Round Badge */}
            <div style={{
              display: 'inline-block',
              padding: '4px 14px',
              borderRadius: 'var(--radius-full)',
              background: isWorkPhase ? 'rgba(236, 72, 153, 0.15)' : 'rgba(6, 182, 212, 0.15)',
              color: isWorkPhase ? 'var(--accent-pink)' : 'var(--accent-cyan)',
              border: `1px solid ${isWorkPhase ? 'var(--accent-pink)' : 'var(--accent-cyan)'}`,
              fontSize: '13px',
              fontWeight: '700',
              marginBottom: '10px'
            }}>
              ROUND {currentRound} of {totalRounds} • {isWorkPhase ? "🔥 ALL-OUT SPRINT!" : "💨 REST & COAST"}
            </div>

            {/* Circle Timer */}
            <div className="timer-circle-display" style={{
              borderColor: isWorkPhase ? 'var(--accent-pink)' : 'var(--accent-cyan)',
              boxShadow: isWorkPhase ? '0 0 35px rgba(236, 72, 153, 0.3)' : '0 0 30px rgba(6, 182, 212, 0.2)'
            }}>
              <div className="timer-seconds" style={{
                color: isWorkPhase ? 'var(--accent-pink)' : 'var(--accent-cyan)'
              }}>
                {timeRemaining}s
              </div>
              <div className="timer-label">
                {isWorkPhase ? "Pump Arms & Legs!" : "Breathe & Recover"}
              </div>
            </div>

            {/* Controls */}
            <div className="timer-btn-row" style={{ marginTop: '16px' }}>
              <button 
                className="start-workout-btn"
                style={{
                  background: isWorkPhase ? 'linear-gradient(135deg, #ec4899, #f43f5e)' : 'var(--gradient-main)',
                  color: isWorkPhase ? '#fff' : '#042f2e',
                  padding: '12px 28px'
                }}
                onClick={toggleTabata}
              >
                {isTabataRunning ? <><Pause size={16} /> Pause HIIT</> : <><Play size={16} /> Start Tabata</>}
              </button>

              <button 
                className="theme-toggle-btn"
                style={{ width: '44px', height: '44px' }}
                onClick={resetTabata}
                title="Reset Tabata"
              >
                <RotateCcw size={18} />
              </button>
            </div>

            <div style={{ marginTop: '20px', fontSize: '11px', color: 'var(--text-secondary)', textAlign: 'left', background: 'var(--bg-secondary)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
              ⚡ <strong>Why the Dual-Action Air Bike?</strong> Unlike normal stationary bikes, the handles force your chest, lats, shoulders, and core to work with every pedal stroke, burning 2x more fat per minute!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

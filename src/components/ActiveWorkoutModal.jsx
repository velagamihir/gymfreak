import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, RotateCcw, Check, Video, Award, ChevronRight, Volume2, Flame, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/audioUtils';

export default function ActiveWorkoutModal({ dayPlan, onClose, onCompleteWorkout, onOpenVideo }) {
  const [activeExIndex, setActiveExIndex] = useState(0);
  const [completedSets, setCompletedSets] = useState({}); // { 'exId_setNum': { completed: true, weight: 10, reps: 10 } }
  
  // Timer State
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [initialTime, setInitialTime] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(null);

  const currentExercise = dayPlan.exercises[activeExIndex];

  // Timer Tick Effect
  useEffect(() => {
    if (isTimerRunning && timerSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 4 && prev > 1) {
            soundEffects.playCountdownTick();
          }
          if (prev === 1) {
            soundEffects.playStartHorn();
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning, timerSeconds]);

  const startTimer = (seconds) => {
    setInitialTime(seconds);
    setTimerSeconds(seconds);
    setIsTimerRunning(true);
    soundEffects.playShortBeep(520, 0.1);
  };

  const toggleTimer = () => {
    if (timerSeconds === 0) {
      setTimerSeconds(initialTime);
    }
    setIsTimerRunning(prev => !prev);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(initialTime);
  };

  // Toggle Set Complete
  const toggleSetComplete = (exId, setNum, defaultReps) => {
    const key = `${exId}_${setNum}`;
    const isCompleted = !!completedSets[key]?.completed;
    
    setCompletedSets(prev => ({
      ...prev,
      [key]: {
        completed: !isCompleted,
        weight: prev[key]?.weight || "",
        reps: prev[key]?.reps || defaultReps
      }
    }));

    if (!isCompleted) {
      soundEffects.playShortBeep(700, 0.15);
      // Auto start rest timer based on exercise rest duration
      const restTime = currentExercise.rest || 60;
      if (restTime > 0) {
        startTimer(restTime);
      }
    }
  };

  const updateSetData = (exId, setNum, field, value) => {
    const key = `${exId}_${setNum}`;
    setCompletedSets(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value
      }
    }));
  };

  // Calculate Overall Workout Completion
  let totalSetsInWorkout = 0;
  let totalSetsFinished = 0;
  dayPlan.exercises.forEach(ex => {
    const setsCount = typeof ex.sets === 'number' ? ex.sets : 3;
    totalSetsInWorkout += setsCount;
    for (let s = 1; s <= setsCount; s++) {
      if (completedSets[`${ex.id}_${s}`]?.completed) {
        totalSetsFinished++;
      }
    }
  });

  const progressPercent = Math.round((totalSetsFinished / Math.max(1, totalSetsInWorkout)) * 100);

  const handleFinishWorkout = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
    soundEffects.playVictoryChime();
    onCompleteWorkout(dayPlan.id);
  };

  return (
    <div className="active-workout-modal animate-fade-in">
      {/* Top Navigation Bar */}
      <div className="active-top-bar">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="brand-badge" style={{ background: dayPlan.color, color: '#fff' }}>
              {dayPlan.dayName}
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Live Session</span>
          </div>
          <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '2px' }}>
            {dayPlan.title}
          </h2>
        </div>

        {/* Progress Bar & Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ textAlign: 'right', display: 'none', md: 'block' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Completed Sets</span>
            <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--accent-emerald)' }}>
              {totalSetsFinished} / {totalSetsInWorkout} ({progressPercent}%)
            </div>
          </div>

          <button 
            className="start-workout-btn"
            style={{ padding: '8px 16px', fontSize: '13px' }}
            onClick={handleFinishWorkout}
          >
            <Trophy size={16} /> Finish Session
          </button>

          <button className="modal-close-btn" onClick={onClose} aria-label="Exit workout">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Progress Bar Line */}
      <div style={{ height: '4px', background: 'var(--bg-tertiary)' }}>
        <div style={{
          height: '100%',
          width: `${progressPercent}%`,
          background: 'var(--gradient-main)',
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Main Grid: Left = Exercises Checklist & Set Logger, Right = Rest Timer */}
      <div className="active-main-grid">
        {/* Left Column: Exercises */}
        <div>
          {dayPlan.exercises.map((ex, exIdx) => {
            const isActive = exIdx === activeExIndex;
            const setCount = typeof ex.sets === 'number' ? ex.sets : 3;

            return (
              <div 
                key={ex.id}
                className="set-logger-box"
                style={{
                  border: isActive ? '1px solid var(--accent-emerald)' : '1px solid var(--card-border)',
                  background: isActive ? 'var(--card-bg)' : 'rgba(17, 24, 39, 0.5)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: isActive ? 'var(--accent-emerald)' : 'var(--text-muted)'
                      }}>
                        #{exIdx + 1}
                      </span>
                      <h3 style={{ fontSize: '16px', color: 'var(--text-primary)' }}>
                        {ex.name}
                      </h3>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--accent-cyan)', marginTop: '2px' }}>
                      {ex.target} • <span style={{ color: 'var(--text-muted)' }}>{ex.equipment}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button 
                      className="btn-watch-video" 
                      onClick={() => onOpenVideo(ex)}
                      style={{ padding: '4px 10px', fontSize: '11px' }}
                    >
                      <Video size={13} /> Form Video
                    </button>
                    {!isActive && (
                      <button 
                        className="preset-chip"
                        onClick={() => setActiveExIndex(exIdx)}
                      >
                        Select
                      </button>
                    )}
                  </div>
                </div>

                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px', fontStyle: 'italic' }}>
                  💡 {ex.tip}
                </div>

                {/* Sets Header */}
                <div style={{ display: 'flex', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', paddingBottom: '6px' }}>
                  <div style={{ width: '36px' }}>Set</div>
                  <div style={{ flex: 1, paddingLeft: '8px' }}>Weight (kg)</div>
                  <div style={{ flex: 1 }}>Reps Target</div>
                  <div style={{ width: '40px', textAlign: 'center' }}>Done</div>
                </div>

                {/* Sets List */}
                {Array.from({ length: setCount }).map((_, setIdx) => {
                  const setNum = setIdx + 1;
                  const key = `${ex.id}_${setNum}`;
                  const isDone = !!completedSets[key]?.completed;

                  return (
                    <div key={setNum} className="set-row">
                      <div className="set-num-badge" style={{
                        background: isDone ? 'var(--accent-emerald)' : 'var(--bg-tertiary)',
                        color: isDone ? '#042f2e' : 'var(--text-secondary)'
                      }}>
                        {setNum}
                      </div>

                      <div style={{ flex: 1, paddingLeft: '4px' }}>
                        <input 
                          type="text" 
                          placeholder="e.g. 10kg"
                          className="set-input"
                          value={completedSets[key]?.weight || ""}
                          onChange={(e) => updateSetData(ex.id, setNum, 'weight', e.target.value)}
                        />
                      </div>

                      <div style={{ flex: 1, fontSize: '13px', color: 'var(--text-primary)' }}>
                        {ex.reps}
                      </div>

                      <div>
                        <button 
                          className={`set-check-btn ${isDone ? 'completed' : ''}`}
                          onClick={() => toggleSetComplete(ex.id, setNum, ex.reps)}
                          aria-label={`Mark set ${setNum} done`}
                        >
                          <Check size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Right Column: Rest Timer & Cardio Quick Launcher */}
        <div>
          <div className="timer-widget">
            <h3 style={{ fontSize: '15px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              ⏱️ Rest Countdown
            </h3>

            {/* Circular Timer Display */}
            <div className="timer-circle-display" style={{
              borderColor: timerSeconds === 0 ? 'var(--accent-pink)' : (isTimerRunning ? 'var(--accent-emerald)' : 'var(--card-border)')
            }}>
              <div className="timer-seconds" style={{
                color: timerSeconds === 0 ? 'var(--accent-pink)' : (timerSeconds <= 5 ? 'var(--accent-amber)' : 'var(--text-primary)')
              }}>
                {timerSeconds}s
              </div>
              <div className="timer-label">
                {timerSeconds === 0 ? "Let's Lift!" : (isTimerRunning ? "Resting..." : "Paused")}
              </div>
            </div>

            {/* Timer Presets */}
            <div className="timer-preset-row">
              {[30, 45, 60, 90, 120].map((sec) => (
                <button 
                  key={sec}
                  className={`preset-chip ${initialTime === sec && isTimerRunning ? 'active' : ''}`}
                  onClick={() => startTimer(sec)}
                >
                  {sec}s
                </button>
              ))}
            </div>

            {/* Timer Controls */}
            <div className="timer-btn-row">
              <button 
                className="start-workout-btn"
                style={{ padding: '10px 20px', fontSize: '14px' }}
                onClick={toggleTimer}
              >
                {isTimerRunning ? <><Pause size={16} /> Pause</> : <><Play size={16} /> Start</>}
              </button>

              <button 
                className="theme-toggle-btn"
                style={{ width: '42px', height: '42px' }}
                onClick={resetTimer}
                title="Reset Timer"
              >
                <RotateCcw size={16} />
              </button>
            </div>

            {/* Session Motivational Cue */}
            <div style={{
              marginTop: '24px',
              padding: '12px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px',
              color: 'var(--text-secondary)',
              textAlign: 'left'
            }}>
              <div style={{ fontWeight: '700', color: 'var(--accent-emerald)', marginBottom: '4px' }}>
                💡 91kg Recomposition Rule:
              </div>
              Resting 60-90s between heavy sets keeps testosterone and growth hormone optimized while keeping heart rate in fat-burning zone!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

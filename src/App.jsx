import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WorkoutSchedule from './components/WorkoutSchedule';
import ActiveWorkoutModal from './components/ActiveWorkoutModal';
import ExerciseVideoModal from './components/ExerciseVideoModal';
import HostelDietCoach from './components/HostelDietCoach';
import CalorieTracker from './components/CalorieTracker';
import CardioHub from './components/CardioHub';
import ProgressDashboard from './components/ProgressDashboard';
import VideoVault from './components/VideoVault';
import GymEquipmentGuide from './components/GymEquipmentGuide';
import { 
  Dumbbell, 
  Utensils, 
  Flame, 
  Activity, 
  TrendingUp, 
  Video, 
  Wrench, 
  Award,
  Sparkles
} from 'lucide-react';
import './App.css';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState('workout'); // 'workout' | 'diet' | 'tracker' | 'cardio' | 'progress' | 'videos' | 'equipment'
  
  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('hostelfit_theme') || 'dark';
  });

  // User Progress State
  const [currentWeight, setCurrentWeight] = useState(() => {
    const saved = localStorage.getItem('hostelfit_current_weight');
    return saved ? parseFloat(saved) : 91.0;
  });

  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem('hostelfit_streak');
    return saved ? parseInt(saved, 10) : 3;
  });

  const [completedDays, setCompletedDays] = useState(() => {
    try {
      const saved = localStorage.getItem('hostelfit_completed_days');
      return saved ? JSON.parse(saved) : ['day1'];
    } catch {
      return ['day1'];
    }
  });

  // Modals
  const [activeWorkoutDay, setActiveWorkoutDay] = useState(null);
  const [activeVideoExercise, setActiveVideoExercise] = useState(null);

  // Sync Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hostelfit_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleCompleteWorkout = (dayId) => {
    if (!completedDays.includes(dayId)) {
      const updated = [...completedDays, dayId];
      setCompletedDays(updated);
      localStorage.setItem('hostelfit_completed_days', JSON.stringify(updated));
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('hostelfit_streak', newStreak.toString());
    }
    setActiveWorkoutDay(null);
  };

  const handleWeightUpdate = (w) => {
    setCurrentWeight(w);
    localStorage.setItem('hostelfit_current_weight', w.toString());
  };

  return (
    <div className="app-container">
      {/* Header */}
      <Header 
        currentWeight={currentWeight}
        streak={streak}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenProgress={() => setActiveTab('progress')}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {/* Navigation Tabs (Desktop & Tablet) */}
        <nav className="nav-tabs-wrapper" aria-label="Main Navigation">
          <button 
            className={`nav-tab-btn ${activeTab === 'workout' ? 'active' : ''}`}
            onClick={() => setActiveTab('workout')}
          >
            <Dumbbell size={16} /> 7-Day Workout Plan
          </button>
          <button 
            className={`nav-tab-btn ${activeTab === 'diet' ? 'active' : ''}`}
            onClick={() => setActiveTab('diet')}
          >
            <Utensils size={16} /> Hostel Mess Diet Coach
          </button>
          <button 
            className={`nav-tab-btn ${activeTab === 'tracker' ? 'active' : ''}`}
            onClick={() => setActiveTab('tracker')}
          >
            <Flame size={16} /> 1-Tap Macro & Meal Tracker
          </button>
          <button 
            className={`nav-tab-btn ${activeTab === 'cardio' ? 'active' : ''}`}
            onClick={() => setActiveTab('cardio')}
          >
            <Activity size={16} /> Cardio & Air Bike HIIT
          </button>
          <button 
            className={`nav-tab-btn ${activeTab === 'progress' ? 'active' : ''}`}
            onClick={() => setActiveTab('progress')}
          >
            <TrendingUp size={16} /> 91kg → 75kg Road
          </button>
          <button 
            className={`nav-tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <Video size={16} /> Exercise Videos
          </button>
          <button 
            className={`nav-tab-btn ${activeTab === 'equipment' ? 'active' : ''}`}
            onClick={() => setActiveTab('equipment')}
          >
            <Wrench size={16} /> Gym Equipment Guide
          </button>
        </nav>

        {/* Tab 1: Weekly Workout Schedule */}
        {activeTab === 'workout' && (
          <WorkoutSchedule 
            onStartWorkout={(day) => setActiveWorkoutDay(day)}
            onOpenVideo={(ex) => setActiveVideoExercise(ex)}
            completedDays={completedDays}
          />
        )}

        {/* Tab 2: Hostel Mess Diet Coach */}
        {activeTab === 'diet' && (
          <HostelDietCoach />
        )}

        {/* Tab 3: 1-Tap Meal & Calorie Logger */}
        {activeTab === 'tracker' && (
          <CalorieTracker />
        )}

        {/* Tab 4: Cardio & Air Bike Hub */}
        {activeTab === 'cardio' && (
          <CardioHub />
        )}

        {/* Tab 5: 91kg Transformation & Water Roadmap */}
        {activeTab === 'progress' && (
          <ProgressDashboard onWeightUpdate={handleWeightUpdate} />
        )}

        {/* Tab 6: Video Vault */}
        {activeTab === 'videos' && (
          <VideoVault onOpenVideo={(ex) => setActiveVideoExercise(ex)} />
        )}

        {/* Tab 7: Gym Equipment Blueprint */}
        {activeTab === 'equipment' && (
          <GymEquipmentGuide />
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">
        <button 
          className={`bottom-nav-item ${activeTab === 'workout' ? 'active' : ''}`}
          onClick={() => setActiveTab('workout')}
        >
          <Dumbbell size={18} />
          <span>Workouts</span>
        </button>
        <button 
          className={`bottom-nav-item ${activeTab === 'diet' ? 'active' : ''}`}
          onClick={() => setActiveTab('diet')}
        >
          <Utensils size={18} />
          <span>Mess Diet</span>
        </button>
        <button 
          className={`bottom-nav-item ${activeTab === 'tracker' ? 'active' : ''}`}
          onClick={() => setActiveTab('tracker')}
        >
          <Flame size={18} />
          <span>Macros</span>
        </button>
        <button 
          className={`bottom-nav-item ${activeTab === 'cardio' ? 'active' : ''}`}
          onClick={() => setActiveTab('cardio')}
        >
          <Activity size={18} />
          <span>Cardio</span>
        </button>
        <button 
          className={`bottom-nav-item ${activeTab === 'progress' ? 'active' : ''}`}
          onClick={() => setActiveTab('progress')}
        >
          <TrendingUp size={18} />
          <span>91kg Road</span>
        </button>
      </nav>

      {/* Fullscreen Live Active Workout Modal */}
      {activeWorkoutDay && (
        <ActiveWorkoutModal 
          dayPlan={activeWorkoutDay}
          onClose={() => setActiveWorkoutDay(null)}
          onCompleteWorkout={handleCompleteWorkout}
          onOpenVideo={(ex) => setActiveVideoExercise(ex)}
        />
      )}

      {/* Exercise Video Tutorial Modal */}
      {activeVideoExercise && (
        <ExerciseVideoModal 
          exercise={activeVideoExercise}
          onClose={() => setActiveVideoExercise(null)}
        />
      )}
    </div>
  );
}

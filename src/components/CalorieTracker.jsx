import React, { useState, useEffect } from 'react';
import { Plus, Trash2, RotateCcw, Check, Sparkles, PieChart, Flame, Beef, Droplets } from 'lucide-react';
import { userProfile } from '../data/hostelDietData';

const COMMON_HOSTEL_FOODS = [
  { id: 'h_rice_1', name: '1 Cup Rice (150g)', calories: 195, protein: 4, carbs: 43, fats: 0.5, category: 'Mess' },
  { id: 'h_dal_2', name: '2 Bowls Dal (250ml)', calories: 180, protein: 9, carbs: 26, fats: 4, category: 'Mess' },
  { id: 'h_roti_3', name: '3 Rotis (Phulkas)', calories: 240, protein: 8, carbs: 48, fats: 2, category: 'Mess' },
  { id: 'h_curd_rice', name: '1 Small Bowl Curd Rice', calories: 135, protein: 4, carbs: 20, fats: 4, category: 'Mess' },
  { id: 'h_sabzi', name: '1 Cup Mess Sabzi/Curry', calories: 130, protein: 3, carbs: 14, fats: 7, category: 'Mess' },
  { id: 'h_idli_3', name: '3 Idlis + Sambar', calories: 220, protein: 7, carbs: 45, fats: 2, category: 'Breakfast' },
  { id: 'h_poha', name: '1 Bowl Poha + Peanuts', calories: 260, protein: 6, carbs: 48, fats: 6, category: 'Breakfast' },
  { id: 'h_tuesday_1_egg', name: '🥚 1 Mess Boiled Egg (Tuesday)', calories: 70, protein: 6, carbs: 0.5, fats: 5, category: 'Mess' },
  { id: 'h_extra_stall_eggs', name: '🥚 2 Extra Outside Stall Eggs', calories: 140, protein: 12, carbs: 1, fats: 10, category: 'Protein' },
  { id: 'h_friday_friedrice', name: '🍳 1.5 Cups Egg Fried Rice (Friday)', calories: 420, protein: 14, carbs: 65, fats: 12, category: 'Special' },
  { id: 'h_soya_chunks', name: '🔥 40g Soya Chunks Kettle Soak', calories: 140, protein: 21, carbs: 13, fats: 0.5, category: 'Protein' },
  { id: 'h_roasted_chana', name: '🥜 50g Roasted Chana (Snack)', calories: 185, protein: 10, carbs: 28, fats: 3, category: 'Snack' },
  { id: 'h_amul_lassi', name: '🥛 1 Pack Amul Protein Lassi', calories: 85, protein: 15, carbs: 5, fats: 0.5, category: 'Protein' },
  { id: 'h_whey_scoop', name: '⚡ 1 Scoop Whey Protein', calories: 120, protein: 24, carbs: 2, fats: 1.5, category: 'Protein' },
  { id: 'h_chai', name: '1 Cup Hostel Chai / Coffee', calories: 65, protein: 1.5, carbs: 10, fats: 2, category: 'Drink' }
];

export const STORAGE_KEY_MEALS = 'hostelfit_daily_meals_log';

export default function CalorieTracker() {
  const [loggedItems, setLoggedItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_MEALS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [customName, setCustomName] = useState('');
  const [customCal, setCustomCal] = useState('');
  const [customProt, setCustomProt] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MEALS, JSON.stringify(loggedItems));
    } catch (e) {
      console.warn("Save meal error", e);
    }
  }, [loggedItems]);

  const addFood = (food) => {
    const newEntry = {
      ...food,
      instanceId: `${food.id}_${Date.now()}`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setLoggedItems(prev => [newEntry, ...prev]);
  };

  const addCustomFood = (e) => {
    e.preventDefault();
    if (!customName || !customCal) return;
    const item = {
      id: `custom_${Date.now()}`,
      name: customName,
      calories: Number(customCal) || 0,
      protein: Number(customProt) || 0,
      carbs: 0,
      fats: 0,
      category: 'Custom'
    };
    addFood(item);
    setCustomName('');
    setCustomCal('');
    setCustomProt('');
  };

  const removeFood = (instanceId) => {
    setLoggedItems(prev => prev.filter(item => item.instanceId !== instanceId));
  };

  const resetDay = () => {
    if (window.confirm("Reset all logged meals for today?")) {
      setLoggedItems([]);
    }
  };

  // Totals
  const totalCalories = loggedItems.reduce((sum, item) => sum + (Number(item.calories) || 0), 0);
  const totalProtein = loggedItems.reduce((sum, item) => sum + (Number(item.protein) || 0), 0);
  
  const remainingCalories = userProfile.targetCalories - totalCalories;
  const calPercent = Math.min(100, Math.round((totalCalories / userProfile.targetCalories) * 100));
  const protPercent = Math.min(100, Math.round((totalProtein / userProfile.targetProtein) * 100));

  return (
    <div className="animate-fade-in">
      {/* Top Macro Summary Dashboard */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        marginBottom: '28px'
      }}>
        {/* Calorie Card */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Daily Calories Budget</span>
              <div style={{ fontSize: '28px', fontWeight: '800', color: totalCalories > userProfile.targetCalories ? 'var(--accent-red)' : 'var(--accent-emerald)', marginTop: '2px' }}>
                {totalCalories} <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>/ {userProfile.targetCalories} kcal</span>
              </div>
            </div>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-emerald)'
            }}>
              <Flame size={22} />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="macro-bar-wrap">
            <div className="macro-bar-track">
              <div 
                className="macro-bar-fill"
                style={{
                  width: `${calPercent}%`,
                  background: totalCalories > userProfile.targetCalories ? 'var(--accent-red)' : 'var(--gradient-main)'
                }}
              />
            </div>
            <div className="macro-bar-label" style={{ marginTop: '6px' }}>
              <span style={{ color: 'var(--text-muted)' }}>{calPercent}% consumed</span>
              <span style={{ fontWeight: '700', color: remainingCalories >= 0 ? 'var(--accent-emerald)' : 'var(--accent-red)' }}>
                {remainingCalories >= 0 ? `${remainingCalories} kcal deficit remaining` : `${Math.abs(remainingCalories)} kcal surplus`}
              </span>
            </div>
          </div>
        </div>

        {/* Protein Card */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Protein Goal</span>
              <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--accent-cyan)', marginTop: '2px' }}>
                {totalProtein}g <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>/ {userProfile.targetProtein}g</span>
              </div>
            </div>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(6, 182, 212, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)'
            }}>
              <Beef size={22} />
            </div>
          </div>

          {/* Protein Bar */}
          <div className="macro-bar-wrap">
            <div className="macro-bar-track">
              <div 
                className="macro-bar-fill"
                style={{
                  width: `${protPercent}%`,
                  background: 'linear-gradient(90deg, #06b6d4, #3b82f6)'
                }}
              />
            </div>
            <div className="macro-bar-label" style={{ marginTop: '6px' }}>
              <span style={{ color: 'var(--text-muted)' }}>{protPercent}% target hit</span>
              <span style={{ fontWeight: '700', color: 'var(--accent-cyan)' }}>
                {Math.max(0, userProfile.targetProtein - totalProtein)}g protein to go
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section: Quick Hostel Food Tapper + Logged Table */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
        {/* Left Column: Quick Tappers */}
        <div>
          <div className="workout-day-card">
            <h3 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="var(--accent-amber)" />
              1-Tap Hostel Food Logger
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Tap any item below to add to your daily hostel diary:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', marginBottom: '20px' }}>
              {COMMON_HOSTEL_FOODS.map((food) => (
                <button
                  key={food.id}
                  onClick={() => addFood(food)}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--card-border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '10px 12px',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-emerald)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--card-border)'}
                >
                  <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {food.name}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    <span>{food.calories} kcal</span>
                    <span style={{ color: 'var(--accent-emerald)', fontWeight: '700' }}>+{food.protein}g protein</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Food Form */}
            <form onSubmit={addCustomFood} style={{
              background: 'var(--bg-tertiary)',
              padding: '14px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap'
            }}>
              <input 
                type="text" 
                placeholder="Custom food name (e.g. Samosa, Apple)"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                style={{ flex: '2', minWidth: '160px', padding: '8px 12px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: '4px', fontSize: '12px' }}
              />
              <input 
                type="number" 
                placeholder="Calories"
                value={customCal}
                onChange={(e) => setCustomCal(e.target.value)}
                style={{ width: '80px', padding: '8px 12px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: '4px', fontSize: '12px' }}
              />
              <input 
                type="number" 
                placeholder="Protein (g)"
                value={customProt}
                onChange={(e) => setCustomProt(e.target.value)}
                style={{ width: '85px', padding: '8px 12px', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: '4px', fontSize: '12px' }}
              />
              <button 
                type="submit"
                className="start-workout-btn"
                style={{ padding: '8px 16px', fontSize: '12px' }}
              >
                <Plus size={14} /> Add
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Logged Meals History */}
        <div>
          <div className="workout-day-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '17px', color: 'var(--text-primary)' }}>
                Today's Plate ({loggedItems.length} items)
              </h3>
              {loggedItems.length > 0 && (
                <button 
                  onClick={resetDay}
                  style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <RotateCcw size={12} /> Clear Day
                </button>
              )}
            </div>

            {loggedItems.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '30px 10px', color: 'var(--text-muted)', fontSize: '13px' }}>
                🍽️ No food logged yet today.<br />Tap any hostel staple on the left to track your macros!
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '420px', overflowY: 'auto' }}>
                {loggedItems.map((item) => (
                  <div 
                    key={item.instanceId}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--card-border)',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        {item.calories} kcal • <span style={{ color: 'var(--accent-emerald)' }}>{item.protein}g P</span> • {item.time}
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFood(item.instanceId)}
                      style={{ color: 'var(--text-muted)', padding: '4px' }}
                      title="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

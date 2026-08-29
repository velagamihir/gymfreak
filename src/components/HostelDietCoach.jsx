import React, { useState } from 'react';
import { Utensils, Egg, Flame, ShieldAlert, Sparkles, Check, AlertCircle, Info, ChevronDown, ChevronUp, Coffee, Sun, Moon } from 'lucide-react';
import { userProfile, messMealSchedule, hostelProteinHacks, dalRealityCheck } from '../data/hostelDietData';

export default function HostelDietCoach() {
  const [activeMealTab, setActiveMealTab] = useState('lunch');
  const [expandedHackId, setExpandedHackId] = useState(null);

  const toggleHack = (id) => {
    setExpandedHackId(prev => prev === id ? null : id);
  };

  return (
    <div className="animate-fade-in">
      {/* Top Banner: Macro Target for 21yo, 91kg Male */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.12) 100%)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        marginBottom: '28px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="brand-badge" style={{ marginBottom: '6px' }}>
              🍛 91kg Indian Hostel Mess Nutrition Blueprint
            </div>
            <h2 style={{ fontSize: '22px', color: 'var(--text-primary)' }}>
              Deficit Target: 1,950 kcal & 140g Protein
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '650px', marginTop: '4px' }}>
              Tailored directly to your daily mess meals: breakfast rotation, rice-dal-curry lunch, 3 rotis + curd rice dinner, Tuesday boiled eggs, and Friday egg fried rice!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div className="metric-card">
              <div className="metric-value">1,950</div>
              <div className="metric-label">Daily Calories</div>
            </div>
            <div className="metric-card">
              <div className="metric-value" style={{ color: 'var(--accent-cyan)' }}>140g</div>
              <div className="metric-label">Protein Target</div>
            </div>
            <div className="metric-card">
              <div className="metric-value" style={{ color: 'var(--accent-amber)' }}>3.5 L</div>
              <div className="metric-label">Water Target</div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Days Alert: Tuesday (Eggs) & Friday (Egg Fried Rice) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '28px' }}>
        <div style={{
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '20px' }}>🥚</span>
            <h3 style={{ fontSize: '16px', color: 'var(--accent-emerald)' }}>Tuesday: 1 Boiled Egg Mess Day</h3>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            <strong>Your Action:</strong> Take your <strong>1 boiled egg</strong> from the mess token counter (gives <strong>+6g protein</strong>, 70 kcal). To hit your daily 140g target without extra carbs, add <strong>40g kettle-soaked Soya Chunks (+21g protein)</strong> or <strong>1 Amul Protein Lassi (+15g protein)</strong> to your room routine.
          </p>
        </div>

        <div style={{
          background: 'rgba(236, 72, 153, 0.08)',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '20px' }}>🍳</span>
            <h3 style={{ fontSize: '16px', color: 'var(--accent-pink)' }}>Friday: Egg Fried Rice Night</h3>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            <strong>Your Action:</strong> Limit yourself to <strong>1.5 cups</strong> of egg fried rice. Ask the cook for extra egg pieces if possible. Avoid oily fried Manchurian/gravies on the side to stay inside your 1,950 calorie budget.
          </p>
        </div>
      </div>

      {/* Dal Reality Check Alert */}
      <div style={{
        background: 'rgba(245, 158, 11, 0.08)',
        border: '1px solid rgba(245, 158, 11, 0.25)',
        borderRadius: 'var(--radius-md)',
        padding: '18px 20px',
        marginBottom: '28px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <ShieldAlert size={20} color="var(--accent-amber)" />
          <h3 style={{ fontSize: '16px', color: 'var(--accent-amber)' }}>
            {dalRealityCheck.truth}
          </h3>
        </div>
        <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {dalRealityCheck.points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
      </div>

      {/* Hostel Mess Meals Breakdown (Breakfast, Lunch, Dinner) */}
      <div className="workout-day-card" style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Utensils size={18} color="var(--accent-emerald)" />
          Hostel Mess Daily Meal Breakdown & Exact Portions
        </h3>

        {/* Meal Selector Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <button
            className={`preset-chip ${activeMealTab === 'breakfast' ? 'active' : ''}`}
            onClick={() => setActiveMealTab('breakfast')}
          >
            🌅 Breakfast Rotation
          </button>
          <button
            className={`preset-chip ${activeMealTab === 'lunch' ? 'active' : ''}`}
            onClick={() => setActiveMealTab('lunch')}
          >
            ☀️ Daily Lunch (Rice + Dal + Curry)
          </button>
          <button
            className={`preset-chip ${activeMealTab === 'dinner' ? 'active' : ''}`}
            onClick={() => setActiveMealTab('dinner')}
          >
            🌙 Daily Dinner (3 Rotis + Curd Rice)
          </button>
        </div>

        {/* Tab 1: Breakfast */}
        {activeMealTab === 'breakfast' && (
          <div className="animate-fade-in">
            <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
              <div style={{ fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                {messMealSchedule.breakfast.title} ({messMealSchedule.breakfast.timing})
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                {messMealSchedule.breakfast.goldenRule}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                {messMealSchedule.breakfast.items.map((item, i) => (
                  <div key={i} style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{item.name}</span>
                      <span style={{ color: 'var(--accent-emerald)', fontSize: '12px' }}>~{item.calories} kcal</span>
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--accent-cyan)', margin: '2px 0' }}>
                      {item.protein}g Protein | {item.carbs}g Carbs | {item.fats}g Fats
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      💡 {item.tip}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Lunch */}
        {activeMealTab === 'lunch' && (
          <div className="animate-fade-in">
            <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
              <div style={{ fontWeight: '700', color: 'var(--accent-emerald)', marginBottom: '4px' }}>
                {messMealSchedule.lunch.title} ({messMealSchedule.lunch.timing})
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '13px',
                color: 'var(--text-primary)',
                marginBottom: '14px'
              }}>
                ⭐ <strong>The Hostel Half-Plate Rule:</strong> Fill 1/2 of your mess thali with raw salad & sabzi, 1/4th with 1 cup rice, and 1/4th with 2 thick bowls of dal!
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
                {messMealSchedule.lunch.breakdown.map((b, i) => (
                  <div key={i} style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)' }}>
                      {b.item}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--accent-cyan)', margin: '4px 0' }}>
                      {b.calories} kcal | {b.protein}g Protein | {b.carbs}g Carbs
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      <strong>Guide:</strong> {b.verdict}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Dinner */}
        {activeMealTab === 'dinner' && (
          <div className="animate-fade-in">
            <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
              <div style={{ fontWeight: '700', color: 'var(--accent-purple)', marginBottom: '4px' }}>
                {messMealSchedule.dinner.title} ({messMealSchedule.dinner.timing})
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                3 Rotis + Curry + 1 small bowl of Curd Rice is ideal. Curd provides natural probiotics for deep sleep and smooth digestion.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
                {messMealSchedule.dinner.standardPlan.map((s, i) => (
                  <div key={i} style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)' }}>
                      {s.item}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--accent-cyan)', margin: '4px 0' }}>
                      {s.calories} kcal | {s.protein}g Protein | {s.carbs}g Carbs
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      <strong>Rule:</strong> {s.verdict}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 6 Zero-Cooking Hostel Room Protein Booster Hacks */}
      <div>
        <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={20} color="var(--accent-emerald)" />
          6 Zero-Cooking Hostel Room Protein Hacks (Hit 140g Daily)
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '18px' }}>
          Since your mess only has eggs on Tuesday and Dal on other days, use these easy, student-budget room hacks that require <strong>no stove or kitchen</strong>:
        </p>

        <div className="protein-hacks-grid">
          {hostelProteinHacks.map((hack) => (
            <div key={hack.id} className="hack-card">
              <div>
                <div className="hack-header">
                  <h4 style={{ fontSize: '15px', color: 'var(--text-primary)' }}>
                    {hack.title}
                  </h4>
                  <span className="ex-badge" style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)' }}>
                    {hack.proteinPerServing}
                  </span>
                </div>

                <div style={{ fontSize: '11px', color: 'var(--accent-amber)', fontWeight: '600', marginBottom: '8px' }}>
                  {hack.tag} • {hack.calories}
                </div>

                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                  {hack.howTo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

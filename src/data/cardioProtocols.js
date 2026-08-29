// Cardio Protocols tailored specifically to the gym's 3 cardio machines:
// 1. Dual-Action Air Bike (arms + legs)
// 2. Treadmill (with incline)
// 3. Stationary Cycle (legs only)

export const cardioProtocols = [
  {
    id: "airbike_tabata",
    title: "Dual-Action Air Bike: 4-Min Tabata Torcher",
    machine: "Air Bike (Hands & Legs)",
    intensity: "Extreme HIIT (🔥 120-150 kcal + EPOC Burn)",
    duration: "4 Minutes",
    rounds: 8,
    workSec: 20,
    restSec: 10,
    description: "The most time-efficient fat-burning protocol known in sports science. Causes an Afterburn effect (EPOC) that burns calories for up to 14 hours.",
    steps: [
      "1 min slow warm-up pedal at 50 RPM.",
      "ROUND 1-8: Sprint ALL-OUT for 20 seconds pushing handles and driving legs.",
      "Coast/Rest for 10 seconds between each round.",
      "1 min easy cool-down."
    ],
    recommendedDays: ["Tuesday (Pull A)", "Friday (Upper Hypertrophy)"]
  },
  {
    id: "treadmill_incline_walk",
    title: "The 12-3-30 Incline Fat Oxidation Walk",
    machine: "Treadmill",
    intensity: "Zone 2 Low-Impact Cardio (🔥 250-300 kcal)",
    duration: "25 - 30 Minutes",
    workSec: 1800,
    restSec: 0,
    description: "The gold-standard cardio for 90kg+ bodyweight. Walking at high incline targets pure triglycerides (body fat) while causing 0 stress on knees.",
    settings: {
      incline: "10% - 12%",
      speed: "4.8 km/h (3.0 mph)",
      handrails: "DO NOT HOLD HANDRAILS"
    },
    steps: [
      "Set incline to 6% for 2 minutes to warm up calf tendons.",
      "Raise incline to 10% - 12%, set speed to 4.8 km/h.",
      "Swing arms rhythmically at your sides with upright posture.",
      "Maintain for 20-30 minutes continuously."
    ],
    recommendedDays: ["Monday (Push A)", "Thursday (Active Recovery)", "Saturday (Metabolic)"]
  },
  {
    id: "cycle_zone2",
    title: "Stationary Bike: 15-Min Post-Lift Glycogen Flush",
    machine: "Stationary Bike (Legs Only)",
    intensity: "Steady State LISS (🔥 120-150 kcal)",
    duration: "15 Minutes",
    workSec: 900,
    restSec: 0,
    description: "Low-resistance, steady cadence spin designed to flush metabolic waste from leg muscles and burn fatty acids.",
    settings: {
      cadence: "75 - 85 RPM",
      resistance: "Level 4 - 6 (Moderate)"
    },
    steps: [
      "Seat height at hip level.",
      "Pedal smoothly without bouncing on saddle.",
      "Keep breathing through nose to stay in aerobic zone.",
      "Cool down for final 2 minutes at lowest resistance."
    ],
    recommendedDays: ["Wednesday (Legs)", "Thursday (Recovery)"]
  }
];

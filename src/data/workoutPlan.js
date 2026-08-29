// 7-Day Complete Weekly Split tailored specifically for hostel gym equipment:
// - Straight Barbell + Plates
// - Crooked (EZ-Curl) Barbell + Plates
// - Dumbbells 2.5kg - 12.5kg
// - Dual-Action Air Bike (Arms + Legs move)
// - Stationary Cycle (Legs only)
// - Treadmill

export const weeklyPlan = [
  {
    id: "day1",
    dayName: "Monday",
    title: "Push Power & Incline Cardio",
    subtitle: "Chest, Front/Side Delts, Triceps & Fat-Burn Walk",
    tag: "Push Day A",
    color: "#3b82f6",
    duration: "55-65 mins",
    caloriesBurn: "~420 kcal",
    equipmentNeeded: ["Straight Barbell", "Dumbbells", "EZ-Bar", "Treadmill"],
    warmup: [
      "Arm Circles & Shoulder Dislocates (2 mins)",
      "Push-ups on knees or floor (2 sets x 10 reps)",
      "Treadmill brisk walk at 5 km/h (3 mins)"
    ],
    exercises: [
      {
        id: "ex_bb_bench",
        name: "Flat Barbell Bench / Floor Press",
        target: "Chest & Anterior Delts",
        equipment: "Straight Barbell",
        sets: 4,
        reps: "8 - 10 reps",
        rest: 90,
        tip: "Plant feet firmly. Arch lower back slightly, retract shoulder blades, and touch mid-chest.",
        videoId: "rT7DgCr-3pg",
        channel: "Jeff Nippard",
        intensity: "Heavy Compound"
      },
      {
        id: "ex_db_incline_press",
        name: "Incline / Flat Dumbbell Press",
        target: "Upper Chest & Triceps",
        equipment: "Dumbbells (10 - 12.5 kg)",
        sets: 3,
        reps: "10 - 12 reps",
        rest: 60,
        tip: "Since max DB is 12.5kg, use a 3-second slow eccentric (lowering) phase to maximize muscle growth.",
        videoId: "8iPEnn-ltC8",
        channel: "Renaissance Periodization",
        intensity: "Hypertrophy"
      },
      {
        id: "ex_bb_ohp",
        name: "Standing Barbell Overhead Press (OHP)",
        target: "Shoulders (Anterior & Lateral Delts) & Core",
        equipment: "Straight Barbell",
        sets: 3,
        reps: "8 - 10 reps",
        rest: 90,
        tip: "Squeeze glutes and brace core. Push the bar straight up, moving head slightly back then through.",
        videoId: "2yjwXTZQDDI",
        channel: "Alan Thrall",
        intensity: "Heavy Compound"
      },
      {
        id: "ex_db_lat_raise",
        name: "Standing Dumbbell Lateral Raises",
        target: "Side Delts (Shoulder Width & V-Taper)",
        equipment: "Dumbbells (5 - 7.5 kg)",
        sets: 4,
        reps: "12 - 15 reps",
        rest: 45,
        tip: "Slight forward lean. Lead with your elbows, do not swing. Pause 1s at the top for maximum burn.",
        videoId: "3VcKaXpzqRo",
        channel: "Jeff Nippard",
        intensity: "Burnout"
      },
      {
        id: "ex_ez_skullcrushers",
        name: "EZ-Bar Lying Skull Crushers",
        target: "Triceps Long Head",
        equipment: "Crooked Barbell (EZ-Bar)",
        sets: 3,
        reps: "10 - 12 reps",
        rest: 60,
        tip: "The curved grip protects your wrists! Keep elbows pinned in place and lower bar towards your forehead.",
        videoId: "d_KZxkY_0cM",
        channel: "Scott Herman Fitness",
        intensity: "Isolation"
      },
      {
        id: "ex_treadmill_incline",
        name: "Post-Lift Incline Fat Oxidation Walk",
        target: "Fat Loss & Cardiovascular Base",
        equipment: "Treadmill",
        sets: 1,
        reps: "15 - 20 mins",
        rest: 0,
        tip: "Set incline to 8-12%, speed to 4.5 - 5.0 km/h. Do not hold handrails for maximum core & calorie burn.",
        videoId: "lCg_gh_fppI",
        channel: "Fitness Cardio Hub",
        intensity: "LISS Cardio"
      }
    ]
  },
  {
    id: "day2",
    dayName: "Tuesday",
    title: "Pull Strength & Air Bike Fat Burn",
    subtitle: "Back, Lats, Biceps, Rear Delts + Air Bike HIIT",
    tag: "Pull Day A (1 Boiled Egg Day 🥚)",
    color: "#10b981",
    duration: "55-65 mins",
    caloriesBurn: "~450 kcal",
    equipmentNeeded: ["Straight Barbell", "Crooked Barbell", "Dumbbells", "Air Bike"],
    warmup: [
      "Cat-Cow & Thoracic Rotations (2 mins)",
      "Band or light dumbbell pull-aparts (2 sets x 15 reps)",
      "Air bike slow pedal (2 mins)"
    ],
    dietHighlight: "Tuesday Mess Note: Mess provides 1 Boiled Egg (+6g protein). Combine it with 40g kettle-soaked Soya Chunks (+21g protein) or 1 Amul Protein Lassi to power your back & bicep recovery.",
    exercises: [
      {
        id: "ex_bb_bent_row",
        name: "Barbell Bent-Over Row",
        target: "Upper Back, Lats & Rhomboids",
        equipment: "Straight Barbell",
        sets: 4,
        reps: "8 - 10 reps",
        rest: 90,
        tip: "Hinge at hips at 45 degrees, keep back straight, and pull the bar into your belly button.",
        videoId: "6FZHJGzMFEc",
        channel: "Buff Dudes",
        intensity: "Heavy Compound"
      },
      {
        id: "ex_db_single_row",
        name: "Single-Arm Dumbbell Row",
        target: "Lats & Core Stability",
        equipment: "Dumbbells (10 - 12.5 kg)",
        sets: 3,
        reps: "10 - 12 reps / arm",
        rest: 60,
        tip: "Support one hand on a bench/rack. Pull dumbbell like starting a lawnmower, driving elbow back.",
        videoId: "roCP6wCXPqo",
        channel: "Athlean-X",
        intensity: "Unilateral"
      },
      {
        id: "ex_ez_bicep_curl",
        name: "EZ-Bar Standing Bicep Curls",
        target: "Biceps (Short & Long Head)",
        equipment: "Crooked Barbell (EZ-Bar)",
        sets: 4,
        reps: "10 - 12 reps",
        rest: 60,
        tip: "Use the outer curved groove. Do not swing your lower back. Control the 2-second eccentric lowering.",
        videoId: "zH3_8g7w9lQ",
        channel: "Scott Herman Fitness",
        intensity: "Hypertrophy"
      },
      {
        id: "ex_db_hammer_curl",
        name: "Dumbbell Hammer Curls",
        target: "Brachialis & Forearms (Arm Thickness)",
        equipment: "Dumbbells (7.5 - 10 kg)",
        sets: 3,
        reps: "12 reps",
        rest: 45,
        tip: "Palms facing each other throughout the curl. Squeeze forearm at the peak.",
        videoId: "zC3nLlEvin4",
        channel: "Jeff Nippard",
        intensity: "Isolation"
      },
      {
        id: "ex_db_rear_delt",
        name: "Bent-Over Dumbbell Rear Delt Flyes",
        target: "Rear Delts & Upper Traps (Posture)",
        equipment: "Dumbbells (5 - 7.5 kg)",
        sets: 3,
        reps: "15 reps",
        rest: 45,
        tip: "Crucial for fixing rounded shoulders from studying. Squeeze shoulder blades at top.",
        videoId: "0G2_XV7slIg",
        channel: "Renaissance Periodization",
        intensity: "Isolation"
      },
      {
        id: "ex_airbike_hiit",
        name: "Dual-Action Air Bike Tabata Finisher",
        target: "Extreme Metabolic Fat Burn & VO2 Max",
        equipment: "Air Bike (Arms + Legs)",
        sets: 1,
        reps: "8 Rounds (20s sprint / 10s rest = 4 mins)",
        rest: 0,
        tip: "Push and pull with arms while pumping legs. 20s at 90% max effort, 10s coast. Burns calories for hours post-workout!",
        videoId: "B3eU4976R-M",
        channel: "CrossFit / Conditioning Hub",
        intensity: "HIIT Protocol"
      }
    ]
  },
  {
    id: "day3",
    dayName: "Wednesday",
    title: "Lower Body Foundation & Abs",
    subtitle: "Quads, Hamstrings, Glutes, Calves & Core",
    tag: "Legs & Core",
    color: "#f59e0b",
    duration: "55-60 mins",
    caloriesBurn: "~480 kcal",
    equipmentNeeded: ["Straight Barbell", "Dumbbells", "Stationary Cycle"],
    warmup: [
      "Bodyweight Squats (2 sets x 15 reps)",
      "Leg Swings & Hip Openers (2 mins)",
      "Stationary bike light pedal (3 mins)"
    ],
    exercises: [
      {
        id: "ex_bb_squat",
        name: "Barbell Back Squat",
        target: "Quads, Glutes & Core Stability",
        equipment: "Straight Barbell",
        sets: 4,
        reps: "8 - 10 reps",
        rest: 120,
        tip: "At 91kg, protect knees by driving knees out in line with toes. Break parallel if mobility allows.",
        videoId: "bEv6CCg2BC8",
        channel: "Squat University",
        intensity: "Heavy Compound"
      },
      {
        id: "ex_db_rdl",
        name: "Dumbbell Romanian Deadlifts (RDL)",
        target: "Hamstrings, Glutes & Lower Back",
        equipment: "Dumbbells (10 - 12.5 kg)",
        sets: 4,
        reps: "10 - 12 reps",
        rest: 75,
        tip: "Soft bend in knees. Push hips back as if touching a wall behind you until you feel a deep hamstring stretch.",
        videoId: "_oyxCn2iSjU",
        channel: "Jeff Nippard",
        intensity: "Hypertrophy"
      },
      {
        id: "ex_db_lunges",
        name: "Dumbbell Walking / Static Lunges",
        target: "Quads, Glutes & Balance",
        equipment: "Dumbbells (7.5 - 10 kg)",
        sets: 3,
        reps: "10 reps / leg (20 total)",
        rest: 60,
        tip: "Keep chest upright. Don't let your front knee cave inward. Step far enough for 90-degree bend.",
        videoId: "QOVaHwm-Q6U",
        channel: "Buff Dudes",
        intensity: "Unilateral"
      },
      {
        id: "ex_bb_calf_raise",
        name: "Standing Barbell / DB Calf Raises",
        target: "Gastrocnemius & Soleus",
        equipment: "Straight Barbell or Dumbbells",
        sets: 4,
        reps: "15 - 20 reps",
        rest: 45,
        tip: "Stand on a weight plate edge for extra range of motion. Pause 2s at peak contraction.",
        videoId: "gwLzBJYoWlI",
        channel: "Scott Herman Fitness",
        intensity: "Burnout"
      },
      {
        id: "ex_core_plank_legraise",
        name: "Hanging / Floor Leg Raises + Plank",
        target: "Lower Abs & Deep Core",
        equipment: "Floor Mat / Barbell Rack",
        sets: 3,
        reps: "15 Leg Raises + 45s Plank",
        rest: 45,
        tip: "Tilt pelvis backwards to engage lower abs instead of hip flexors.",
        videoId: "Pr1ieGZ5tkE",
        channel: "Athlean-X",
        intensity: "Core Circuit"
      },
      {
        id: "ex_cycle_cooldown",
        name: "Stationary Cycle Flush & Fat Burn",
        target: "Lactic Acid Clearance & LISS",
        equipment: "Stationary Bike (Legs only)",
        sets: 1,
        reps: "10 - 15 mins",
        rest: 0,
        tip: "Light-to-moderate resistance at 75-80 RPM. Flushes leg muscle soreness and burns ~100 kcal.",
        videoId: "XvRsdGf6wN4",
        channel: "Global Cycling Network",
        intensity: "Recovery Cardio"
      }
    ]
  },
  {
    id: "day4",
    dayName: "Thursday",
    title: "Active Recovery & Low-Impact Cardio",
    subtitle: "Mobility Flow, Joint Health & 8,000 Steps Target",
    tag: "Active Recovery",
    color: "#8b5cf6",
    duration: "40-45 mins",
    caloriesBurn: "~300 kcal",
    equipmentNeeded: ["Treadmill", "Stationary Bike", "Bodyweight"],
    warmup: [
      "Full-body dynamic mobility & hip stretches (10 mins)",
      "Deep breathing & shoulder foam roll / stretching"
    ],
    exercises: [
      {
        id: "ex_treadmill_steady",
        name: "Treadmill 12-3-30 Fat Loss Incline Walk",
        target: "Zone 2 Fat Oxidation (Preserves Muscle)",
        equipment: "Treadmill",
        sets: 1,
        reps: "25 - 30 mins",
        rest: 0,
        tip: "Incline: 10-12%, Speed: 4.8 km/h (3.0 mph). Ideal heart rate zone (120-135 BPM) for maximum body fat burning without taxing nervous system.",
        videoId: "wZ_2j0N048Y",
        channel: "Cardio Health",
        intensity: "Zone 2 Cardio"
      },
      {
        id: "ex_core_deadbug_bird",
        name: "Deadbugs & Bird-Dogs Core Stability",
        target: "Transverse Abdominis & Lower Back Shield",
        equipment: "Bodyweight",
        sets: 3,
        reps: "12 reps / side",
        rest: 45,
        tip: "Press your lower back flat into the floor. Move with control.",
        videoId: "4XLEnwUr1d8",
        channel: "Squat University",
        intensity: "Rehab & Core"
      },
      {
        id: "ex_cycle_liss",
        name: "Stationary Bike Easy Spin",
        target: "Joint Lubrication & Circulation",
        equipment: "Stationary Bike",
        sets: 1,
        reps: "10 mins",
        rest: 0,
        tip: "Very gentle pedaling. Listen to a podcast or audiobook.",
        videoId: "XvRsdGf6wN4",
        channel: "Recovery Hub",
        intensity: "LISS"
      }
    ]
  },
  {
    id: "day5",
    dayName: "Friday",
    title: "Upper Body Hypertrophy & EZ-Bar Special",
    subtitle: "Chest, Lats, Shoulders, Big Arms + Air Bike",
    tag: "Upper Hypertrophy (Egg Fried Rice Day 🍚)",
    color: "#ec4899",
    duration: "55-60 mins",
    caloriesBurn: "~430 kcal",
    equipmentNeeded: ["Straight Barbell", "Crooked Barbell", "Dumbbells", "Air Bike"],
    warmup: [
      "Shoulder Rotator Cuff Warmup (3 mins)",
      "Pushups + Light Dumbbell Curls (2 sets x 12 reps)",
      "Air bike warm-up (2 mins)"
    ],
    dietHighlight: "Friday Bonus: Egg Fried Rice for dinner! Great post-workout carb reload. Portion guideline: 1.5 cups, eat slowly, avoid extra oily side gravies.",
    exercises: [
      {
        id: "ex_bb_close_bench",
        name: "Close-Grip Barbell Bench / Floor Press",
        target: "Inner Chest & Triceps Overload",
        equipment: "Straight Barbell",
        sets: 4,
        reps: "8 - 10 reps",
        rest: 90,
        tip: "Hands shoulder-width apart (not too narrow). Keep elbows tucked at 45 degrees to blast triceps.",
        videoId: "nEF0bv2FW94",
        channel: "Jeff Nippard",
        intensity: "Heavy Compound"
      },
      {
        id: "ex_ez_upright_row",
        name: "EZ-Bar Upright Rows",
        target: "Side Delts & Upper Traps",
        equipment: "Crooked Barbell (EZ-Bar)",
        sets: 3,
        reps: "10 - 12 reps",
        rest: 60,
        tip: "Use the wide grip on the crooked bar to protect shoulder impingement. Pull elbows high up to chest level.",
        videoId: "jaAV-rD45I0",
        channel: "Scott Herman Fitness",
        intensity: "Hypertrophy"
      },
      {
        id: "ex_db_incline_flyes",
        name: "Dumbbell Chest Flyes",
        target: "Pectoral Stretch & Muscle Fiber Tear",
        equipment: "Dumbbells (7.5 - 10 kg)",
        sets: 3,
        reps: "12 reps",
        rest: 60,
        tip: "Slight bend in elbows. Open arms wide for a deep chest stretch, then hug a big tree at the top.",
        videoId: "eozdVDA78K0",
        channel: "Athlean-X",
        intensity: "Hypertrophy"
      },
      {
        id: "ex_ez_21s_curls",
        name: "EZ-Bar '21s' Bicep Finisher",
        target: "Bicep Peak & Intense Muscle Pump",
        equipment: "Crooked Barbell (EZ-Bar)",
        sets: 3,
        reps: "21 reps (7 lower + 7 upper + 7 full)",
        rest: 75,
        tip: "7 reps bottom half, 7 reps top half, 7 full reps without stopping. Legendary bicep pump builder!",
        videoId: "uO_CNYIDd2A",
        channel: "Buff Dudes",
        intensity: "Shock Technique"
      },
      {
        id: "ex_db_overhead_tricep",
        name: "Seated Single/Double Dumbbell Tricep Extension",
        target: "Triceps Long Head (Back of Arm)",
        equipment: "Dumbbells (10 - 12.5 kg)",
        sets: 3,
        reps: "12 - 15 reps",
        rest: 60,
        tip: "Hold one 12.5kg dumbbell with both hands overhead. Lower deep behind your neck, flare elbows slightly.",
        videoId: "-Vyt2QdS839",
        channel: "Renaissance Periodization",
        intensity: "Isolation"
      },
      {
        id: "ex_airbike_pyramid",
        name: "Air Bike 10-Min Calorie Shredder",
        target: "High Output Conditioning",
        equipment: "Air Bike (Arms + Legs)",
        sets: 1,
        reps: "10 mins (1 min moderate, 30s hard, repeat)",
        rest: 0,
        tip: "Sync arm push-pull rhythm with pedal drive. Burn ~120-150 kcal in 10 mins.",
        videoId: "B3eU4976R-M",
        channel: "Conditioning Lab",
        intensity: "Interval Cardio"
      }
    ]
  },
  {
    id: "day6",
    dayName: "Saturday",
    title: "Full-Body Metabolic Complex & Deadlifts",
    subtitle: "Posterior Chain, Full-Body Power & Fat Torch",
    tag: "Metabolic Complex",
    color: "#06b6d4",
    duration: "55-60 mins",
    caloriesBurn: "~500 kcal",
    equipmentNeeded: ["Straight Barbell", "Dumbbells", "Treadmill"],
    warmup: [
      "Hips & Hamstring Dynamic Stretch (3 mins)",
      "Light Barbell Good Mornings (2 sets x 10 reps)",
      "Treadmill warmup walk (3 mins)"
    ],
    exercises: [
      {
        id: "ex_bb_deadlift",
        name: "Conventional Barbell Deadlift",
        target: "Full Posterior Chain (Hamstrings, Glutes, Back, Core)",
        equipment: "Straight Barbell",
        sets: 4,
        reps: "6 - 8 reps",
        rest: 120,
        tip: "The king of all exercises for building raw strength and boosting testosterone! Bar stays close to shins.",
        videoId: "op9kVnSso6Q",
        channel: "Alan Thrall",
        intensity: "Heavy Compound"
      },
      {
        id: "ex_db_thrusters",
        name: "Dumbbell Squat-to-Overhead Press (Thrusters)",
        target: "Quads, Shoulders, Triceps & High Heart Rate",
        equipment: "Dumbbells (7.5 - 10 kg)",
        sets: 3,
        reps: "10 - 12 reps",
        rest: 75,
        tip: "Squat down with DBs at shoulder level, then explosively drive up using leg power to press overhead.",
        videoId: "M0UxkC0qIqE",
        channel: "CrossFit Guide",
        intensity: "Full-Body Compound"
      },
      {
        id: "ex_bb_shrugs",
        name: "Heavy Barbell Shrugs",
        target: "Traps & Neck Stability",
        equipment: "Straight Barbell",
        sets: 4,
        reps: "12 - 15 reps",
        rest: 60,
        tip: "Straight up towards your ears. Do NOT roll shoulders in circles. Hold 1s at top.",
        videoId: "cJRVVxmytaM",
        channel: "Scott Herman Fitness",
        intensity: "Hypertrophy"
      },
      {
        id: "ex_db_farmer_walk",
        name: "Dumbbell Farmer's Carry",
        target: "Forearms, Grip Strength, Core & Traps",
        equipment: "Dumbbells (12.5 kg in each hand)",
        sets: 3,
        reps: "45 - 60 seconds walking",
        rest: 60,
        tip: "Grab the heaviest dumbbells (12.5kg each), stand tall, pull shoulders back, and walk with posture.",
        videoId: "Fkzk_Rql4ig",
        channel: "Athlean-X",
        intensity: "Functional Strength"
      },
      {
        id: "ex_treadmill_intervals",
        name: "Treadmill Sprint & Walk Intervals",
        target: "Cardiovascular Endurance & Fat Shred",
        equipment: "Treadmill",
        sets: 1,
        reps: "15 mins (1 min run @ 9km/h, 1 min walk @ 5km/h)",
        rest: 0,
        tip: "Great stamina builder. Stay light on feet, mid-foot strike to protect knees.",
        videoId: "lCg_gh_fppI",
        channel: "Cardio Lab",
        intensity: "HIIT"
      }
    ]
  },
  {
    id: "day7",
    dayName: "Sunday",
    title: "Rest, Weekly Weigh-in & Meal Reset",
    subtitle: "Complete Muscle Recovery, Central Nervous System Reset",
    tag: "Recovery & Check-in",
    color: "#64748b",
    duration: "Full Rest",
    caloriesBurn: "~150 kcal (steps)",
    equipmentNeeded: ["Bodyweight / Optional Walk"],
    warmup: [
      "Light 20-30 min casual outdoor walk with friends",
      "Full body stretching & water hydration check"
    ],
    dietHighlight: "Sunday Routine: Morning empty-stomach weigh-in! Track your weight in the app. Drink at least 3.5 Liters of water and organize your hostel protein stash (soya chunks, roasted chana).",
    exercises: [
      {
        id: "ex_sunday_weighin",
        name: "Morning Empty-Stomach Weigh-in",
        target: "Progress Tracking (91kg -> Target)",
        equipment: "Weighing Scale",
        sets: 1,
        reps: "1 Check-in",
        rest: 0,
        tip: "Weigh yourself right after waking up and using the washroom, before eating or drinking. Record in the Progress tab.",
        videoId: "N4gD54Vv79E",
        channel: "HostelFit Coach",
        intensity: "Habit"
      },
      {
        id: "ex_sunday_hydration",
        name: "3.5L Water Flush & Electrolytes",
        target: "Metabolism & Muscle Hydration",
        equipment: "Hostel Water Bottle",
        sets: 1,
        reps: "3.5 Liters throughout the day",
        rest: 0,
        tip: "Proper hydration speeds up fat metabolism by up to 15% and prevents hostel bloating.",
        videoId: "X3qZDFYp_5k",
        channel: "Nutrition Science",
        intensity: "Recovery"
      }
    ]
  }
];

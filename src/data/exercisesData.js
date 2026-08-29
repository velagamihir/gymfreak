// Complete Exercise Library with Equipment Mapping, Video Embeds, Form Checklists & Safety Cues

export const exercisesData = [
  {
    id: "ex_bb_bench",
    name: "Flat Barbell Bench / Floor Press",
    muscleGroup: "Chest",
    secondaryMuscles: ["Triceps", "Front Deltoids"],
    equipment: "Straight Barbell",
    difficulty: "Intermediate",
    videoId: "rT7DgCr-3pg",
    instructor: "Jeff Nippard",
    instructions: [
      "Lie on the bench with eyes directly under the bar. Plant feet flat into the ground.",
      "Retract your shoulder blades (pinch them together) and slightly arch your lower back.",
      "Grip the bar slightly wider than shoulder-width with a secure overhand grip.",
      "Unrack the bar and lower it with control to your lower-to-mid chest (nipple line).",
      "Press the bar explosively back up while driving through your feet (leg drive)."
    ],
    mistakesToAvoid: [
      "Bouncing the bar off your sternum (can bruise ribs).",
      "Flaring elbows out at 90 degrees (tuck elbows to ~45-60 degrees to save rotator cuffs).",
      "Lifting hips off the bench."
    ],
    gymHack: "If your hostel gym lacks a spotter or dedicated bench, perform the Barbell Floor Press! It's safer and heavily develops triceps and lockout power."
  },
  {
    id: "ex_bb_squat",
    name: "Barbell Back Squat",
    muscleGroup: "Legs",
    secondaryMuscles: ["Quads", "Glutes", "Hamstrings", "Core"],
    equipment: "Straight Barbell",
    difficulty: "Intermediate",
    videoId: "bEv6CCg2BC8",
    instructor: "Squat University",
    instructions: [
      "Position the barbell across your upper traps (or rear delts for low bar).",
      "Set your feet slightly wider than shoulder-width, toes angled outward ~15-30 degrees.",
      "Take a deep breath into your belly (Valsalva maneuver) and brace your abdominal wall.",
      "Hinge at the hips and bend knees simultaneously, pushing knees outward in direction of toes.",
      "Descend until hip crease is parallel with or below knees, then drive up through mid-foot."
    ],
    mistakesToAvoid: [
      "Knees caving inwards (valgus collapse) — keep pushing knees out.",
      "Rounding the lower back (butt wink) at the bottom.",
      "Letting heels lift off the floor."
    ],
    gymHack: "At 91kg starting weight, warm up thoroughly with 2 sets of bodyweight squats to lubricate knee synovial fluid before adding barbell plates."
  },
  {
    id: "ex_bb_deadlift",
    name: "Conventional Barbell Deadlift",
    muscleGroup: "Back & Posterior Chain",
    secondaryMuscles: ["Hamstrings", "Glutes", "Erector Spinae", "Traps", "Forearms"],
    equipment: "Straight Barbell",
    difficulty: "Advanced",
    videoId: "op9kVnSso6Q",
    instructor: "Alan Thrall",
    instructions: [
      "Step up to the bar so it cuts your mid-foot in half (about 1 inch from shins).",
      "Feet hip-width apart. Hinge down and take a double overhand grip just outside your legs.",
      "Bring shins forward until they touch the bar. Do not move the bar from mid-foot.",
      "Squeeze your chest up, flatten your back, and pull slack out of the barbell.",
      "Drive the floor away with your legs, keeping the bar touching your legs all the way to lockout."
    ],
    mistakesToAvoid: [
      "Rounding your lower back like a scared cat (keep neutral spine).",
      "Yanking the bar aggressively off the floor instead of building tension.",
      "Hyperextending and leaning backward at the top."
    ],
    gymHack: "Deadlifts burn maximum calories of any exercise and create a massive surge in metabolic rate."
  },
  {
    id: "ex_bb_ohp",
    name: "Standing Barbell Overhead Press (OHP)",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Triceps", "Upper Chest", "Core", "Glutes"],
    equipment: "Straight Barbell",
    difficulty: "Intermediate",
    videoId: "2yjwXTZQDDI",
    instructor: "Alan Thrall",
    instructions: [
      "Grip the bar just outside shoulder width with forearms vertically aligned under the bar.",
      "Rest the bar on your front deltoids (collarbone level).",
      "Squeeze your glutes and brace your abs tightly to protect lower back.",
      "Press the bar vertically, pulling your head back slightly to clear chin, then pushing head through window once bar passes forehead.",
      "Lock out overhead with bar centered over mid-foot."
    ],
    mistakesToAvoid: [
      "Excessive lower back arching (keep glutes clenched).",
      "Bending knees to push-press when doing strict OHP."
    ],
    gymHack: "Standing barbell OHP recruits the deep core far more than seated presses, burning extra calories."
  },
  {
    id: "ex_bb_bent_row",
    name: "Barbell Bent-Over Row",
    muscleGroup: "Back",
    secondaryMuscles: ["Lats", "Rhomboids", "Biceps", "Posterior Delts"],
    equipment: "Straight Barbell",
    difficulty: "Intermediate",
    videoId: "6FZHJGzMFEc",
    instructor: "Buff Dudes",
    instructions: [
      "Stand with feet hip-width apart, holding barbell with an overhand grip.",
      "Hinge at the hips until your torso is approximately 45 degrees to the floor.",
      "Keep neck neutral and spine flat.",
      "Pull the bar into your lower ribcage/navel, driving elbows backward toward the ceiling.",
      "Squeeze shoulder blades together for 1 second, then lower with control."
    ],
    mistakesToAvoid: [
      "Using excessive body momentum / bouncing up and down.",
      "Allowing shoulders to roll forward at the bottom."
    ],
    gymHack: "You can alternate between Overhand (hits upper back/rhomboids) and Underhand/Yates grip (hits lower lats & biceps)."
  },
  {
    id: "ex_ez_bicep_curl",
    name: "EZ-Bar Standing Bicep Curls",
    muscleGroup: "Arms",
    secondaryMuscles: ["Biceps Brachii", "Brachialis", "Forearms"],
    equipment: "Crooked Barbell (EZ-Bar)",
    difficulty: "Beginner",
    videoId: "zH3_8g7w9lQ",
    instructor: "Scott Herman",
    instructions: [
      "Grip the angled (crooked) inner or outer curves of the EZ-bar with palms facing semi-supinated.",
      "Stand upright with chest tall, shoulders pinned back.",
      "Keeping elbows glued to your sides, curl the bar up toward your shoulders.",
      "Squeeze biceps firmly at the top, then lower over a strict 2-3 second count."
    ],
    mistakesToAvoid: [
      "Swinging your torso back and forth.",
      "Allowing elbows to flare forward into shoulder flexion."
    ],
    gymHack: "The crooked barbell places your wrists in a semi-neutral angle, preventing wrist pain compared to a straight bar!"
  },
  {
    id: "ex_ez_skullcrushers",
    name: "EZ-Bar Lying Skull Crushers",
    muscleGroup: "Arms",
    secondaryMuscles: ["Triceps Long & Lateral Heads"],
    equipment: "Crooked Barbell (EZ-Bar)",
    difficulty: "Intermediate",
    videoId: "d_KZxkY_0cM",
    instructor: "Scott Herman",
    instructions: [
      "Lie on a flat bench or floor holding the EZ bar with narrow inner grip directly above chest.",
      "Angle upper arms slightly backward towards your head (~10-15 degrees from vertical).",
      "Keeping upper arms stationary, bend elbows to lower the bar towards the top of your head/forehead.",
      "Extend elbows to drive the bar back up to starting angle."
    ],
    mistakesToAvoid: [
      "Moving elbows back and forth (they should remain fixed).",
      "Dropping the bar too quickly near face."
    ],
    gymHack: "Doing these on the floor (Floor Skull Crushers) is 100% safe because the floor prevents the bar from dropping past your head."
  },
  {
    id: "ex_ez_21s_curls",
    name: "EZ-Bar '21s' Bicep Pump Finisher",
    muscleGroup: "Arms",
    secondaryMuscles: ["Biceps Peak", "Forearms"],
    equipment: "Crooked Barbell (EZ-Bar)",
    difficulty: "Intermediate",
    videoId: "uO_CNYIDd2A",
    instructor: "Buff Dudes",
    instructions: [
      "Perform 7 reps from the bottom to halfway up (parallel to floor).",
      "Immediately perform 7 reps from halfway up to the top full squeeze.",
      "Immediately perform 7 full range of motion reps without putting the bar down.",
      "Total: 21 continuous reps for a crazy blood flow & muscle pump!"
    ],
    mistakesToAvoid: [
      "Using too much weight (use only 5-10kg plates total, form is key).",
      "Resting between the 7-rep transitions."
    ],
    gymHack: "Do this at the end of Friday workout for maximum arm hypertrophy."
  },
  {
    id: "ex_db_incline_press",
    name: "Dumbbell Incline / Flat Chest Press",
    muscleGroup: "Chest",
    secondaryMuscles: ["Anterior Delts", "Triceps"],
    equipment: "Dumbbells (10 - 12.5 kg)",
    difficulty: "Beginner",
    videoId: "8iPEnn-ltC8",
    instructor: "Renaissance Periodization",
    instructions: [
      "Hold dumbbells at your chest and sit on bench or floor.",
      "Press dumbbells up, converging slightly at top without clanking.",
      "Lower under control with a deep stretch at bottom.",
      "Since max dumbbell in gym is 12.5kg, perform 3-second slow negatives."
    ],
    mistakesToAvoid: [
      "Dropping dumbbells carelessly.",
      "Flaring elbows flat."
    ],
    gymHack: "Tempo Manipulation: 3 seconds down, 1 second pause at bottom stretch, 1 second explosive press."
  },
  {
    id: "ex_db_lat_raise",
    name: "Standing Dumbbell Lateral Raises",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Lateral Deltoids"],
    equipment: "Dumbbells (2.5 - 7.5 kg)",
    difficulty: "Beginner",
    videoId: "3VcKaXpzqRo",
    instructor: "Jeff Nippard",
    instructions: [
      "Hold 5kg or 7.5kg dumbbells at your sides with a slight forward lean at hips (~10 degrees).",
      "Raise dumbbells out to your sides leading with your elbows.",
      "Stop when arms are parallel to floor (shoulder height).",
      "Hold for 1 second at top, then lower smoothly."
    ],
    mistakesToAvoid: [
      "Using heavy weights and swinging with hips.",
      "Raising hands higher than elbows (internal impingement)."
    ],
    gymHack: "This creates the wide V-taper aesthetic that makes your waist look dramatically narrower."
  },
  {
    id: "ex_db_single_row",
    name: "Single-Arm Dumbbell Row",
    muscleGroup: "Back",
    secondaryMuscles: ["Lats", "Rhomboids", "Biceps"],
    equipment: "Dumbbells (10 - 12.5 kg)",
    difficulty: "Beginner",
    videoId: "roCP6wCXPqo",
    instructor: "Athlean-X",
    instructions: [
      "Place left knee and left hand on bench (or brace hand on dumbbell rack).",
      "Hold 12.5kg dumbbell in right hand, arm hanging straight down with a full lat stretch.",
      "Pull dumbbell up towards right hip, keeping elbow close to side.",
      "Contract lats tightly at top for 1s, then lower."
    ],
    mistakesToAvoid: [
      "Twisting torso excessively to heave the weight up.",
      "Pulling straight up to armpit instead of back towards hip."
    ],
    gymHack: "Pulling back towards the hip engages the lower lats significantly better than pulling towards the armpit."
  },
  {
    id: "ex_db_rdl",
    name: "Dumbbell Romanian Deadlift (RDL)",
    muscleGroup: "Legs",
    secondaryMuscles: ["Hamstrings", "Glutes", "Lower Back"],
    equipment: "Dumbbells (10 - 12.5 kg)",
    difficulty: "Intermediate",
    videoId: "_oyxCn2iSjU",
    instructor: "Jeff Nippard",
    instructions: [
      "Stand with feet shoulder-width apart holding dumbbells in front of thighs.",
      "Keep knees slightly soft (do not lock them straight, do not squat).",
      "Push hips straight back towards the wall behind you, sliding dumbbells down along your shins.",
      "Lower until you feel a strong stretch in hamstrings, then drive hips forward to stand tall."
    ],
    mistakesToAvoid: [
      "Rounding lower back.",
      "Turning it into a squat by bending knees too much."
    ],
    gymHack: "RDLs are the single best exercise for burning hamstring fat and sculpting firm glutes."
  },
  {
    id: "ex_airbike_hiit",
    name: "Dual-Action Air Bike Tabata Sprints",
    muscleGroup: "Cardio & Full Body",
    secondaryMuscles: ["Quads", "Lats", "Chest", "Heart & Lungs"],
    equipment: "Air Bike (Hands + Legs Move)",
    difficulty: "All Levels",
    videoId: "B3eU4976R-M",
    instructor: "CrossFit Conditioning",
    instructions: [
      "Adjust seat height so leg has a slight 10-degree bend at lowest pedal position.",
      "Grip handles firmly. Push with one arm while pulling with the other, simultaneously pedaling hard.",
      "Sprint 20 seconds at maximum intensity (90%+ max HR).",
      "Rest 10 seconds slow coast. Repeat for 8 rounds total (4 minutes)."
    ],
    mistakesToAvoid: [
      "Using only legs (use upper body push-pull aggressively to double calorie expenditure).",
      "Going too fast on warm-up."
    ],
    gymHack: "The dual-action air bike activates the entire upper and lower body at once, burning up to 30 kcal per minute during all-out intervals!"
  },
  {
    id: "ex_treadmill_incline",
    name: "Treadmill 12-3-30 Fat Loss Protocol",
    muscleGroup: "Cardio",
    secondaryMuscles: ["Calves", "Glutes", "Cardiovascular"],
    equipment: "Treadmill",
    difficulty: "Beginner",
    videoId: "wZ_2j0N048Y",
    instructor: "Cardio Science",
    instructions: [
      "Set Incline: 10% to 12%.",
      "Set Speed: 4.8 km/h (3.0 mph).",
      "Walk continuously for 20-30 minutes.",
      "Do NOT hold onto the handrails — swing arms naturally."
    ],
    mistakesToAvoid: [
      "Holding onto handrails (reduces calorie burn by 30-40%!).",
      "Running on high incline when at 91kg (walking protects knees and keeps heart in fat-burning zone 2)."
    ],
    gymHack: "Incline walking burns identical calories to running on flat ground, but with zero knee pounding!"
  },
  {
    id: "ex_cycle_liss",
    name: "Stationary Bike Zone-2 Low Impact Spin",
    muscleGroup: "Cardio",
    secondaryMuscles: ["Quads", "Heart"],
    equipment: "Stationary Bike (Legs Only)",
    difficulty: "Beginner",
    videoId: "XvRsdGf6wN4",
    instructor: "Global Cycling Network",
    instructions: [
      "Adjust seat so knees are not cramped.",
      "Maintain a smooth cadence of 75-85 RPM with moderate magnetic resistance.",
      "Keep breathing steady (you should be able to speak a sentence without gasping).",
      "Spin for 15-20 minutes post-workout."
    ],
    mistakesToAvoid: [
      "Hunching shoulders forward.",
      "Setting resistance so high that knees ache."
    ],
    gymHack: "Perfect after leg days to clear lactic acid and enhance recovery."
  }
];

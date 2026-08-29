// Hyper-personalized hostel diet & nutrition data for a 21yo male, 91kg
// Tailored to Indian hostel mess meals + Tuesday Boiled Eggs + Friday Egg Fried Rice + Hostel Room Hacks

export const userProfile = {
  age: 21,
  currentWeight: 91,
  targetWeight: 75,
  heightCm: 175, // standard reference
  bmr: 1880,
  tdee: 2550, // with 4-5 days workout
  targetCalories: 1950, // 600 kcal deficit for safe 0.6-0.8 kg/week fat loss
  targetProtein: 140, // grams (~1.55g per kg target bodyweight)
  targetCarbs: 190, // grams
  targetFats: 55, // grams
  targetWaterLiters: 3.5
};

export const messMealSchedule = {
  breakfast: {
    title: "Hostel Breakfast (Variable Menu)",
    timing: "7:30 AM - 9:30 AM",
    description: "Mess typically alternates between South/North Indian staples.",
    items: [
      {
        name: "Idli (3 pcs) + Sambar",
        calories: 220,
        protein: 7,
        carbs: 45,
        fats: 2,
        tip: "Great low-fat option. Take double sambar for extra dal lentils. Avoid dipping in pure coconut chutney oil."
      },
      {
        name: "Poha (1 medium bowl) + Peanuts",
        calories: 260,
        protein: 6,
        carbs: 48,
        fats: 6,
        tip: "Rich in iron and light on digestion. Add 1 glass skim milk or 2 boiled eggs if available."
      },
      {
        name: "Upma (1 medium bowl) + Sambar",
        calories: 240,
        protein: 5,
        carbs: 42,
        fats: 5,
        tip: "Ask the mess server to avoid extra oil on top. Pair with sambar."
      },
      {
        name: "Aloo / Plain Paratha (1.5 pcs) + Curd",
        calories: 340,
        protein: 8,
        carbs: 52,
        fats: 12,
        tip: "Limit to 1.5 parathas (avoid excess butter/ghee). Eat with 1 bowl plain curd for digestion."
      },
      {
        name: "Bread Omelette / Boiled Eggs (if available)",
        calories: 310,
        protein: 16,
        carbs: 28,
        fats: 14,
        tip: "Top tier muscle building breakfast. 2 slices bread + 2 whole eggs."
      }
    ],
    goldenRule: "Keep breakfast between 300-380 kcal. If breakfast is low in protein, have a glass of milk or 30g roasted chana mid-morning."
  },

  lunch: {
    title: "Hostel Lunch (Rice + Dal + Curry)",
    timing: "12:30 PM - 2:30 PM",
    description: "Standard daily mess lunch: Rice, Dal, and Mixed Veg / Paneer / Aloo Sabzi.",
    ruleOfThumb: "The Hostel Half-Plate Method: 1/4th plate rice (1 cup), 2 big katoris Dal (thick part), 1/2 plate salad/sabzi.",
    breakdown: [
      {
        item: "White Rice (1 standard mess cup / 150g cooked)",
        calories: 195,
        protein: 4,
        carbs: 43,
        fats: 0.5,
        verdict: "Do not take a mountain of rice! Cap at 1 full cup."
      },
      {
        item: "Hostel Dal (2 deep bowls / 250ml)",
        calories: 180,
        protein: 9,
        carbs: 26,
        fats: 4,
        verdict: "Ask the mess staff to stir from the bottom so you get dense lentils, not just the yellow water on top."
      },
      {
        item: "Daily Sabzi / Curry (1 cup / 120g)",
        calories: 130,
        protein: 3,
        carbs: 14,
        fats: 7,
        verdict: "Drain excess surface oil with your serving spoon."
      },
      {
        item: "Mess Cucumber / Onion Salad (Free unlimited)",
        calories: 25,
        protein: 1,
        carbs: 5,
        fats: 0.2,
        verdict: "EAT FIRST! Eating raw cucumber and onion 5 mins before rice blunts the insulin spike and cuts hunger."
      }
    ],
    totalAvg: { calories: 530, protein: 17, carbs: 88, fats: 11.7 }
  },

  dinner: {
    title: "Hostel Dinner (3 Rotis + Curry + Sambar Rice + Curd Rice)",
    timing: "7:45 PM - 9:45 PM",
    description: "Standard mess dinner setup with special meal days.",
    specialDays: [
      {
        day: "Tuesday Special",
        tag: "🥚 Boiled Eggs Bonus",
        badgeColor: "#10b981",
        instructions: "Tuesday is your egg day in the mess! Take 3 to 4 boiled eggs (eat 2 whole + 2 whites, or all 3 whole). This provides +22g to +26g of the highest bio-available protein."
      },
      {
        day: "Friday Special",
        tag: "🍳 Egg Fried Rice Night",
        badgeColor: "#ec4899",
        instructions: "Friday dinner is Egg Fried Rice. It's great after your upper body workout. Stick to 1.5 cups (do not overfill plate 3 times). Savor every bite, drink plenty of water, and avoid high-oil side Manchurian/gravies."
      }
    ],
    standardPlan: [
      {
        item: "3 Plain Rotis / Phulkas (No thick butter)",
        calories: 240,
        protein: 8,
        carbs: 48,
        fats: 2,
        verdict: "3 rotis is the sweet spot for your 1,950 kcal target."
      },
      {
        item: "Dinner Sabzi / Curry (1 bowl)",
        calories: 130,
        protein: 3,
        carbs: 14,
        fats: 7,
        verdict: "Eat alongside the rotis."
      },
      {
        item: "Sambar Rice (Moderate / Small scoop)",
        calories: 120,
        protein: 3,
        carbs: 24,
        fats: 1.5,
        verdict: "Since you already have 3 rotis, take only a small 1/2 cup scoop if you crave it, or skip."
      },
      {
        item: "Curd Rice (1 small bowl / 100g)",
        calories: 135,
        protein: 4,
        carbs: 20,
        fats: 4,
        verdict: "Outstanding probiotic for gut health and restful sleep! Have 1 small bowl to end dinner."
      }
    ],
    totalAvg: { calories: 625, protein: 18, carbs: 106, fats: 14.5 }
  }
};

export const hostelProteinHacks = [
  {
    id: "hack_soya",
    title: "1. The Electric Kettle Soya Chunks Soak",
    tag: "High Protein • ₹8 Cost",
    proteinPerServing: "21g Protein",
    calories: "140 kcal",
    howTo: "Buy a ₹40 pack of Fortune/Nutrela Soya Chunks. Place 40g in a cup, pour boiling hot water from your kettle or mess geyser/dispenser. Cover with a plate for 5 mins. Drain water, squeeze chunks, sprinkle chaat masala or lime. Instant 21g pure protein in your room!",
    icon: "Flame"
  },
  {
    id: "hack_chana",
    title: "2. Bhuna Chana (Roasted Bengal Gram)",
    tag: "Zero Prep • Study Snack",
    proteinPerServing: "10g Protein (50g serving)",
    calories: "185 kcal",
    howTo: "Keep a 1kg jar of roasted chana in your hostel room. It contains 19% protein and massive amounts of dietary fiber that prevent late-night canteen junk cravings.",
    icon: "Cookie"
  },
  {
    id: "hack_amul_lassi",
    title: "3. Amul High-Protein Lassi / Buttermilk",
    tag: "₹25 • Available in Canteens",
    proteinPerServing: "15g Protein",
    calories: "85 kcal",
    howTo: "Available in green/blue tetra packs at almost all college campus Amul parlors/tuck shops. 15g milk protein, zero added sugar, delicious cold drink after gym!",
    icon: "Milk"
  },
  {
    id: "hack_tea_stall_eggs",
    title: "4. Hostel Gate Boiled Eggs (Non-Tuesday Days)",
    tag: "₹20 • 3 Egg Whites + 1 Whole",
    proteinPerServing: "16g Protein",
    calories: "130 kcal",
    howTo: "On days mess doesn't give eggs (Mon, Wed, Thu, Sat, Sun), grab 3 boiled eggs from the tea shop outside hostel gate. Tell the vendor to remove 2 yolks to keep calories low.",
    icon: "Egg"
  },
  {
    id: "hack_sattu",
    title: "5. Desi Sattu Energy Drink",
    tag: "Traditional • Budget Beast",
    proteinPerServing: "11g Protein (40g powder)",
    calories: "160 kcal",
    howTo: "Mix 3 tablespoons of Chana Sattu in cold water + pinch of roasted jeera powder, black salt, and half a lemon. Drink 30 mins before workout for sustained stamina.",
    icon: "CupSoda"
  },
  {
    id: "hack_whey",
    title: "6. Whey Protein Concentrate (Optional Upgrade)",
    tag: "Pure Muscle Fuel • Fast",
    proteinPerServing: "24g Protein (1 Scoop)",
    calories: "120 kcal",
    howTo: "If pocket money/budget allows (approx ₹1,800/month for Raw Whey), 1 scoop with water in your shaker after workout easily hits your 140g daily protein target.",
    icon: "Zap"
  }
];

export const dalRealityCheck = {
  truth: "Why Dal Alone Isn't Enough for 91kg Muscle Recomposition",
  points: [
    "Hostel Dal is ~80% water and ~15% carbs by volume. 1 standard bowl only gives ~4 to 5g of protein.",
    "Lentils (Dal) lack the essential amino acid Methionine. When paired with Rice/Roti, the protein becomes complete, but calorie density increases.",
    "To get 130g protein solely from Dal, you would have to drink 26 bowls of dal, consuming over 3,000+ kcal (which would cause weight gain!).",
    "Solution: Keep eating mess Dal, but add 1 or 2 of the Hostel Room Protein Hacks (Soya chunks, Roasted chana, Amul lassi, Boiled eggs) to hit 140g protein inside your 1,950 kcal budget."
  ]
};

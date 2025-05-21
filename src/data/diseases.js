const diseases = [
  {
    name: "Alien Hand Syndrome",
    causes: ["Brain surgery", "Stroke", "Neurodegeneration"],
    symptoms: [
      "Uncontrolled hand movement",
      "Lack of hand awareness",
      "Self-touching",
      "Involuntary grasping",
    ],
    explanation:
      "A neurological disorder where one hand seems to act on its own, often in conflict with the person's intentions.",
    tag: "Neurological",
    imgPath: require("../assets/diseases-img/alien-hand.png"),
  },
  {
    name: "Fatal Familial Insomnia",
    causes: ["Genetic mutation (PRNP gene)"],
    symptoms: [
      "Chronic insomnia",
      "Hallucinations",
      "Rapid weight loss",
      "Dementia",
      "Panic attacks",
    ],
    explanation:
      "An extremely rare inherited disorder that affects the brain’s ability to sleep, eventually leading to death.",
    tag: "Genetic",
    imgPath: require("../assets/diseases-img/insomnia.png"),
  },
  {
    name: "Morgellons Disease",
    causes: ["Unknown", "Psychological factors", "Skin hypersensitivity"],
    symptoms: [
      "Sensation of bugs crawling under skin",
      "Open sores",
      "Fibers emerging from skin",
      "Fatigue",
    ],
    explanation:
      "A controversial condition where patients report fibers and crawling sensations under the skin, often linked to delusional parasitosis.",
    tag: "Dermatological / Psychiatric",
    imgPath: require("../assets/diseases-img/morgellons.png"),
  },
  {
    name: "Hyperthymesia",
    causes: ["Unknown", "Differences in brain structure"],
    symptoms: [
      "Extremely detailed autobiographical memory",
      "Mental exhaustion",
      "Obsessive recollection",
    ],
    explanation:
      "People with this condition remember nearly every day of their lives in vivid detail, involuntarily and obsessively.",
    tag: "Neurological",
    imgPath: require("../assets/diseases-img/hyperthymesia.png"),
  },
  {
    name: "Stoneman Syndrome (FOP)",
    causes: ["Genetic mutation (ACVR1 gene)"],
    symptoms: [
      "Soft tissue turning into bone",
      "Stiff joints",
      "Restricted movement",
      "Painful swellings",
    ],
    explanation:
      "A rare genetic condition where muscles and connective tissues gradually turn into bone, severely limiting movement.",
    tag: "Genetic",
    imgPath: require("../assets/diseases-img/stoneman.png"),
  },
  {
    name: "Alice in Wonderland Syndrome",
    causes: ["Migraines", "Epilepsy", "Viral infections"],
    symptoms: [
      "Distorted body image",
      "Time perception issues",
      "Visual hallucinations",
      "Dizziness",
    ],
    explanation:
      "A neurological condition causing the perception of objects or body parts to be much larger or smaller than they really are.",
    tag: "Neurological",
    imgPath: require("../assets/diseases-img/alice-in-wonderland.png"),
  },
  {
    name: "Capgras Delusion",
    causes: ["Brain injury", "Dementia", "Schizophrenia"],
    symptoms: [
      "Belief that loved ones are replaced by impostors",
      "Paranoia",
      "Anxiety",
      "Social withdrawal",
    ],
    explanation:
      "A delusional belief that familiar people have been replaced by identical-looking impostors.",
    tag: "Psychiatric",
    imgPath: require("../assets/diseases-img/delusion.png"),
  },
  {
    name: "Foreign Accent Syndrome",
    causes: ["Brain trauma", "Stroke", "Neurological disorder"],
    symptoms: [
      "Sudden change in speech",
      "Unfamiliar accent",
      "Speech rhythm alteration",
    ],
    explanation:
      "After a brain injury or stroke, some people suddenly begin speaking with a foreign-sounding accent.",
    tag: "Neurological",
    imgPath: require("../assets/diseases-img/foreign-accent.png"),
  },
  {
    name: "Walking Corpse Syndrome",
    causes: ["Severe depression", "Psychosis", "Brain injury"],
    symptoms: [
      "Belief of being dead",
      "Denial of existence",
      "Neglect of personal care",
      "Social withdrawal",
    ],
    explanation:
      "A rare mental illness where the person believes they are dead, don't exist, or have lost their organs or blood.",
    tag: "Psychiatric",
    imgPath: require("../assets/diseases-img/walking-corpse.png"),
  },
  {
    name: "Jumping Frenchmen of Maine",
    causes: ["Unknown", "Possibly genetic or environmental"],
    symptoms: [
      "Exaggerated startle reflex",
      "Automatic obedience",
      "Sudden shouting or limb movements",
    ],
    explanation:
      "A rare neurological condition causing extreme startle responses, often resulting in involuntary mimicry or outbursts.",
    tag: "Neurological",
    imgPath: require("../assets/diseases-img/jumping-frenchman-maine.png"),
  },
  {
    name: "Fish Odor Syndrome",
    causes: ["Genetic enzyme deficiency"],
    symptoms: [
      "Body odor resembling fish",
      "Social anxiety",
      "Sweating",
      "Low self-esteem",
    ],
    explanation:
      "A metabolic disorder that causes a strong fishy odor due to the body's inability to break down trimethylamine.",
    tag: "Metabolic",
    imgPath: require("../assets/diseases-img/fish-odor.png"),
  },
  {
    name: "Pica",
    causes: [
      "Iron deficiency",
      "Psychological stress",
      "Developmental disorders",
    ],
    symptoms: [
      "Craving non-food items",
      "Eating soil or paper",
      "Stomach pain",
      "Nutritional deficiency",
    ],
    explanation:
      "A psychological disorder where people feel compelled to eat non-nutritive substances such as dirt, chalk, or paper.",
    tag: "Psychiatric",
    imgPath: require("../assets/diseases-img/pica.png"),
  },
  {
    name: "Prosopagnosia (Face Blindness)",
    causes: ["Brain injury", "Stroke", "Genetics"],
    symptoms: [
      "Inability to recognize faces",
      "Difficulty with facial memory",
      "Social confusion",
    ],
    explanation:
      "A condition that impairs a person's ability to recognize faces, even of people they know well.",
    tag: "Neurological",
    imgPath: require("../assets/diseases-img/blind.png"),
  },
  {
    name: "Ondine's Curse (CCHS)",
    causes: ["Genetic mutation (PHOX2B gene)"],
    symptoms: [
      "Failure to breathe automatically during sleep",
      "Daytime fatigue",
      "Blue skin (cyanosis)",
    ],
    explanation:
      "A rare genetic disorder where the person stops breathing involuntarily during sleep and requires assisted ventilation.",
    tag: "Genetic",
    imgPath: require("../assets/diseases-img/ondines-curse.png"),
  },
  {
    name: "Kleine-Levin Syndrome",
    causes: ["Unknown", "Possibly autoimmune"],
    symptoms: [
      "Excessive sleeping",
      "Hallucinations",
      "Increased appetite",
      "Disorientation",
      "Mood swings",
    ],
    explanation:
      "Also known as 'Sleeping Beauty Syndrome', it causes recurring episodes of excessive sleep and altered behavior.",
    tag: "Neurological",
    imgPath: require("../assets/diseases-img/sleeping-beauty.png"),
  },
  {
    name: "Exploding Head Syndrome",
    causes: ["Sleep disturbance", "Stress"],
    symptoms: [
      "Loud imagined noises during sleep",
      "Sleep disruption",
      "Fear of sleeping",
    ],
    explanation:
      "A sleep disorder involving the perception of loud, sudden noises when falling asleep or waking up.",
    tag: "Neurological",
    imgPath: require("../assets/diseases-img/exploding-head.png"),
  },
  {
    name: "Stendhal Syndrome",
    causes: ["Sensory overload"],
    symptoms: ["Dizziness", "Rapid heartbeat", "Hallucinations", "Confusion"],
    explanation:
      "A psychosomatic disorder causing emotional or physical symptoms when exposed to overwhelming beauty or art.",
    tag: "Psychiatric",
    imgPath: require("../assets/diseases-img/stendhal.png"),
  },
  {
    name: "Stiff Person Syndrome",
    causes: ["Autoimmune response", "Genetic predisposition"],
    symptoms: [
      "Muscle stiffness",
      "Painful spasms",
      "Difficulty walking",
      "Sensitivity to noise",
    ],
    explanation:
      "A rare neurological disorder causing severe muscle rigidity and spasms, often triggered by stress or noise.",
    tag: "Neurological",
    imgPath: require("../assets/diseases-img/muscle-spasm.png"),
  },
  {
    name: "Aquagenic Urticaria",
    causes: ["Unknown", "Allergic response"],
    symptoms: ["Skin rash after water exposure", "Burning sensation", "Hives"],
    explanation:
      "An extremely rare allergy to water, where even brief exposure causes painful skin reactions.",
    tag: "Dermatological",
    imgPath: require("../assets/diseases-img/hydrophobia.png"),
  },
  {
    name: "Progeria",
    causes: ["Genetic mutation"],
    symptoms: [
      "Accelerated aging",
      "Hair loss",
      "Joint stiffness",
      "Growth failure",
    ],
    explanation:
      "A rare genetic condition that causes children to age rapidly, leading to early death.",
    tag: "Genetic",
    imgPath: require("../assets/diseases-img/progeria.png"),
  },
  {
    name: "Situs Inversus",
    causes: ["Genetic"],
    symptoms: [
      "No symptoms (often)",
      "Reversed organ placement",
      "Occasional heart issues",
    ],
    explanation:
      "A congenital condition in which major organs are reversed or mirrored from their normal positions.",
    tag: "Genetic",
    imgPath: require("../assets/diseases-img/situs-intervus.png"),
  },
];

export default diseases;

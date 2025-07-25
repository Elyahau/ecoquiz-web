const quiz = [
  {
    question: "Quelle est la principale source d'énergie à Wallis et Futuna ?",
    answers: ["Le solaire", "Le pétrole", "L'éolien", "L’hydroélectricité"],
    correct: 1
  },
  {
    question: "Quel animal est endémique à Futuna ?",
    answers: ["Le pigeon impérial", "Le caméléon bleu", "La chauve-souris géante", "Le cochon sauvage"],
    correct: 0
  }
];
const questions = [
  {
    "question": "Quelle est la principale cause du changement climatique ?",
    "answers": [
      "La rotation de la Terre",
      "Les émissions de gaz à effet de serre",
      "Les marées lunaires",
      "Les volcans"
    ],
    "correctAnswer": 1,
    "explanation": "Les gaz à effet de serre, principalement dus aux activités humaines (industrie, transports), sont la principale cause du changement climatique."
  },
  {
    "question": "Pourquoi la biodiversité est-elle importante ?",
    "answers": [
      "Elle rend les paysages plus jolis",
      "Elle permet le bon fonctionnement des écosystèmes",
      "Elle augmente la population humaine",
      "Elle favorise l'élevage industriel"
    ],
    "correctAnswer": 1,
    "explanation": "La biodiversité permet aux écosystèmes de fonctionner correctement : pollinisation, purification de l'eau, équilibre climatique, etc."
  },
  {
    "question": "Quelle est une source d’énergie renouvelable ?",
    "answers": [
      "Le charbon",
      "Le pétrole",
      "Le soleil",
      "Le gaz naturel"
    ],
    "correctAnswer": 2,
    "explanation": "Le soleil est une source d’énergie renouvelable inépuisable, utilisée notamment pour produire de l’électricité solaire."
  },
  {
    "question": "Quel est l'impact du plastique dans l'océan ?",
    "answers": [
      "Il aide les poissons à respirer",
      "Il sert d’abri aux coraux",
      "Il pollue et tue des espèces marines",
      "Aucun impact"
    ],
    "correctAnswer": 2,
    "explanation": "Le plastique se dégrade lentement, et nuit gravement à la faune marine qui peut l’ingérer ou s’y retrouver piégée."
  },
  {
    "question": "À Wallis et Futuna, que peut-on faire pour préserver les ressources en eau ?",
    "answers": [
      "Laver sa voiture tous les jours",
      "Collecter l’eau de pluie",
      "Augmenter les fuites",
      "Arroser à midi"
    ],
    "correctAnswer": 1,
    "explanation": "Collecter l’eau de pluie est une méthode simple et efficace pour préserver les ressources en eau potable."
  }
];
const questions = [
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Quel appareil consomme le plus d’énergie dans une maison ?",
    "answers": [
      "Téléphone",
      "Frigo",
      "Ampoule LED",
      "Ventilateur"
    ],
    "correctAnswer": 1,
    "explanation": "Le réfrigérateur fonctionne 24h/24, ce qui en fait l’un des plus gros consommateurs d’électricité domestique."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quelle est une conséquence directe du réchauffement climatique ?",
    "answers": [
      "Augmentation des tremblements de terre",
      "Fonte des glaces polaires",
      "Réduction de la gravité",
      "Diminution du volcanisme"
    ],
    "correctAnswer": 1,
    "explanation": "Le réchauffement climatique provoque notamment la fonte des glaces, ce qui contribue à l’élévation du niveau des mers."
  },
  {
    "question": "Quelle est une bonne pratique pour économiser l’eau à la maison ?",
    "answers": [
      "Laisser le robinet ouvert",
      "Prendre des bains tous les jours",
      "Réparer les fuites rapidement",
      "Remplir une piscine quotidiennement"
    ],
    "correctAnswer": 2,
    "explanation": "Réparer rapidement les fuites permet d’éviter un grand gaspillage d’eau."
  },
  {
    "question": "Pourquoi est-il important de gérer les déchets localement à Wallis et Futuna ?",
    "answers": [
      "Pour produire de l’électricité",
      "Pour protéger les lagons et la terre",
      "Pour attirer des investisseurs",
      "Pour les exporter en masse"
    ],
    "correctAnswer": 1,
    "explanation": "Une bonne gestion locale des déchets protège la nature fragile des îles."
  },
  {
    "question": "Pourquoi protéger les espèces endémiques est-il important ?",
    "answers": [
      "Elles sont belles",
      "Elles attirent les touristes",
      "Elles n’existent qu’à un endroit précis",
      "Elles mangent beaucoup"
    ],
    "correctAnswer": 2,
    "explanation": "Les espèces endémiques existent seulement dans une région donnée, leur disparition signifie une perte irréversible."
  }
];
let current = 0;

function showQuestion() {
  const q = quiz[current];
  document.getElementById("question").textContent = q.question;
  const container = document.getElementById("answers");
  container.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => {
      if (i === q.correct) {
        alert("✅ Bonne réponse !");
      } else {
        alert("❌ Mauvaise réponse");
      }
      current++;
      if (current < quiz.length) {
        showQuestion();
      } else {
        document.getElementById("question").textContent = "🎉 Fin du quiz !";
        container.innerHTML = "";
      }
    };
    container.appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", showQuestion);

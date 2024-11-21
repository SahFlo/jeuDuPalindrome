//Février peut être modifié dynamiquement apparemment mais pour l'instant je ne vois pas comment

// numeroDuMois : ça m'ennuie car pour le faire passer sur 2 chiffres je dois transformer la valeur en string

export const calendrierAnnéeNormale = [
    { nomDuMois: "janvier", nombreDeJoursDuMois: 31, numeroDuMois: 1 },
    { nomDuMois: "février", nombreDeJoursDuMois: 28, numeroDuMois: 2 },
    { nomDuMois: "mars", nombreDeJoursDuMois: 31, numeroDuMois: 3 },
    { nomDuMois: "avril", nombreDeJoursDuMois: 30, numeroDuMois: 4 },
    { nomDuMois: "mai", nombreDeJoursDuMois: 31, numeroDuMois: 5 },
    { nomDuMois: "juin", nombreDeJoursDuMois: 30, numeroDuMois: 6 },
    { nomDuMois: "juillet", nombreDeJoursDuMois: 31, numeroDuMois: 7 },
    { nomDuMois: "août", nombreDeJoursDuMois: 31, numeroDuMois: 8 },
    { nomDuMois: "septembre", nombreDeJoursDuMois: 30, numeroDuMois: 9 },
    { nomDuMois: "octobre", nombreDeJoursDuMois: 31, numeroDuMois: 10 },
    { nomDuMois: "novembre", nombreDeJoursDuMois: 30, numeroDuMois: 11 },
    { nomDuMois: "décembre", nombreDeJoursDuMois: 31, numeroDuMois: 12 }
];

export const calendrierAnnéeBisextile = [
    { nomDuMois: "janvier", nombreDeJoursDuMois: 31, numeroDuMois: 1 },
    { nomDuMois: "février", nombreDeJoursDuMois: 29, numeroDuMois: 2 }, // Février bissextile
    { nomDuMois: "mars", nombreDeJoursDuMois: 31, numeroDuMois: 3 },
    { nomDuMois: "avril", nombreDeJoursDuMois: 30, numeroDuMois: 4 },
    { nomDuMois: "mai", nombreDeJoursDuMois: 31, numeroDuMois: 5 },
    { nomDuMois: "juin", nombreDeJoursDuMois: 30, numeroDuMois: 6 },
    { nomDuMois: "juillet", nombreDeJoursDuMois: 31, numeroDuMois: 7 },
    { nomDuMois: "août", nombreDeJoursDuMois: 31, numeroDuMois: 8 },
    { nomDuMois: "septembre", nombreDeJoursDuMois: 30, numeroDuMois: 9 },
    { nomDuMois: "octobre", nombreDeJoursDuMois: 31, numeroDuMois: 10 },
    { nomDuMois: "novembre", nombreDeJoursDuMois: 30, numeroDuMois: 11 },
    { nomDuMois: "décembre", nombreDeJoursDuMois: 31, numeroDuMois: 12 }
];

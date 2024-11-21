Les palindromes sont des mots ou des suites de caractères qui se lisent dans les deux sens, comme les mots “radar” ou “kayak”. Le but de cet exercice est de détecter des dates palindromes, date que l’on peut donc lire dans les deux sens, sans prendre en compte le séparateur de date (/).

Contraintes: L’exercice se fera en JS

Étape 1
Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.

Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - autrement dit, l’année sera systématiquement représentée sur 4 caractères.

isValidDate("03/04/2001") // true
isValidDate("03/14/2001") // false car 14 n'est pas un mois valide
Vous aurez probablement besoin de créer une autre fonction maxDaysInMonth pour vous assurer que le nombre de jours par mois est valide (ex: le 31/11 n’est pas valide, le mois de novembre ne contient que 30 jours)

Fonction jour valide :
    En fait il faut que je calcule le nombre de jour du mois
     jour ok si >=1 et <= nombre de jours du mois (28, 29, 30, 31)
     objet avec mois et nombres de jours ?


Attends. Comment mon utilisateur va choisir la date ? Il va la rentrer dans un prompt ou un input
Ensuite je dois vérifier la validité de la date donc
--> nombre de jours /mois en fonction du mois
--> année bisextile ou pas
--> la date est bien exprimée au format jj/mm/aaaa

SI TOUT CA c'est OK alors on passe au palindrome

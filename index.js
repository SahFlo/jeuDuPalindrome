const dateInput = document.getElementById('date-input')
const result = document.getElementById('result')

// Ajout d'un écouteur d'événement pour détecter les changements dans l'input
//WARNING : date au format YYYY/MM/DD
//Avec cette méthode mes heures sont vérifiées automatiquement grâce à input type date. Je dois juste faire attention parce que quand mon utilisateur tape 01/12/1995, mon programme ressort et utilise en js 1995/12/01
// après ça ne m'empêche pas d'avancer et de vérifier le palindrome

dateInput.addEventListener('change', () => {
    const selectedDate = dateInput.value;
    if (selectedDate) { //si l'utilisateur rentre une date console.log ok
      console.log(`Date sélectionnée : ${selectedDate}`);
      result.innerText = "Super tu as choisi une date"
        for(let i = 0; i< selectedDate.length; i++){ //je veux découper ma date en éléments ndividuels
          let dateArray = selectedDate[i] 
          console.log(dateArray) 
          console.log(typeof(dateArray))
    }

    } else { //si l'utilisateur n'a pas rentré de date consolo.log pas ok
      console.log("La date n'est pas valide.");
    }
  });






const dateInput = document.getElementById('date-input')

// Ajout d'un écouteur d'événement pour détecter les changements dans l'input
//WARNING : date au format YYYY/MM/DD
dateInput.addEventListener('change', () => {
    const selectedDate = dateInput.value;
    if (selectedDate) {
      console.log(`Date sélectionnée : ${selectedDate}`);
    } else {
      console.log("La date n'est pas valide.");
    }
    for(let i = 0; i< selectedDate.length; i++){
        let dateArray = selectedDate[i]
        console.log(dateArray) 
    }
  });
//A ce stade tout marche.
//J'obtiens bien ma date découpée signe par signe
//A priori je dois retourner ma date en créant une fonction qui cette fois découpe ma date signe par signe par la fin puis compare avec la première date ???
  



//Avec cette méthode(input type date) mes heures sont déjà vérifiées via mon html. Je dois juste faire attention parce que quand mon utilisateur tape 01/12/1995, mon programme ressort et utilise en js 1995/12/01
// après ça ne m'empêche pas d'avancer et de vérifier le palindrome

function Palindrome() { 
  const dateInput = document.getElementById('date-input'); //lien avec html
  const result = document.getElementById('result');  //lien avec html  

  // Ajout d'un écouteur d'événement pour détecter les changements dans l'input   
  dateInput.addEventListener('change', () => {       
      let selectedDate = dateInput.value; //je stocke la date choisie par user  -->     
      // console.log(selectedDate);
      // console.log(typeof(selectedDate)) //string donc pas un tableau
      
      if (selectedDate) { //user rentre une date valide, je compare pour trouver le palindrome         
        let onlyNumbers = selectedDate.match(/\d+/g)
        console.log(onlyNumbers)
       } else { //si l'utilisateur n'a pas rentré de date valide       
          console.log('Vous devez choisir une date');
      }   
    })
  }
  

Palindrome();



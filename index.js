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
          let dateArray = selectedDate.split(''); //je découpe ma date en index regroupés dans un tableau         
          console.log(dateArray)
          console.log(Array.isArray(dateArray));
            for(let i = 0; i <= dateArray.length; i ++){
             // console.log(dateArray[i])
             result.innerText = "ok date"
             let nombres = dateArray.match(/\d+/g);
             console.log(nombres)
            }

          
      } else { //si l'utilisateur n'a pas rentré de date valide       
          console.log('Vous devez choisir une date');
      }   
  });
}  

Palindrome();



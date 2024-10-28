// const btn = document.getElementById('button');
// const title = document.getElementsByClassName('title');
// const list=document.getElementsByTagName('ul')
// const listItems = document.getElementsByTagName('li')
// const lisItems = document.querySelector('.list_items')
// const link = document.getElementById('link')
// console.log(btn)
// console.log(title)
// console.log(list)
// console.log(listItems[0])
// console.log(link.setAttribute('href','https://google.com/'))
// btn.addEventListener('click',sayHeloo)
//////////////////////////////////////////////////////////////////
//  const newDiv = document.createElementN(dispatchEvent);
// exooooooooooo_________________________________________________________________
// Afficher un message selon la valeur saisie
// ● Énoncé : Crée un champ de saisie <input id="userInput"
// placeholder="Tapez quelque chose...">, un élément <p
// id="message"></p> pour afficher un message et un bouton. Lorsque
// l'utilisateur tape un mot précis "Bonjour" et clique sur le bouton, affiche
// le message "Bonne journée !" Dans ces cas-là, la couleur du message
// doit être vert. S'il tape "Au revoir", affiche "À la prochaine !". Pour toute
// autre saisie, affiche "Je ne comprends pas" en rouge.
// ______________________________________________________________________________
const btn = document.getElementById('btn');
const userInput= document.getElementById ('input');
const message= document.getElementById('message');

function recuperervaleur(){
    const valeur = document.getElementById("userInput").value;
  

    if( valeur==='Bonjour'){

        
        message.textContent = "Bonne journée !";
        message.style.color="green";
        
    }
    else if (valeur==='Au revoir'){

        message.textContent ="À la prochaine !"
        message.style.color="green";

    }
     
    else
    {
        message.textContent = "Je ne comprends pas" 
        message.style.color="red";
    }   
}
btn.addEventListener('click',recuperervaleur);
///////////////////////////////////////////////////////////////////
// exo 2____________________________________________________
// Calculatrice simple
// ● Énoncé : Crée deux champs de saisie <input type="number" id="number1">
// et <input type="number" id="number2">, ainsi qu'un bouton <button
// id="calculate">Calculer</button>. Ajoute un élément <p
// id="result">Résultat : </p> pour afficher le résultat. Lors du clic sur
// "Calculer", affiche la somme des deux nombres dans l'élément result.

const number1= document.getElementById ('input');
const number2= document.getElementById ('input');
const result= document.getElementById('p');
function recuperervaleur(){
    const number1 = document.getElementById("Input").value;
    const number2 = document.getElementById("Input").value;
    const somme=0;
    if( number1 =! " " && number2 =! " "){ 
         number1+number2===somme;
        result.textContent===somme;}

      
        else
        {
            result.textContent='entrer un numbre'
        }
        
        
    


}






//UPPGIFT 4

//Variabel 1 - Checkboxen
//Hämtar checkbox-elementet med ID "divStyle"
//Använder const eftersom värdet på elementet inte kommet ändras
//Använder document,querySelector som DOM-funktion

const divStyleCheckbox = document.querySelector('#divStyle');

//Console för att se så allt blivit hämtat
console.log('Checkboxen: ', divStyleCheckbox);


//Variabel 2 - Alla textfält
//textfält för färg
let colorInput = document.getElementById('color');

//textfält för innehåll
let contentInput = document.getElementById('content');

//textfält för det tomma fältet
let emptyInput = document.getElementById('empty');

//console för att se att allt blivit hämtat
console.log('Färgfältet: ', colorInput);
console.log('Innehållsfältet: ', contentInput);
console.log('Tomt fält: ', emptyInput);


//Variabel 3 - Knappen
//Hämtar knappen via elemtet med klassen action-button
//använder const för knappen kommer inte ändras och document,getElementByClassName()
//Vi väljer index 0 (alltså plats 1) eftersom metoden returnerar en lista och vi har bara en knapp
const clickButton = document.getElementsByClassName('action-button')[0];

//console för att se så knappen har hämtats
console.log('Knappelementet (via ClassName): ', clickButton);


//Vairabel 4 - Alla div element
//hämtar ALLA <div>-element på sidan
//Använder const och document.getElementByTagName()
//Vi använder const för alla div element hämtas som en lista, så vi vill ha dessa lagrade och att
//man inte kan ändra på dessa.
const allDivElements= document.getElementsByTagName('div');

//console för att se så allt blivit hämtat
console.log('Alla div-element: ', allDivElements);
console.log('Antal div-element hittades: ',allDivElements.length); //Här ser vi hur många som hämtats via length

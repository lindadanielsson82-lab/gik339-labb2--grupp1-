//UPPGIFT 4

//Variabel 1 - Checkboxen
//Hämtar checkbox-elementet med ID "divStyle"
//Använder const eftersom referensen till elementet inte kan ändras
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

const outputDiv = allDivElements[0]; //detta är variabeln för div-elementet som funktionen behöver
//som är satt på index 0, alltså det första fältet.

console.log('Div-elementet för utdata, alltså det första div elementet (index 0: ', outputDiv);

//uppgift 5
//Skapar en fördefinierad funktion

//Funktionen skapas som ett funktionsuttryck och lagras i en const.
//Funktionen används som eventlyssnare, alltså ligger på "vänt" tills en användare har skrivit i inputfältet 
//och denna funktion skall då aktiveras. Detta genom (e) som betyder "tar emot eventobjekt".
const handleInputEvent = (e) => {
console.log("Avsändare (target): ", e.target); //Skriver ut avsändaren (target) i consolen. 
//Alltså e är eventobjektet, och e.target är elementet där händelen uppstod (skrivandet i inputfältet) 

const inputName = e.target.name; //handleInputEvent (funktionen) frågar avsändaren vad 
//den har för "namn"-etikett (attributet nem i HTML-koden) och sparar det.

//Vi gör en if-sats för att kontrollera om namnet på fältet är exakt "content"
//Om JA, hämtar det nya innehållet
//Om NEJ, gör det ingenting då det förmodeligen var det andra fältet (färgfältet) 
//som triggade händelsen
if (inputName === "content") {
    const inputValue = e.target.value; //Funktionen går till avsändaren (e.target, alltså textfåältet)
    //och frågar: "vad står i din ruta?" svaret sparas som inputValue.
    outputDiv.innerHTML = inputValue; //Skriver ut innehållet (value) till div-elementet (outputDiv)
    console.log("Div-innehållet: ", inputValue); //Skriver ut i consolen

}
};
contentInput.addEventListener('input', handleInputEvent);
//contentInput är textfältet
//addEventListener sätter en lyssnare här
//input lyssnar efter händelsen "användaren skriver eller ändrar text"
//handleInputEvent är när händelen sker, alltså anropar vår funktion
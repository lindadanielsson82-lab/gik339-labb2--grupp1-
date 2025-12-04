//UPPGIFT 4 - Skapa variabler

//Variabel 1 - Checkboxen
//Hämtar checkbox-elementet med ID "divStyle"
//Använder const eftersom referensen till elementet inte kan ändras
//Använder document,querySelector som DOM-funktion
const divStyleCheckbox = document.querySelector('#divStyle');

//Console för att se så allt blivit hämtat
console.log('Checkboxen: ', divStyleCheckbox);


//Variabel 2 - Alla textfält
//Hämtar alla textfält via klassnamn, FieldS pga det är flera
const textFields = document.getElementsByClassName('textfield');
console.log('Alla textfält: ', textFields);


//Variabel 3 - Knappen
//Hämtar knappen via elemtet med ID clickButton
//använder const för knappen kommer inte ändras och document,getElementById()
const clickButton = document.getElementById('clickButton');
console.log('Knappen: ',clickButton);


//Variabel 4 - Alla div element
//hämtar ALLA <div>-element på sidan
//Använder const och document.getElementById()
//Vi använder const för alla div element hämtas som en lista, så vi vill ha dessa lagrade och att
//man inte kan ändra på dessa.
const outputDiv = document.getElementById('outputDiv');
console.log('Div-elementet för utdata: ', outputDiv);


//Uppgift 5 - Skapa en fördefinierad funktion
//Här lägger vi in variabler för referens så vi kan skriva ut både färg och innehåll samtidigt.
const colorInput = document.getElementById('color');
const contentInput = document.getElementById('content');

//Skapar en fördefinierad funktion
//Funktionen skapas som en funktionsdeklaration
//Funktionen används som eventlyssnare, alltså ligger på "vänt" tills en användare har skrivit i inputfältet 
//och denna funktion skall då aktiveras. Detta genom (e) som betyder "tar emot eventobjekt".
function handleInputEvent(e) {
    //Skriver ut avsändaren (target) i consolen. 
    //Alltså e är eventobjektet, och e.target är elementet där händelen uppstod (skrivandet i inputfältet) 
    console.log("Avsändare: ", e.target); 

    //Hämtar värdena fårn BÅDA fälten, därav de första referenserna som vi började med
    const colorValue = colorInput.value;
    const contentValue = contentInput.value;

    //Här gör vi en snygg utskrift i den tomma rutan, med de värden som användaren har fyllt i 
    const combinedOutput = 'Färg: ' + colorValue + ' | Innehåll: ' + contentValue;

    //Här skrivs den förgående strängen ut i rutan, så den blir synlig där
    outputDiv.innerHTML = combinedOutput;

    //Utskrift till consolen med de värden som användaren fyllt i
    console.log('Div-innehåll uppdaterat till: ' + combinedOutput);
}

//Uppgift 6 - Koppla eventlyssnare
//Kopplar eventlyssnare till textfälten
Array.from(textFields).forEach(function(field) {

    //Använder eventet 'input', handleInputEvent skickas som referens
    field.addEventListener('input', handleInputEvent);

    console.log('Eventlyssnare "input" kopplad till fält: ' + field.name);
});

//Kopplar eventlyssnare till checkboxen
//Kopplar till eventet "change"
divStyleCheckbox.addEventListener('change', function(e) {

    //Hämtar den färg som användaren skrivit i
    const colorValue = colorInput.value;

    //Ändrar färgen på div-elementet, alltså den tomma rutan där all text hamnar
    outputDiv.style.backgroundColor = colorValue;

    //Utskrift till consolen
    console.log("Bakgrundsfärgen ändrades till: ", colorValue);
});

//Kopplar eventlyssnare till knappen
//Kopplar till eventet "click"
clickButton.addEventListener('click', function(e) {

    //Skriver ut till consolen, att användaren tryckt på knappen
    console.log('Klick har utförts: ', e.target);

    //Vi tar bort hela div-elementet, när användaren tryckt på knappen
    if (outputDiv) {
        outputDiv.remove();

        //Skriver ut till consolen
        console.log('Div-elementet borttaget.');
    }
});

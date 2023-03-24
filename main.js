console.clear();
//Create an async function.
let data = ``;
async function getDefinition() {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_GB/${inputValue}`);
    const data = await response.json();
    console.log(data);
    console.log(data[0].meanings[0].definitions[0].definition);
    //console.log(data.querySelector("#definitions"));
  
};

let inputField = document.getElementById("userInputWord");
let inputValue = ``;

inputField.addEventListener('keyup', (event) => {
    inputValue = event.target.value;
    console.log(inputValue);
});

let submitButton = document.getElementById("submitWord");
submitButton.addEventListener('click', getDefinition);

//getDefinition();

//Define where the location of the definition of hello is stored within the json packet.
//It starts within data. 0, meanings, 2, definitions, 0, definition.

// The PLAN

// create a method for user to input their own word
    // create an input field on the HTML file - the text inputted is tracked within this field ✅
    // create a submit button✅
    // add an event listener to the input field to track the user input✅
    // add an event listener to the submit button to trigger the fetch function✅
    // use the word inputted by user as the input to the getDefinition function✅
// alter the api so that url is not specific to hello

// what happens if the api does not contain the word the user has input
        // create a conditional statement to check if the word is in the api
        // return word not recognized try another word
// display the definition on the page
    // create a div on the HTML file
    // create a p tag on the HTML file
    // make the text within the p update with the definition
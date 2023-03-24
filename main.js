//Create an async function.
let data = ``;
async function getDefinition() {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_GB/hello`);
    const data = await response.json();
    console.log(data);
    console.log(data[0].meanings[2].definitions[0].definition);
};

getDefinition();

//Define where the location of the definition of hello is stored within the json packet.
//It starts within data. 0, meanings, 2, definitions, 0, definition.
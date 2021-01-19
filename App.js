let roman = ''; //<-
let num = 0; //<-

const romanCharacters = {
    I: 1, 
    V: 5, 
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}


const convertBtn = document.getElementById('convertBtn');
const input = document.getElementById('inputValue');

function convertToNumber(e){
    const input = e.target.value;
    const romanValue = document.querySelector('#romanValue'); 
    
    for(const numValue in romanCharacters){
        if(Number(input) === romanCharacters[numValue]){
            romanValue.value = numValue;
        }
      
    }

}

function convertToRoman(e){
    const input = e.target.value; // event target, roman input field
    const numValue = document.querySelector('#numValue')// getting the numeric foeld
    
        for(const romanProperty in  romanCharacters){
            if (romanProperty === input.toUpperCase()) {
                  numValue.value =  romanCharacters[romanProperty];
                  break;
            }
        }
  
}

document.getElementById('romanValue').addEventListener('keyup',convertToRoman);
document.getElementById('numValue').addEventListener('keyup',convertToNumber);

// experimenting

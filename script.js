const num1 = document.getElementById("num1");
const fromUnit = document.getElementById("inputUnitSelect");
const toUnit = document.getElementById("outputUnitSelect");
const quantity = document.getElementById("quantitySelect");

//Object containing functions to convet all unit pairs available
var data = {
    length: {
        metre: {
            feet: function metreToFeet(arg) {
                answer = arg*3.281;
                return answer;
            },
            yards: {},
            miles: {}
        },
        feet: {
            metre: {},
            yards: {},
            miles: {}
        },
        yards: {
            metre: {},
            feet: {},
            miles: {}
        },
        miles: {
            metre: {},
            feet: {},
            yards: {}
        }
    },
    pressure: {},
    mass: {},
    temperature: {}
};

const results = data[quantity.value][fromUnit.value][toUnit.value];
const outputField = document.getElementById("num2");

//function to initiate conversion of number in input field
function convert() {
    outputField.placeholder = data[quantity.value][fromUnit.value][toUnit.value](num1.value);
    
}

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
            yards: function metreToYards(arg) {
                answer = arg * 1.094;
                return answer;
            },
            miles: function metreToMiles(arg) {
                answer = arg / 1609;
                return answer;
            },
            metre: function metreToMetre(arg) {
                return arg;
            }
        },
        feet: {
            metre: function feetToMetre(arg) {
                answer = arg / 3.281;
                return answer;
            },
            yards: function feetToYards(arg) {
                answer = arg / 3;
                return answer;
            },
            miles: function feetToMiles(arg) {
                answer = arg / 5280;
                return answer;
            },
            feet: function feetToFeet(arg) {
                return arg;
            }
        },
        yards: {
            metre: function yardsToMetre(arg) {
                answer = arg / 1.094;
                return answer;
            },
            feet: function yardsToFeet(arg) {
                answer = arg * 3;
                return answer;
            },
            miles: function yardsToMiles(arg) {
                answer = arg / 1760;
                return answer;
            },
            yards: function yardsToYards(arg) {
                return arg;
            }
        },
        miles: {
            metre: function milesToMetre(arg) {
                answer = arg * 1609;
                return answer;
            },
            feet: function milesToFeet(arg) {
                answer =arg * 5280;
                return answer;
            },
            yards: function milesToYards(arg) {
                answer = arg * 1760;
                return answer;
            },
            miles: function milesToMiles(arg) {
                return arg;
            }
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
    outputField.value = data[quantity.value][fromUnit.value][toUnit.value](num1.value);
    
}

function unitSet() {
}
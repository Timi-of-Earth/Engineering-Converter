const num1 = document.getElementById("num1").nodeValue,
num2 = document.getElementById("num2").placeholder,
fromUnit = document.getElementById("inputUnitSelect").value,
quantity = document.getElementById("quantitySelect").value;
var data = {
    length: {
        metre: {
            feet: function metreToFeet(num1) {
                answer = num1*3.281;
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

function convert() {
    num2 = data.quantity.fromUnit.toUnit(num1);
}


var num1 = document.getElementById("num1").value,
fromUnit = document.getElementById("inputUnitSelect").value,
toUnit = document.getElementById("outputUnitSelect").value,
quantity = document.getElementById("quantitySelect").value;

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

function convert() {
    var num2 = data.quantity.fromUnit.toUnit(num1);
    document.getElementById("num2").placeholder = num2;
}

(function () {
    "use strict";

    function isOperatorBtn (buttonToTest) {
        return (buttonToTest.className.split(" ").indexOf("operatorBtn") > -1);
    }//context of this function is to determine if one class name is within the array we created. Determine if the class operatorBtn has been applied to the element. Checking to see if its there.

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        if(num2 !== 0) {
            return num1 / num2;
        } else {
            return false;
        }
    }

    function computeCalculation(leftOperand, rightOperand, operator) {
        switch (operator) {
            case "+":
                return add(Number(leftOperand), Number(rightOperand));

            case "-":
                return subtract(Number(leftOperand), Number(rightOperand));

            case "\u00D7":
                return multiply(Number(leftOperand), Number(rightOperand));

            case "÷":
                return divide(Number(leftOperand), Number(rightOperand));

        }
    }

    function clearCalculator(left, right, operator) {
        left.value = "";
        operator.value = "";
        right.value = "";
    }

    function triggerCalculation(left, right, operator) {
        var leftValue = left.value;
        var rightValue = right.value;
        var operatorValue = operator.value;
        var calculationValue;

        if(leftValue.length > 0 && rightValue.length > 0 && operatorValue.length > 0) {
            calculationValue = computeCalculation(leftValue, rightValue, operatorValue);

            if(calculationValue !== false) {
                left.value = calculationValue;
                operator.value = "";
            } else {
                alert("Sorry, can not divide by 0!");
            }
            right.value = "";
        }
    }

    var buttonPressed = "";

    var leftOperand = document.getElementById("leftOperand");
    var operator = document.getElementById("operator");
    var rightOperand = document.getElementById("rightOperand");
    var calculatorButtons = document.getElementsByClassName("calculatorBtn"); //all the elements that have this class name create the "HTML Collection" - can't use for.each on collections/

    for (var i = 0; i < calculatorButtons.length; i++) {
        calculatorButtons[i].addEventListener('click', function (event) {     //calculatorButton[i] this is iterating through the HTML collection
           event.preventDefault();
           buttonPressed = this.innerText;

           switch(buttonPressed) {
               case "C":
                   clearCalculator(leftOperand, rightOperand, operator);
                   break;

               case "=":
                   triggerCalculation(leftOperand, rightOperand, operator);
                   break;

               case "%":
                   rightOperand.value = "100";
                   operator.value = "÷";
                   triggerCalculation(leftOperand, rightOperand, operator);
                   break;

               case "+/-":
                   rightOperand.value = "-1"; //automatically uses the left operand to negate-basically negative the -1 is placed in the right-operand
                   operator.value = "\u00D7"; //this is the unicode for the multiplication symbol
                   triggerCalculation(leftOperand, rightOperand, operator);
                   break;

               default:
                   // an operator button was clicked
                   if (isOperatorBtn(this)) {
                       operator.value = buttonPressed;
                   }
                   // operand button was clicked, determining if we should put the input in the left or right operand
                   else {
                       // if the operator has a value, put the input in the right operand
                       if (operator.value.length > 0) {

                           //
                           if (buttonPressed === ".") {
                               buttonPressed = rightOperand.value.indexOf(".") > -1 ? "" : buttonPressed;
                           }

                           rightOperand.value = rightOperand.value + buttonPressed;
                       }
                       else {
                           if(buttonPressed === ".") {
                               buttonPressed = leftOperand.value.indexOf(".")  > -1 ? "" : buttonPressed;
                           }
                           leftOperand.value = leftOperand.value + buttonPressed;
                       }

                   }

           }
                   //No operator value, so put the value in the left operand.

        });
    }
})();
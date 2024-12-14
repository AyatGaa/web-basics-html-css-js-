console.log("HHH");
let currentExpression = "";

var btns = document.querySelectorAll("input");
console.log(btns);

function EnterOperator(value){
    currentExpression += value; 
    document.getElementById("Answer").value = currentExpression;

}
function EnterNumber(value) {
    currentExpression += value; 
    document.getElementById("Answer").value = currentExpression;
}

function EnterClear() {
    currentExpression = "";  
    document.getElementById("Answer").value = currentExpression;
}
function EnterEqual() {
    try {
        
        let result = eval(currentExpression);
        document.getElementById("Answer").value = result;
        currentExpression = result.toString();
        
    } catch (error) {
        
        document.getElementById("Answer").value = "Error";
        currentExpression = ""; // Reset the expression
    } 
}


 //brutee Forcee
for (var i = 0; i < btns.length; i++) {

btns[i].addEventListener("click", function(e){
        if (btns[i].value === "1") {
           one = btns[i].value;
            EnterNumber(one);
        } else if (btns[i].value === "2") {
            two = btns[i].value;
            EnterNumber(two);
        } else if (btns[i].value === "3") {
            three = btns[i].value;
            EnterNumber(three);
        } else if (btns[i].value === "4") {
            four = btns[i].value;
            EnterNumber(four);
        }
        else if (btns[i].value === "5") {
            five = btns[i].value;
            EnterNumber(five);
        }
        else if (btns[i].value === "6") {
            six = btns[i].value;
            EnterNumber(six);
        }
        else if (btns[i].value === "7") {
            seven = btns[i].value;
            EnterNumber(seven);
        }
        else if (btns[i].value === "8") {
            eight = btns[i].value;
            EnterNumber(eight);
        }
        else if (btns[i].value === "9") {
            nine = btns[i].value;
            EnterNumber(nine);
        }
        else if (btns[i].value === "0") {
            zero = btns[i].value;
            EnterNumber(zero);
        }
        else if (btns[i].value === "+") {
            sum = btns[i].value;
            EnterOperator(sum);
        }
        else if (btns[i].value === "-") {
            sub = btns[i].value;
            EnterOperator(sub);
        }
        else if (btns[i].value === "*") {
            mul = btns[i].value;
            EnterOperator(mul);
        }
        else if (btns[i].value === "/") {
            div = btns[i].value;
            EnterOperator(div);
        }
        else if (btns[i].value === ".") {
            dot = btns[i].value;
            EnterNumber(dot);
        }
         else if (btns[i].value === "=") {
            equla = btns[i].value;
            EnterEqual();
        }

    });
}
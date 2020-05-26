function calc(clickedCellEvent) {
    var clickcell = clickedCellEvent.target;
    var clickedcellindex = parseInt(clickcell.getAttribute('id'));
    var input = document.getElementById(clickedcellindex).value;
    var display = document.getElementById("prob");
    var newvalue = display.value + input;
    display.value = newvalue;
}

function calc1(clickedCellEvent) {
    var clickcell = clickedCellEvent.target;
    var clickedcellindex = parseInt(clickcell.getAttribute('id'));
    var input = "";
    if (clickedcellindex === 10) {
        input = "*";
    } else if (clickedcellindex === 11) {
        input = "/";
    } else if (clickedcellindex === 12) {
        input = "-";
    } else if (clickedcellindex === 13) {
        input = "+";
    }
    var check = "";
    var prev_input = "";
    var display = document.getElementById("prob");
    prev_input = display.value;
    check = prev_input[prev_input.length - 1];
    if (display.value.trim() !== "" && (check !== "*") && (check !== "/") && (check !== "-") && (check !== "+")) {
        var newvalue = display.value + input;
        display.value = newvalue;
    } else {
        alert("Can't apply any operation here..first enter any number...")
    }
}

function soln() {
    var prob = "";
    var elements = ["0", "*"];
    var sign = ["0", "*"];
    elements = [];
    sign = [];
    var input = document.getElementById("prob");
    prob = input.value;
    check = prob[prob.length - 1];
    var ele = "";
    var c = 1;
    if (input.value.trim() !== "" && (check !== "*") && (check !== "/") && (check !== "-") && (check !== "+")) {
        for (var i = 0; i < prob.length; i = i + c) {
            if (prob[i] === "0" || prob[i] === "1" || prob[i] === "2" || prob[i] === "3" || prob[i] === "4" || prob[i] === "5" || prob[i] === "6" || prob[i] === "7" || prob[i] === "8" || prob[i] === "9") {
                ele = prob[i];
                for (var j = i + 1; j < prob.length; j++) {
                    if (prob[j] === "0" || prob[j] === "1" || prob[j] === "2" || prob[j] === "3" || prob[j] === "4" || prob[j] === "5" || prob[j] === "6" || prob[j] === "7" || prob[j] === "8" || prob[j] === "9") {
                        ele = ele + prob[j];
                        c = c + 1;
                    } else {
                        break;
                    }
                }
                elements.push(ele);
            } else {
                elements.push(prob[i]);
                c = 1;
            }

        }
        alert(elements);
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] === "/") {
                var a = parseInt(elements[i - 1]) / parseInt(elements[i + 1]);
                elements[i] = a
                elements.splice(i + 1, 1);
                elements.splice(i - 1, 1);
            }
            if (elements[i] === "*") {
                var b = parseInt(elements[i - 1]) * parseInt(elements[i + 1]);
                elements[i] = b
                elements.splice(i + 1, 1);
                elements.splice(i - 1, 1);
            }
            if (elements[i] === "+") {
                var c = parseInt(elements[i - 1]) + parseInt(elements[i + 1]);
                elements[i] = c
                elements.splice(i + 1, 1);
                elements.splice(i - 1, 1);
            }
            if (elements[i] === "-") {
                var d = parseInt(elements[i - 1]) - parseInt(elements[i + 1]);
                elements[i] = d
                elements.splice(i + 1, 1);
                elements.splice(i - 1, 1);
            }
            if (elements.length === 3) {
                var s = elements[1];
                if (s === "/") {
                    var e = parseInt(elements[0]) / parseInt(elements[2]);
                    elements[1] = e;
                } else if (s === "*") {
                    var e = parseInt(elements[0]) * parseInt(elements[2]);
                    elements[1] = e;
                } else if (s === "+") {
                    var e = parseInt(elements[0]) + parseInt(elements[2]);
                    elements[1] = e;
                } else if (s === "-") {
                    var e = parseInt(elements[0]) - parseInt(elements[2]);
                    elements[1] = e;
                }
            }
        }
        input.value = elements[1];
    } else {
        alert("Such expression is not Allowed");
    }
}

document.querySelectorAll('.button1').forEach(button1 => button1.addEventListener('click', calc));
document.querySelectorAll('.sign').forEach(sign => sign.addEventListener('click', calc1));
document.querySelector('.solution').addEventListener('click', soln);
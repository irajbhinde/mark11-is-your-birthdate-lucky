var dobInput = document.querySelector(".dob-input")
var luckynumInput = document.querySelector(".luckynum")
var checkBtn = document.querySelector(".btn-Check")
const outputBox = document.querySelector(".output-box")

function checkBirthdateIsLucky() {
    const dob = dobInput.value
    const sum = checkSum(dob)
    if (sum && luckynumInput.value){ if (sum % luckynumInput.value == 0) {
       outputBox.innerText = ("Your Birthdate is lucky! 🎉")
    } else {
        outputBox.innerText = ("Your Birthdate is not lucky 😟")
    }
}
    else {
        outputBox.innerText = ("Enter valid input");
    }

   
}

function checkSum(dob) {
    dob = dob.replaceAll("-", "")
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index))
    }
    return sum


}



checkBtn.addEventListener("click", checkBirthdateIsLucky)
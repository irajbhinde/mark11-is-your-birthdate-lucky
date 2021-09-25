var dobInput = document.querySelector(".dob-input")
var luckynumInput = document.querySelector(".luckynum")
var checkBtn = document.querySelector(".btn-Check")

function checkBirthdateIsLucky() {
    const dob = dobInput.value
    const sum = checkSum(dob)
    if (sum && luckynumInput.value){ if (sum % luckynumInput.value == 0) {
        console.log("Your Birthdate is lucky! 🎉")
    } else {
        console.log("Your Birthdate is not lucky 😟")
    }
}
    else {
        console.log("Enter valid input");
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
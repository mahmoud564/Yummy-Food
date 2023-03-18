export default function () {
    let RegxName = /^[\w\s]{4,20}$/;
    let RegxEmail = /^[\w]{4,20}@(yahoo||gmail).com$/;
    let RegxPass = /^(?=.*\d)(?=.*[a-z])[0-9A-Z]{8,}$/i;
    let phoneNamber = /^01[0125][0-9]{8}$/gm
    let age_regex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
    let name = ""
    let email = ""
    let phone = ""
    let age = ""
    let pass1 = ""
    let pass2 = ""
    document.getElementById("nameInput").addEventListener("input", function () {
        if (RegxName.test(nameInput.value)) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")
            name = true
        } else {
            name = false
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")
        }
    })
    document.getElementById("emailInput").addEventListener("input", function () {
        if (RegxEmail.test(emailInput.value)) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
            email = true
        } else {
            email = false
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")
        }
    })
    document.getElementById("phoneInput").addEventListener("input", function () {
        if (phoneNamber.test(phoneInput.value)) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
            phone=true
        } else {phone=false
             document.getElementById("phoneAlert").classList.replace("d-none", "d-block") }
    })
    document.getElementById("ageInput").addEventListener("input", function () {
        if (ageInput.value < 0) {
            ageInput.value = 0
        }
        if (age_regex.test(ageInput.value)) {
            console.log(ageInput.value);
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
            age=true
        } else { age=false
            document.getElementById("ageAlert").classList.replace("d-none", "d-block") }
    })
    document.getElementById("passwordInput").addEventListener("input", function () {
        if (RegxPass.test(passwordInput.value)) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
            pass1=true
            if (repasswordInput.value === passwordInput.value) {
                document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
                pass2=true
            }
        } else { pass1=false
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block") }
    })
    document.getElementById("repasswordInput").addEventListener("input", function () {
        if (repasswordInput.value === passwordInput.value) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
            pass2=true
        } else { pass2=false
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block") }
    })






    let input = document.querySelectorAll("input")
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("input", function () {
            if (
                name == true &&
                email == true&&
                phone == true&&
                age == true&&
                pass1 == true&&
                pass2==true
            ) {

                document.getElementById("submitBtn").disabled = false
            } else { document.getElementById("submitBtn").disabled = true }
        })
    }
}
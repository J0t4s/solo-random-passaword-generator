const random_pass1 = document.getElementById("random_pass_1")
const random_pass2 = document.getElementById("random_pass_2")
const random_pass3 = document.getElementById("random_pass_3")
const random_pass4 = document.getElementById("random_pass_4")
const message = document.getElementById("message_clipboard")
const passwordSlots = 4;

random_pass1.addEventListener("click", copyPassword)
random_pass2.addEventListener("click", copyPassword)
random_pass3.addEventListener("click", copyPassword)
random_pass4.addEventListener("click", copyPassword)

function getPassword() {
    const possibleCharList ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-?/><,.;:{[]}'
    const input_number = document.getElementById("input_number").value
    let randomPassword = ""
    for(let i = 0; i < input_number; i++) {
        randomPassword += possibleCharList[Math.floor(Math.random()*possibleCharList.length)]
    }

    return randomPassword
}

function renderPassword() {
    random_pass1.value = getPassword()
    random_pass2.value = getPassword()
    random_pass3.value = getPassword()
    random_pass4.value = getPassword()
}

function copyPassword() {
        this.select()
        navigator.clipboard.writeText(this.value)
        message.textContent = `Copied password: ${this.value}`
        message.style.opacity = 1
        setTimeout(() => {
            message.style.opacity = 0
        }, 1000)
}






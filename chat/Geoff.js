let words = []
let awords = []
let iwords = []
var objDiv = document.getElementById("messages");
let generate = 0
let fWord = ""
let bMessage = ""
let lastWord = ""
function getKeyCode(word) {
    let keycode = ""
    for (let i = 0; i < word.length; i++) {
        keycode = keycode + (word.charCodeAt(i) - 97).toString()
    }
    return(keycode)
}
function random(array) {
    let rn = Math.floor(Math.random() * array.length)
    return(array[rn])
}
function addMessage(message, sender) {
    $("#messages").append("<b>" + sender +"</b><br><p>" + message + "</p><hr>")
    if (sender != "Geoff") {
    let word = ""
    let preword = ""
    for (let i = 0; i <= message.length; i++) {
        if (message.charAt(i) == " " || message.charAt(i) == "") {
            if (iwords[getKeyCode(word)] == undefined) {
                words.push(word);
                iwords[getKeyCode(word)] = words.length
            } else {
                console.log("Duplicate found! " + word)
            }
            if (preword != "") {
                if (awords[getKeyCode(preword)] == undefined) {
                    awords[getKeyCode(preword)] = [word]
                } else {
                    awords[getKeyCode(preword)].push(word)
                }
            }
            preword = word
            word = ""
        } else {
            word = word + (message.charAt(i)).toString()
        }
    }
    botReply()
}
}
function botReply() {
    generate = true
    fWord = random(words)
    bMessage = fWord + " "
    lastWord = awords[getKeyCode(fWord)]
    let nWord = 0
    while (generate) {
        if (lastWord == undefined) {
            generate = false
        } else {
            nWord = random(lastWord)
            lastWord = awords[getKeyCode(nWord)]
            bMessage = bMessage + nWord + " "
        }
    }
    addMessage(bMessage, "Geoff")
}
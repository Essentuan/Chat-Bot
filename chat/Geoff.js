let words = []
let awords = []
let iwords = []
var objDiv = document.getElementById("messages");
function getKeyCode(word) {
    let keycode = ""
    for (let i = 0; i < word.length; i++) {
        keycode = keycode + (word.charCodeAt(i) - 97).toString()
    }
    return(keycode)
}
function addMessage(message, sender) {
    $("#messages").append("<b>" + sender +"</b><br><p>" + message + "</p><hr>")
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
}

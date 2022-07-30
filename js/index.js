
const changeMessage = () => {
    let message = document.getElementById("showMessage");

    if(localStorage.getItem("visited")){ 
       return message.innerText= "Sé que esto no es la gran cosa, \n pero esto nunca se va a perder o borrar \n siempre va a estar siempre que lo quieras ver \n Me gustas, me encantas y lo más importante: \n te quiero muchísimo ❤️"


    }
    message.innerText= "Lee la hoja❤️"
    localStorage.setItem("visited", true);
}


const checkIfVisited = () => {
    let message = document.getElementById("showMessage");

    if(localStorage.getItem("visited")) 
        return message.innerText = "¿Quieres ser mi novia?❤️"

    return false;
}


checkIfVisited();

document.getElementById("showMessage").addEventListener("click", changeMessage);
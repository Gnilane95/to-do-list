document.getElementById("push").onclick = function() {
    let elInput = document.getElementById ("todo-input").value
    console.log (elInput);
    // condition validate form
    if (elInput=="") {
        alert("Ajoute une tâche")
    } else if (elInput.length<5) {
        alert("La tâche est trop courte");
    } else if (elInput.length > 35) {
        alert ("La tâche est trop longue")
    } else{
        console.log ("Tout est ok pour envoyer")
        document.querySelector("#task").innerHTML += `<div class="task d-flex justify-content-between mb-3">
        <p class="mb-0">${elInput}</p>
        <button class="btn-danger">Delate</button>
        </div>`;
    }
}



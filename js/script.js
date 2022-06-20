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
        // console.log ("Tout est ok pour envoyer")
        // ajouter une tâche
        document.querySelector("#task").innerHTML += 
        `<div class="task d-flex justify-content-between mb-3 border-bottom py-3">
        <Span class="mb-0 taskname">${elInput}</Span>
        <button class="btn-danger delate">Delate</button>
        </div>`;
        // delate task
        let tasksDelate= document.querySelectorAll(".delate");
        console.log (tasksDelate)
        for (let i = 0; i < tasksDelate.length; i++) {
        tasksDelate [i].onclick= function () {
            console.log ('click delate');
            this.parentNode.remove();
         }
        }
        // task done
        let taskdone = document.querySelectorAll(".taskname");
        for (let i = 0; i < taskdone.length; i++) {
           taskdone [i].onclick = function () {
            this.classList.toggle("completed");
           };
        }
        document.querySelector ("#todo-input").value = ""
    }
}



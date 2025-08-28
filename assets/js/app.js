var listaTarefas = []



function carregarInformacoes() {
    var tarefasNaoConcluidas = 0
    var tarefasConcluidas = 0

    listaTarefas.forEach(function(item) {
        if(item.tarefaConcluidas === true) {
            tarefasConcluidas ++
        } else {
            tarefasNaoConcluidas ++
        }
        
    })
    

    document.getElementById("numTarefas").innerHTML = tarefasNaoConcluidas
    document.getElementById("numConcluidas").innerHTML = tarefasConcluidas

    if (listaTarefas.length === 0) {
        document.getElementById("semTarefas").style.display = "flex"
        document.getElementById("listaTarefas").style.display = "none"
    } else {
        document.getElementById("listaTarefas").style.display = "flex"
        document.getElementById("semTarefas").style.display = "none"
    }

    exibirListaTarefas()
}


carregarInformacoes()



var formCadastro = document.getElementById("formCadastroTarefa")

formCadastro.addEventListener("submit", function(evento){
    evento.preventDefault(); 

    
    var dadosForm = new FormData(this)
    var tarefa = dadosForm.get("tarefa")
    var objSalva = {
        tarefa: tarefa, 
        concluido: false
    }

    
    
    
    listaTarefas.push(objSalva)

    
    carregarInformacoes()
})


function exibirListaTarefas() {
    var html = document.getElementById("listaTarefas")
    html.innerHTML = ""
    
    
    listaTarefas.forEach(function(item) {
        html.innerHTML += `
             <div>
                <button title="Concluir Tarefa"></button>
                <p>${item.tarefa}</p>
                <button title="Excluir Tarefa">
                    <img src="img/lixeira.png" 
                         alt="Icone Lixeira" />
                </button>
            </div>
        `
        
    })
}
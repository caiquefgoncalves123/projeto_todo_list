var listaTarefas = []
var textoFiltro = "" 

function carregarInformacoes() {
    var tarefasNaoConcluidas = 0
    var tarefasConcluidas = 0

    listaTarefas.forEach(function(item) {
        if(item.concluido === true) {
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
    var tarefa = dadosForm.get("tarefa").trim()

    // Atividade 05
    if (!tarefa) {
        alert("Digite uma tarefa!")
        return
        
    }

    // Atividade 04
    var duplicada = listaTarefas.some(function(item) {
        return item.tarefa.toLowerCase() === tarefa.toLowerCase()
    })
    if (duplicada) {
        alert("Tarefa já existe!")
        return
    }

    
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

    // Atividade 06
    var tarefasFiltradas = listaTarefas.filter(function (item) {
        return item.tarefa.includes(textoFiltro)
    })
    

    tarefasFiltradas.forEach(function(item, indexFiltrado) {
        // Atividade 07
        var indexOriginal = listaTarefas.indexOf(item)
        html.innerHTML += `
             <div class="tarefa-item${item.concluido ? ' concluida' : ''}">
                <button title="Concluir Tarefa" onclick="concluirTarefa(${indexOriginal})">
                    ${item.concluido ? '✔️' : ''}
                </button>
                <p>${item.tarefa}</p>
                <button title="Excluir Tarefa" onclick="excluirTarefa(${indexOriginal})">
                    <img src="img/lixeira.png" alt="Icone Lixeira" />
                </button>
            </div>
        `
    })
}

// Atividade 01
function concluirTarefa(index) {
    listaTarefas[index].concluido = !listaTarefas[index].concluido
    carregarInformacoes()
    
}

// Atividade 02
function excluirTarefa(index) {
    listaTarefas.splice(index,1)
    carregarInformacoes()
    
}

// Atividade 06 parte 02
var campoFiltro = document.getElementById("inputBusca")
campoFiltro.addEventListener("input", function () {
    textoFiltro = this.value
    exibirListaTarefas()
    
})
var it = document.getElementById(`fitem`)
var res = document.getElementById(`fres`)
//var nome = prompt(`Qual será o nome da sua lista?\n`)

document.getElementById(`nomelista`).innerHTML = `${nome.toUpperCase()}`

function add(){

    var item = String(it.value)

    if (item == 0) {
        window.alert(`[ERRO] \n\nFavor preencher um item a ser adicionado na lista!`)
    } else {
        var itemadd = document.createElement(`li`)
        itemadd.innerHTML = `<input type="checkbox" class="fcheck">${item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()}`
        res.appendChild(itemadd)
        document.getElementById(`fitem`).value = ``
        document.getElementById(`fitem`).focus()
        cont += 1
    }
}

function delet() {

    window.alert(cont)



}

// criar a funçao delet
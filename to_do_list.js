var item = document.getElementById(`fitem`)
var res = document.getElementById(`fres`)
// var titulo = prompt(`Qual o nome da sua lista? \n`) ------------------------------------------------------------------
var ordem = []
var cont = 0

document.getElementById(`nomelista`).innerHTML = `${titulo.charAt(0).toUpperCase()+titulo.slice(1).toLowerCase()}`

function add(){

    it = String(item.value)

    if(it == 0){
        window.alert(`[ERRO]\n\nDigite o item a ser inserido na lista!`)
    } else {
        var itemadc = document.createElement(`li`)
        itemadc.innerHTML = `${it.charAt(0).toUpperCase()+it.slice(1).toLowerCase()}`
        res.appendChild(itemadc)
        document.getElementById(`fitem`).value=``
        document.getElementById(`fitem`).focus()
        cont += 1
        ordem.push(cont)
    }

}

function del(){


    


}


// terminar a funçao del
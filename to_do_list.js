var item = document.getElementById(`fitem`)
var res = document.getElementById(`fres`)
var titulo = prompt(`Qual o nome da sua lista? \n`)
var cont = 0

document.getElementById(`nomelista`).innerHTML = `${titulo.charAt(0).toUpperCase()+titulo.slice(1).toLowerCase()}:`

function add(){

    it = String(item.value)

    if(it == 0){
        window.alert(`[ERRO]\n\nDigite o item a ser inserido na lista!`)
    } else {
        var itemadc = document.createElement(`li`)
        itemadc.innerHTML = `${it.charAt(0).toUpperCase()+it.slice(1).toLowerCase()}`
        itemadc.id = `${cont+1}`
        res.appendChild(itemadc)
        document.getElementById(`fitem`).value=``
        document.getElementById(`fitem`).focus()
        cont += 1
    }
}

function del(){
    
    itdel = Number(item.value)
    var nextid = itdel+1

    if(itdel == 0 || itdel > cont){
        window.alert(`[ERRO]\n\nDigite o numero do item a ser deletado!`)
    } else {
        document.getElementById(`fitem`).value=``
        document.getElementById(`fitem`).focus()
        document.getElementById(itdel).remove(this)
        cont -= 1
        for(nextid; nextid <= Infinity; nextid+=1){
            document.getElementById(nextid).id = `${nextid-1}`
        }
    
    }
}
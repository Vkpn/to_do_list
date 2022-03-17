var item = document.getElementById(`fitem`)
var res = document.getElementById(`fres`)
var titulo = prompt(`Qual o nome da sua lista? \n`)
var cont = 0

if(String(titulo) == 0){
    document.getElementById(`nomelista`).innerHTML = `Lista sem nome:`
} else {
    document.getElementById(`nomelista`).innerHTML = `${titulo.charAt(0).toUpperCase()+titulo.slice(1).toLowerCase()}:`
}

function add(){

    var it = String(item.value)

    if(it == ``){
        window.alert(`[ERRO]\n\nDigite o item a ser inserido na lista.`)
    } else {
        var itemadc = document.createElement(`li`)
        itemadc.innerHTML = `<input type="checkbox" name="checkbox" id="checkbox">` + `${it.charAt(0).toUpperCase()+it.slice(1).toLowerCase()}`
        itemadc.id = `${cont+1}`
        res.appendChild(itemadc)
        document.getElementById(`fitem`).value=``
        document.getElementById(`fitem`).focus()
        cont += 1
    }
}

function del(){
    
    var itdel = Number(item.value)
    var nextid = itdel+1

    if(itdel == 0 || itdel > cont || isNaN(item.value) == true){
        window.alert(`[ERRO]\n\nDigite o numero do item a ser deletado.`)
        document.getElementById(`fitem`).value=``
        document.getElementById(`fitem`).focus()
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

function imprimir(){

    if(cont == 0){
        document.getElementById(`imprimir`).style.display = `block`
        window.alert(`[ERRO]\n\nAdicione itens a lista para imprimir.`)
    } else {
        var dados = document.getElementById(`fres`).innerHTML
        var imprimir = window.open(``,``,`width=1200,height=1000`)
        imprimir.document.write(innerHTML = `<h1 style="text-align: center; font-size: 3rem;">${titulo.charAt(0).toUpperCase()+titulo.slice(1).toLowerCase()}:</h1>` + `<div style="font-size: 1.2vh; padding: 0px 20px; font-family: arial; font-size: 1.1rem;"> ${dados}</div>` + `<hr><p style="text-align: center; bottom: 10px; left: 38%;"> Obrigado por utilizar meu site! </p>`)
        imprimir.document.close()
        imprimir.print()
        document.getElementById(`checkbox`).style.display = ``
    }

}
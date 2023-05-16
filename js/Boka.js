function salong(){
    var salong = document.getElementById("salonger");
    if(salong.style.display == "block"){   
    salong.style.display = "none"
    }
    else{
    salong.style.display = "block"
    }
}

function behandling(){
    var behandling = document.getElementById("behandling");
    if(behandling.style.display == "block"){   
    behandling.style.display = "none"
    }
    else{
    behandling.style.display = "block"
    }
}

function tid(){
    var tid = document.getElementById("tid");
    if(tid.style.display == "block"){   
    tid.style.display = "none"
    }
    else{
    tid.style.display = "block"
    }
}

let dag = 0

function pil(n){
    
    if (dag == 0){
        dag +=1
    }  

    else if (dag == 4){
        dag -= 1
    }

    else{
        dag += n
    }

    if (dag == 0){
        getElementById("dag").innerHTML = Måndag
    }

    else if ( dag == 1){
        getElementById("dag").innerHTML = Tisdag
    }

    else if (dag == 2){
        getElementById("dag").innerHTML = Onsdag
    }

    else if (dag == 3){
        getElementById("dag").innerHTML = Torsdag
    }

    else if (dag == 4){
        getElementById("dag").innerHTML = Fredag
    }

}
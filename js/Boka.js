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

function pilleft(){
    
    if( dag >= 0){
        dag -= 1
        if (dag == 0){
            document.getElementById("dag").innerHTML = "Måndag"
        }

        else if ( dag == 1){
            document.getElementById("dag").innerHTML = "Tisdag"
        }

        else if (dag == 2){
            document.getElementById("dag").innerHTML = "Onsdag"
        }

        else if (dag == 3){
            document.getElementById("dag").innerHTML = "Torsdag"
        }

        else if (dag == 4){
            document.getElementById("dag").innerHTML = "Fredag"
        }
    }
}

function pilright(){
    
    if( dag <= 4){
        dag += 1
        if (dag == 0){
            document.getElementById("dag").innerHTML = "Måndag"
        }

        else if ( dag == 1){
            document.getElementById("dag").innerHTML = "Tisdag"
        }

        else if (dag == 2){
            document.getElementById("dag").innerHTML = "Onsdag"
        }

        else if (dag == 3){
            document.getElementById("dag").innerHTML = "Torsdag"
        }

        else if (dag == 4){
            document.getElementById("dag").innerHTML = "Fredag"
        }
    }
}
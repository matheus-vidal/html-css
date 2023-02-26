let ops = document.getElementsByTagName("menu")[0]

function mostramenu(){
    if(ops.style.display == "block"){
        ops.style.display = "none"
    }
    else{
        ops.style.display = "block"
    }
}

function arrumarbug(){
    let test = document.getElementsByTagName("body")[0]

    if(window.innerWidth >= 768){
        ops.style.display = "block"
    }
    else{
        ops.style.display = "none"
    }
}

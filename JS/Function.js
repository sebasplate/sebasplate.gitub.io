document.getElementById('boton').onclick = function(){
    console.log("Caputuramos el evento click");
    document.getElementById("demo").innerHTML = "Probando JS"
}

document.getElementById('boton_color').addEventListener('click', function(){
    document.body.style.background = '#812E05';
});

document.getElementById('boton_reestablecer').addEventListener('click', function(){
    document.body.style.background = '#804900';
});

document.getElementById('boton_ocul').addEventListener('click', function(){
    document.getElementById('demo').style.display = 'none';
});
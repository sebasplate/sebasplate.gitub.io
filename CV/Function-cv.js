document.getElementById('buttonID').onclick = function (){
    console.log('Mostrando idiomas')
    document.getElementById('verIdiomas').style.display='block' 
}
document.getElementById('ocult').addEventListener('click', function(){
    document.getElementById('info').style.display ='none'
})


document.getElementById('fondo').addEventListener('click', function(){
    document.body.style.backgroundColor = '#99F3CD'
})
document.getElementById('fondo_rest').addEventListener('click', function(){
    document.body.style.backgroundColor = '#DDFCDC'
})
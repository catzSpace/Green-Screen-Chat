const boton = document.querySelector('.botoncito');
const contenedor = document.querySelector('.text_space');


boton.addEventListener('click', contenedor);

function enviar_texto(){
    const catch_text = document.querySelector('.entrada').value;
    const mensaje = document.createElement('p');
    mensaje.textContent = ">" + " " + catch_text;

    if (catch_text == ""){
        console.log("vacio we")
    }

    else{
        contenedor.appendChild(mensaje);
        mensaje.classList.add('an');
        
        setTimeout(() => {
            mensaje.classList.add('des');
            mensaje.classList.remove('an');
            }, 2000);

        setTimeout(() => {
            mensaje.classList.remove('des');
            mensaje.classList.add('inv');
        }, 5000)
        } 
}

//orgulloso :D

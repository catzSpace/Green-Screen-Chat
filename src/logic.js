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
    }
    
}


//orgulloso :D

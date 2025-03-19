document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("nombre-amigo");
    const btnAgregar = document.getElementById("btn-agregar");
    const btnSortear = document.getElementById("btn-sortear");
    const listaAmigos = document.getElementById("lista-amigos");
    const resultado = document.getElementById("resultado");

    let amigos = [];

    // Función para agregar un nombre a la lista
    function agregarAmigo() {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    }

    btnAgregar.addEventListener("click", agregarAmigo);

    // Función para actualizar la lista visible
    function actualizarLista() {
        listaAmigos.innerHTML = "";
        for (let i = 0; i < amigos.length; i++) {
            const li = document.createElement("li");
            li.textContent = amigos[i];
            listaAmigos.appendChild(li);
        }
    }

    // Función para sortear un amigo secreto
    btnSortear.addEventListener("click", () => {
        if (amigos.length < 2) {
            alert("Debes agregar al menos dos nombres para hacer el sorteo.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.textContent = `El amigo secreto es: ${amigos[indiceAleatorio]}`;
    });
});

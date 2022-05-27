const { ipcRenderer } = require("electron")

const cerrar = document.getElementById("cerrar")
const minimizar = document.getElementById("minimizar")
const maximizar = document.getElementById("maximizar")

minimizar.addEventListener('click', () =>(
    ipcRenderer.send("minimizedApp")
))
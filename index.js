const btnInicio = document.querySelector("#btn-ingresar")
const btnOperacion = document.querySelector("#btnEjecucion")
const inputUser = document.querySelector("#usuario")
const inputContra = document.querySelector("#password")
const inputMonto = document.querySelector("#monto")
const selectOperacion = document.querySelector("#operacion1")
const section1 = document.querySelector("#seccionUser")
const section2 = document.querySelector("#seccionOperacion")
const totalSaldo = document.querySelector("#total")

const saldo = 540


btnOperacion.addEventListener("click", ejecucion);
btnInicio.addEventListener("click", verificarUsuario);

section2.style.display = "none";


function verificarUsuario(){
    console.log("usauario: ", inputUser.value )
    if (inputUser.value === "luis" && parseInt(inputContra.value) === 1234){
        console.log("usuario: ", inputUser.value)
        console.log("contraseña: ", inputContra.value )
        section1.style.display = "none";
        section2.style.display = "block";
    } else {
        alert("usuario incorecto o contraseña incorecto")

        alert("porfavor revice su usuario y contraseña")
     
    }
}
function ejecucion(){
    let monto = Number(inputMonto.value)
    if (selectOperacion.value === "1" ){
        let deposito = Number(monto + saldo)
        totalSaldo.innerHTML = `Su saldo actual es de: ${deposito}`
    } else if (selectOperacion.value === "2") {
        let retiro = Number(saldo - monto)
        totalSaldo.innerHTML = `Su saldo actual es de: ${retiro}`
    } else {
        alert("Por favor ingresar una operacion")
    }
}
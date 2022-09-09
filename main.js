//inicializar var
let tarjetasDestapadas = 0;
let tarjeta1 = null
let tarjeta2 = null
let primerResltuado =  null
let segundoResltuado =  null
let movimientos =  0
let aciertos =  0
let tiemporegresivo =  null
//mostrtar movimientos
let mostarMovimientos =  document.getElementById("movimiento")
let mostarAciertos =  document.getElementById("aciertos")
let mostarTiempo =  document.getElementById("tiempo")

//generacion de num alaeatroios
let numero = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
let timer = 0
let temporizador = false

numero = numero.sort(()=>{return Math.random()-0.5})
//Funciones secundaria

function conttarTiempo(){
    tiemporegresivo = setInterval(()=>{
        timer++;
        mostarTiempo.innerHTML = "Tiempo: "+ timer 
        if(timer==0){
            clearInterval(tiemporegresivo);
            bloarTarjetas()
        }
    },1000)
}


//Funciones principal
function destapar(id) {

    if (temporizador == false) {
        conttarTiempo();
            temporizador = true

        }
  



    tarjetasDestapadas++;
    if (tarjetasDestapadas == 1) {
       //mostrar el 1er numero
        tarjeta1 = document.getElementById(id)
        primerResltuado = numero[id]
        tarjeta1.innerHTML = numero[id]
        //desahuibitlar el btn
        tarjeta1.disabled = true
       
    }else if(tarjetasDestapadas == 2){
        //mostrar segundo numero 
        tarjeta2 = document.getElementById(id)
        segundoResltuado = numero[id]
        tarjeta2.innerHTML = numero[id]
        tarjeta2.disabled = true
        console.log(tarjetasDestapadas)

        //incrementar movimientos movimiento
        movimientos++
        mostarMovimientos.innerHTML = "Movimientos:<br>" + movimientos
        if(primerResltuado === segundoResltuado ){
            tarjetasDestapadas = 0;

            //aciertos
            aciertos++;
            mostarAciertos.innerHTML = "aciertos: </br>"+ aciertos
            if(aciertos==8){
                mostarAciertos.innerHTML = "ganaste: 💪 💪  </br>" + aciertos + " 💪 💪"
                mostarMovimientos.innerHTML = " 💪 💪<br>" + movimientos +" 💪 💪"
            }
        }else{
            //volver a tapar
            setTimeout(
                ()=>{
                    tarjeta1.innerHTML = ""
                    tarjeta2.innerHTML = ""
                    tarjeta1.disabled = false
                    tarjeta2.disabled = false
                    tarjetasDestapadas = 0
                },1000
            )
        }
    }
}

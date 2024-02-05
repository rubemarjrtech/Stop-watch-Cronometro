window.onload = function() {
    let segundos = 0;
    let milesimos = 0;
    let anexarMilesimos = document.getElementById("milesimos");
    let anexarSegundos = document.getElementById("segundos");
    let botaoInicio = document.getElementById("botaoInicio");
    let botaoPare = document.getElementById("botaoPare");
    let botaoReinicio = document.getElementById("botaoReinicio");
    let intervalo;

    botaoInicio.onclick = function() {
        clearInterval(intervalo);
        intervalo = setInterval(cronometroInicio, 10)
    }

    botaoPare.onclick = function() {
        clearInterval(intervalo);
    }

    botaoReinicio.onclick = function() {
        clearInterval(intervalo);
        milesimos = "0" + 0;
        segundos = "0" + 0;
        anexarMilesimos.innerHTML = milesimos;
        anexarSegundos.innerHTML = segundos;
    }

    function cronometroInicio () {
        milesimos++;

        if(milesimos <= 9){
            anexarMilesimos.innerHTML = "0" + milesimos;
        }

        if(milesimos > 9){
            anexarMilesimos.innerHTML = milesimos;
        }

        if(milesimos > 99){
            console.log("segundos");
            segundos++;
            anexarSegundos.innerHTML = "0" + segundos;
            milesimos = 0;
            anexarMilesimos.innerHTML = "0" + milesimos;
        }

        if(segundos > 9){
            anexarSegundos.innerHTML = segundos;
        }
    }

}
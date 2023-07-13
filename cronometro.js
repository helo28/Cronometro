window.onload = function() { // FUNÇÃO ANONIMA ELA EXECUTA UMA ÚNICA VEZ
    // ONLOAD SIGNIFICA QUE ELA FUNCIONA APENAS QUANDOA PESSOA ESTÁ NA TELA DELA
    let segundos = 0, milisegundo = 0;

    // APERTA ALT E CLICA DO LADO DE CADA UM QUE ELE COLOCA A MESMA COISA EM TODOS

    let seg = document.querySelector('#seg'); /* ELEMENTO INSERIDO NA VÁRIAVEL*/
    let mseg = document.querySelector('#mseg');

    let btnInicio = document.querySelector('#btnInicio');
    let btnParar = document.querySelector('#btnParar');
    let btnZerar = document.querySelector('#btnZerar');

    let intervalo;

    // ONCLICK VAI EXECULTAR ALGUMA COISA OU PODE SER O ADD EVENT LISTENER
    btnInicio.onclick = function() {
        clearInterval(intervalo); // LIMPAR E PARAR A FUNCIONALIDADE DO INTERVAL 
        intervalo = setInterval(iniciarContagem, 10); // EXECUÇÃO DO INTERVAL. INTERVAL ELE CONTA O  TEMPO. O 10 É A CONTAGEM DO TEMPO EM MILISEGUNDOS
    } // EXECUTA A FUNÇÃO INDICADA AO TÉRMINO DO TEMPO ESTIPULADO EM MILI 

    btnParar.onclick = function() {
        clearInterval(intervalo);
    }

    btnZerar.onclick = function() {
        clearInterval(intervalo);
        milisegundo = "00" // É DOIS ZEROS PORQUE QUANDO ZERAR ELE APARECE OS DOIS ZEROS DE NOVO
        segundos = "00"
        mseg.innerHTML = milisegundo
        seg.innerHTML = segundos
    }

    function iniciarContagem() {
        milisegundo++ // ACRESCENTA UM VALOR A VÁRIAVEL DE LÁ DE CIMA

        if(milisegundo <= 9) {
            mseg.innerHTML = "0"+milisegundo; // INNERHTML ESTÁ PEDINDO PARA ESCREVER ALGO NA TELA LA NOS 0
        }

        if(milisegundo > 9){
            mseg.innerHTML = milisegundo;
        }

        if(milisegundo > 99){
            segundos++
            milisegundo = 0;
            seg.innerHTML = "0" + segundos;
            mseg.innerHTML = "0"+ milisegundo;
        }

        if(segundos > 9) {
            seg.innerHTML = segundos;
        }
    }
}
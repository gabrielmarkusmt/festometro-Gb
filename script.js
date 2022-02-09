
// Carne - 400 gr por pessoa + de 6 horas - 650
// Creveja - 1200ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/Agua - 1000 ml por pessoa + 6 horas 1500ml
// 15 salgadinhos por pessoa

// Crianças valem por 0,5

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calc() {
    console.log("Calculando");
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdtotalcarne = boloPP(duracao) * adultos + (boloPP(duracao) * criancas); 
    let qtdtotalsalg = salgPP(duracao) * adultos + (salgPP(duracao) / 2) * criancas ;
    let qtdtotalrefri = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);
    let qtdtotalagua = aguaPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);
    let qtdtotaldoce = docePP(duracao) * adultos + (docePP(duracao) / 2 * criancas);

    

    resultado.innerHTML = `<p>${qtdtotalcarne/1000} Kg de Bolo</p>` 
    resultado.innerHTML += `<p>${Math.ceil(qtdtotalsalg)} Unidades Salgadinhos </p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdtotalrefri/2000)} Pet's 2L Refrigerante ou/e Suco</p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdtotalagua/2000)} Pet's 2L Água </p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdtotaldoce)} Unidades Docinhos</p>`


}

function boloPP(duracao) {
    if (duracao >= 0) {
        return 150;
    } else {
        return 0;
    }
}


function salgPP() {
    if (duracao >= 6) {
        return 20;
    } else {
        return 10;
    }
}

function refriPP(duracao) {
    if (duracao >= 6) {
        return 800;
    } else {
        return 400;
    }
}

function aguaPP(duracao) {
    if (duracao >= 6) {
        return 1000;
    } else {
        return 500;
    }
}

function docePP(duracao) {
    if (duracao >= 6) {
        return 12;
    } else {
        return 6;
    }
}
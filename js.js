function calcular() {
    const vA = document.getElementById("Ba").value;
    const vB = document.getElementById("Bb").value;
    const vC = document.getElementById("Bc").value;
    let desc = ``;
    
    const delta = (vB * vB) - (4 * vA * vC);

    if (vA == 0) {
        
        desc = desc + `Erro! O valor de A não pode ser zero!`
    } else if (delta <= 0) {
        desc = desc + `Erro! O valor de delta não pode ser zero!`
    } else {
        const xvalor1 = ((-vB) + Math.sqrt(delta)) / (2*vA);
        const xvalor2 = ((-vB) - Math.sqrt(delta)) / (2*vA);
        desc = desc + `O valor de X1 = ${xvalor1} e o valor de X2 = ${xvalor2}`
    }

    document.getElementById('valor-box').innerHTML = desc;
    
}

function limpar() {
    document.getElementById("Ba").value = "";
    document.getElementById("Bb").value = "";
    document.getElementById("Bc").value = "";
    document.getElementById('valor-box').innerHTML = "";
}

function fechar() {
    document.getElementById("fecha").innerHTML.style="display='none'";
}


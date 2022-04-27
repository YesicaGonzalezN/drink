const vasoChico = document.querySelectorAll('.vaso-chico')
const litros = document.getElementById('litros')
const porcentaje = document.getElementById('porcentaje')
const llenar = document.getElementById('llenar')

updateVasoGrande()

vasoChico.forEach((vaso, idx) => {
    vaso.addEventListener('click', () => resaltarVasos(idx))
})

function resaltarVasos(idx) {
    if (idx===7 && vasoChico[idx].classList.contains("full")) idx--;
    else if(vasoChico[idx].classList.contains('full') && !vasoChico[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    vasoChico.forEach((vaso, idx2) => {
        if(idx2 <= idx) {
            vaso.classList.add('full')
        } else {
            vaso.classList.remove('full')
        }
    })

    updateVasoGrande()
}

function updateVasoGrande() {
    const fullVasos = document.querySelectorAll('.vaso-chico.full').length
    const totalVasos = vasoChico.length

    if(fullVasos === 0) {
        porcentaje.style.visibility = 'hidden'
        porcentaje.style.height = 0
    } else {
        porcentaje.style.visibility = 'visible'
        porcentaje.style.height = `${fullVasos / totalVasos * 330}px`
        porcentaje.innerText = `${fullVasos / totalVasos * 100}%`
    }

    if(fullVasos === totalVasos) {
        llenar.style.visibility = 'hidden'
        llenar.style.height = 0
    } else {
        llenar.style.visibility = 'visible'
        litros.innerText = `${2 - (250 * fullVasos / 1000)}L`
    }
}
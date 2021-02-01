/* -------------------------------------------------------------------------- */
/*                                    Focus                                   */
/* -------------------------------------------------------------------------- */

const inputs = document.querySelectorAll('.form-input')

/* -------------------------------------------------------------------------- */
/*                                Agregar Focus                               */
/* -------------------------------------------------------------------------- */
function focusOn(){
    let parent = this.parentNode.parentNode
    parent.classList.add('focus')
}

/* -------------------------------------------------------------------------- */
/*                                Quitar focus                                */
/* -------------------------------------------------------------------------- */
function focusOff(){
    let parent = this.parentNode.parentNode

    if(this.value === '') parent.classList.remove('focus')
}

/* -------------------------------------------------------------------------- */
/*                              Invocar funciones                             */
/* -------------------------------------------------------------------------- */
inputs.forEach(input => {
    input.addEventListener('focus', focusOn)
    input.addEventListener('blur', focusOff)
})
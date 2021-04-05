// Contador inicial
let count = 0;

// Selecciono los botones del html y valor
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

// Accedo a cada boton especifico
btns.forEach(function (btn) {
    btn.addEventListener('click', function() {// click a cada btn
        console.log(event.currentTarget.classList);
        const styles = event.currentTarget.classList;
        
        if(styles.contains('decrease')) { // si el btn contiene la class decreas
            count--; // decremento el valor.
        } else if (styles.contains('increase')){
            count++;
        } else if (styles.contains('reset')){
            count = 0;
        } 

        // Cambiar el color para que este en rojo cuando sea nengativo
        if(count > 0) {
            value.style.color = 'green';
        } 
        if (count < 0) {
            value.style.color = 'red';
        }
        if( count === 0) {
            value.style.color = '#222';
        }
        // Imprimo Value en html
        value.textContent = count;
    })
});
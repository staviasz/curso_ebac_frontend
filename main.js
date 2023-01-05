const form = document.getElementById('form-comparacao');
const numberA = document.getElementById('numberA');
const numberB = document.getElementById('numberB');
let form_valido = false;

function compara_numeros(numberA, numberB) {
    
    return parseInt(numberA) < parseInt(numberB)
};


form.addEventListener('submit', function(e){ 
    e.preventDefault();
    form_valido = compara_numeros(numberA.value, numberB.value)

    const msg_sucesso = `O numero ${numberA.value} é menor que ${numberB.value}.`

    if (compara_numeros(numberA.value, numberB.value)){
        const container_mensagen_sucesso = document.querySelector('.sucess-message')
        container_mensagen_sucesso.innerHTML = msg_sucesso
        document.querySelector('.sucess-message').style.display = 'block';


    } else {
        numberB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

numberB.addEventListener('keyup', function(e){
    form_valido = compara_numeros(numberA.value, e.target.value)

    if (!form_valido){
        numberB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numberB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
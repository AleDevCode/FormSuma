const form = document.getElementById('form');
const primerNum = document.getElementById('numero1');
const segundoNum = document.getElementById('numero2');
const totalDiv = document.querySelector('.total');



// Show input error message
function showError(input, message) {

    const formControl = input.parentElement;
    console.log(formControl);
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    totalDiv.className = 'total';
}


function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}




// check required fields

 function checkRequired(inputArr) {
   let contador = 0;
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} es requerido`);
          contador++ 
        } else {
            showSuccess(input);
        }
    });

   if(contador=== 0) {
     sumar(inputArr);
   }

}


//Get field name 
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Sumar números

function sumar(inputArr) {
    const numeroUno = + inputArr[0].value;
    const numeroDos = + inputArr[inputArr.length-1].value;
    
    const total = numeroUno + numeroDos;

    console.log(totalDiv);
    totalDiv.className = 'total show';
    const small = totalDiv.querySelector('small');
    console.log(small);
    small.innerText = `El total es ${total}`;
   
}

// EVENT LISTENER
form.addEventListener('submit', (e) => {

    e.preventDefault();

checkRequired([primerNum,segundoNum]);



})
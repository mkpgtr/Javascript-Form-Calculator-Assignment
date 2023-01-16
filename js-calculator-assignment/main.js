// ! This will clear the input field on the input event
// ! but this selects only the first input element
//  ! querySelectorAll was not working
document.querySelector('input').addEventListener('input',()=>{
    document.querySelector('#answer').value=""
})


// ! so I selected the second input by doing this
document.querySelector('.input-2').addEventListener('input',()=>{
    document.querySelector('#answer').value=""
})

// ! This will clear the select field on the whenever there is an input
document.querySelector('select').addEventListener('input',()=>{
    
    document.querySelector('#answer').value=""
})




// ! this submit eventlistener is triggered on form submit

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    let error = document.querySelector('.error')
    // ! the disabled answer field where we show our answer
    const answerField = document.querySelector('#answer')

    // ! the form Data constructor takes a form
    // ! that's why we select the form with querySelector
    const formInformation = new FormData(document.querySelector('form'));

    // ! we store the returned value from the calculate function in the result variable
  const result = calculate(formInformation)
  

//  !  this function returns a number
   function calculate(formInfo){
    

    // ! parseInt is very helpful. I initially added the input fields type text. But then I saw the assignment requirements and changed it back to number

    // ! because of this parseInt whenever the user leaves the input box as blank and makes a submit, it throws invalid input error

    
    
        
        
        let n1 = parseInt(formInfo.get('number1'))
        let operator = formInfo.get('operator')
        let n2 = parseInt(formInfo.get('number2'))


        // ! if any of the numbers are invalid inputs return answerField.value = 'invalid input'
        
        // ! this will stop the function from proceeding onto the if/else operator section
        if(isNaN(n1) || isNaN(n2)){
            
            // ! quite helpful to let the user know that some input is invalid
            error.innerText = 'invalid input'
            
            setTimeout(() => {
                error.innerHTML = ''
                answerField.value = ''
            }, 2000);

            // ! finally return NaN. this NaN will be stored in our result variable

            return NaN
            
            
            
            
        }



        // console.log(n1);


        if(operator==='+'){
            return n1 + n2;
        }
        if(operator==='/'){
            // ! toFixed(2) will round it off to two decimal places
            return (n1 / n2).toFixed(2);
        }
        if(operator==='-'){
            return n1 - n2;
        }
        if(operator==='*'){
            return n1 * n2;
        }
    }


    

    // ! when the page loads the value of the disabled answer field is an empty string that's why we don't see anything.
    // ! but after we calculate the value to set the value of the answer field to the result we obtained from our calculate function.

    answerField.value = result

  

});
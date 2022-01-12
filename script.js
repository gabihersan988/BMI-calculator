const form = document.querySelector('form');

form.addEventListener('submit', function (e) {

  // Para que sirve 'preventDefault'? Intenta averiguarlo
  e.preventDefault();

  console.log("Valor del input: ", e.target.value)

  // Tu código aquí --->

  const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
  
        results.innerHTML = "Please provide a valid height";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight";
    } else {
    
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    
    results.innerHTML = `<span>${bmi}</span>`
    }
    
    
});

});
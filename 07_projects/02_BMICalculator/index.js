const form = document.querySelector('form')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const results = document.querySelector('#results')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const ans = (weight.value*weight.value)/height.value
    let msg=""
    if(ans<=18.6) msg='Under Weight'
    else if(ans<=24.9) msg='Normal Range'
    else msg='Overweight'
    results.innerHTML = `${ans.toFixed(2)}, ${msg}`
})
const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        const color = e.target.id
        switch(color){
            case 'grey':
                body.style.backgroundColor=color
                break;
            case 'white':
                body.style.backgroundColor=color
                break;
            case 'yellow':
                body.style.backgroundColor=color
                break;    
            case 'blue':
                body.style.backgroundColor=color
                break;    
        }
    })
})

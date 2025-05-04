const clock = document.querySelector('#clock')
let date = new Date()
clock.innerHTML = date.toLocaleTimeString()
setInterval(()=>{
    date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
},1000)
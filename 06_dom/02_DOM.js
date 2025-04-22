// const title = document.getElementById('title')
// console.log(title) -------> <h1 id="title" class="heading">DOM Learning <span style="display: none;">testing</span></h1>


// title.id         ---------> 'title'
// title.className  ---------> 'heading'

// title.innerText  ---------> 'DOM Learning'
// title.textContent --------> 'DOM Learning testing'
// title.innerHTML   --------> 'DOM Learning <span style="display: none;">testing</span>'




// const list  = document.getElementsByClassName('list-item')    --------> undefined
// list.forEach((li)=>console.log(li))     ---------->  Uncaught TypeError: list.forEach is not a function
// Array.from(list)                        ----------> (3) [li.list-item, li.list-item, li.list-item]
//    |
//    |
//    |
//    !
//[Converts HTMLCollection to Array]



// const arr = Array.from(list)             ---------> undefined
// arr                                      ---------> (3) [li.list-item, li.list-item, li.list-item]
// arr.forEach((li)=>console.log(li))
//                                   ------------> <li class=​"list-item">​…​</li>​
//                                   ------------> <li class=​"list-item">​…​</li>​
//                                   ------------> <li class=​"list-item">​…​</li>​



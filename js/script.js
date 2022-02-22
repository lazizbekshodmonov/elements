// 'use strict';

// let box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'),
//     circles = document.getElementsByClassName('circle'),
//     hearts = document.querySelectorAll('.heart'),
//     wrapper = document.querySelector('.wrapper');

//     console.log(btns);
    
// for(let i = 0; i < btns.length; i++){
    

//     if(i == 1){
//         btns[i].style.background = 'red';
//     }else{
//         btns[i].style.background = 'blue';
//     }
// }

// let elem = document.createElement('div');

// box.style.cssText = `
//         width: 100px;
//         background-color: blue;
//     `;

// elem.classList.add('black');

// wrapper.append(elem);
// wrapper.appendChild(elem);

// wrapper.prepend(elem);
// wrapper.insertBefore(elem, hearts[0]);

// hearts[1].after(elem);
// hearts[1].before(elem);
// hearts[0].remove();
// wrapper.removeChild(hearts[0]);

// hearts[0].insertAdjacentElement('afterend', elem);


// elem.textContent = '<h5>Open Web</h5>';

// elem.innerHTML = 'Open Web';

let btns = document.querySelectorAll('.number'),
    elem = document.querySelectorAll('.circle');
function btnChangeColor() {
    for (let index = 0; index < btns.length; index++) {
        if (index%2 === 0 ) {
            btns[index].classList.add('red');
        }else{
            btns[index].classList.add('blue');
        }
    }
}
let elem_p = document.createElement('p');
function addNumber() {
    
    for (let index = 0; index < elem.length; index++) {
        elem[index].classList.add('flex');
        elem[index].append(index);
    }
}
addNumber();

btnChangeColor();
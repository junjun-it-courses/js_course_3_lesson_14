// function countRabbits() {
//     for(let i=1; i<=3; i++) {
//         alert("Кролик номер " + i);
//     }
// }

const btn = document.querySelector('[data-btn-click-me]');

// btn.onclick = function() {
//     alert('Спасибо');
// };

// btn.onclick = function(evt) {
//     console.log(event);
//     console.log(event.target);
// };


const btnToolbar = document.querySelector('[data-btn-toolbar]')

// console.log(btnToolbar)
//
// btnToolbar.onclick = (evt) => {
//     console.log(evt.target)
// }
//
// btnToolbar.onclick = (evt) => {
//     console.log(123)
// }

btnToolbar.addEventListener('click', (event) => {
    console.log(event.target)
})

btnToolbar.addEventListener('click', () => {
    console.log('hello world')
})

btnToolbar.addEventListener('click', () => {
    console.log('hello world 2')
})

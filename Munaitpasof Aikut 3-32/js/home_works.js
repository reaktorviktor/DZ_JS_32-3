const gmail_input = document.querySelector('#gmail_input')
const gmail_button = document.querySelector('#gmail_button')
const gmail_result = document.querySelector('#gmail_result')
    const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
gmail_button.onclick = () => {
    if (regExp.test(gmail_input.value)) {
        gmail_result.innerHTML = 'Всё правильно'
        gmail_result.style.color = 'green'
    }else {
        gmail_result.innerHTML = 'Вы ошиблись'
        gmail_result.style.color = 'red'
    }
}

// const childBlock = document.querySelector('.child_block1');
//
//
// const moveSpeedChildBlock = 10
// const perentBlockWidth = 395
// let positionX = 0
// let positionY = 0
// const moveBlock = () => {
//     if (positionX < perentBlockWidth && positionY === 0) {
//         positionX++
//         childBlock.style.left = `${positionX}px`
//         setTimeout(moveBlock, moveSpeedChildBlock)
//     }else if (positionX >= perentBlockWidth && positionY < perentBlockWidth) {
//         positionY++
//         childBlock.style.top = `${positionY}px`
//         setTimeout(moveBlock, moveSpeedChildBlock)
//     }else if (positionX > 0 && positionY === perentBlockWidth) {
//         positionX--
//         childBlock.style.left = `${positionX}px`
//         setTimeout(moveBlock, moveSpeedChildBlock)
//     }else if (positionX === 0 && positionY > 0) {
//         positionY--
//         childBlock.style.top = `${positionY}px`
//         setTimeout(moveBlock, moveSpeedChildBlock)
//     }
// }
// moveBlock()


let counterValue = 0
let counterInterval

function updateCounter() {
    const counterElement = document.getElementById('secondsS')
    if (counterElement) {
        counterElement.innerText = counterValue
    }
}

function startCounter() {
    counterInterval = setInterval(function() {
        counterValue++
        updateCounter()
    }, 1000)
}

document.getElementById('start').addEventListener('click', function() {
    if (!counterInterval) {
        startCounter()
    }
})

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(counterInterval)
    counterInterval = null
})

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(counterInterval)
    counterValue = 0
    updateCounter()
    counterInterval = null
})

const parent = document.querySelector('.parent_block');
const child1 = document.querySelector('.child_block1');
const child2 = document.querySelector('.child_block2');
const child3 = document.querySelector('.child_block3');
const child4 = document.querySelector('.child_block4');
const child5 = document.querySelector('.child_block5');
const child6 = document.querySelector('.child_block6');
const child7 = document.querySelector('.child_block7');
const child8 = document.querySelector('.child_block8');
// const child9 = document.querySelector('.child_block9');
// const child10 = document.querySelector('.child_block10');
// const child11 = document.querySelector('.child_block11');
// const child12 = document.querySelector('.child_block12');
// const child13 = document.querySelector('.child_block13');
// const child14 = document.querySelector('.child_block14');


let angle1 = 1.7;
let angle2 = 2.4;
let angle3 = 3.1;
let angle4 = 3.8;
let angle5 = 4.5;
let angle6 = 5.2;
let angle7 = 5.9
let angle8 = 6.6;
// let angle9 = 7.3;
// let angle10 = 8;
// let angle11 = 8.7;
// let angle12 = 9.4;
// let angle13 = 10.1;
// let angle14 = 11;

const radius = parent.clientWidth / 2 - 1;

function moveCircular() {
    const x1 = parent.clientWidth / 2 + radius * Math.cos(angle1);
    const y1 = parent.clientHeight / 2 + radius * Math.sin(angle1);
    child1.style.left = x1 + 'px';
    child1.style.top = y1 + 'px';

    const x2 = parent.clientWidth / 2 + radius * Math.cos(angle2);
    const y2 = parent.clientHeight / 2 + radius * Math.sin(angle2);
    child2.style.left = x2 + 'px';
    child2.style.top = y2 + 'px';

    const x3 = parent.clientWidth / 2 + radius * Math.cos(angle3);
    const y3 = parent.clientHeight / 2 + radius * Math.sin(angle3);
    child3.style.left = x3 + 'px';
    child3.style.top = y3 + 'px';

    const x4 = parent.clientWidth / 2 + radius * Math.cos(angle4);
    const y4 = parent.clientHeight / 2 + radius * Math.sin(angle4);
    child4.style.left = x4 + 'px';
    child4.style.top = y4 + 'px';

    const x5 = parent.clientWidth / 2 + radius * Math.cos(angle5);
    const y5 = parent.clientHeight / 2 + radius * Math.sin(angle5);
    child5.style.left = x5 + 'px';
    child5.style.top = y5 + 'px';

    const x6 = parent.clientWidth / 2 + radius * Math.cos(angle6);
    const y6 = parent.clientHeight / 2 + radius * Math.sin(angle6);
    child6.style.left = x6 + 'px';
    child6.style.top = y6 + 'px';

    const x7 = parent.clientWidth / 2 + radius * Math.cos(angle7);
    const y7 = parent.clientHeight / 2 + radius * Math.sin(angle7);
    child7.style.left = x7 + 'px';
    child7.style.top = y7 + 'px';

    const x8 = parent.clientWidth / 2 + radius * Math.cos(angle8);
    const y8 = parent.clientHeight / 2 + radius * Math.sin(angle8);
    child8.style.left = x8 + 'px';
    child8.style.top = y8 + 'px';

    // const x9 = parent.clientWidth / 2 + radius * Math.cos(angle9);
    // const y9 = parent.clientHeight / 2 + radius * Math.sin(angle9);
    // child9.style.left = x9 + 'px';
    // child9.style.top = y9 + 'px';
    //
    // const x10 = parent.clientWidth / 2 + radius * Math.cos(angle10);
    // const y10 = parent.clientHeight / 2 + radius * Math.sin(angle10);
    // child10.style.left = x10 + 'px';
    // child10.style.top = y10 + 'px';
    //
    // const x11 = parent.clientWidth / 2 + radius * Math.cos(angle11);
    // const y11 = parent.clientHeight / 2 + radius * Math.sin(angle11);
    // child11.style.left = x11 + 'px';
    // child11.style.top = y11 + 'px';
    //
    // const x12 = parent.clientWidth / 2 + radius * Math.cos(angle12);
    // const y12 = parent.clientHeight / 2 + radius * Math.sin(angle12);
    // child12.style.left = x12 + 'px';
    // child12.style.top = y12 + 'px';
    //
    // const x13 = parent.clientWidth / 2 + radius * Math.cos(angle13);
    // const y13 = parent.clientHeight / 2 + radius * Math.sin(angle13);
    // child13.style.left = x13 + 'px';
    // child13.style.top = y13 + 'px';
    //
    // const x14 = parent.clientWidth / 2 + radius * Math.cos(angle14);
    // const y14 = parent.clientHeight / 2 + radius * Math.sin(angle14);
    // child14.style.left = x14 + 'px';
    // child14.style.top = y14 + 'px';

    const Speed = 0.001

    angle1 += Speed;
    angle2 += Speed;
    angle3 += Speed;
    angle4 += Speed;
    angle5 += Speed;
    angle6 += Speed;
    angle7 += Speed;
    angle8 += Speed;
    // angle9 += Speed;
    // angle10 += Speed;
    // angle11 += Speed;
    // angle12 += Speed;
    // angle13 += Speed;
    // angle14 += Speed;

    if (angle1 >= 2 * Math.PI) {
        angle1 = 0;
    }
    if (angle2 >= 2 * Math.PI) {
        angle2 = 0;
    }
    if (angle3 >= 2 * Math.PI) {
        angle3 = 0;
    }
    if (angle4 >= 2 * Math.PI) {
        angle4 = 0;
    }
    if (angle5 >= 2 * Math.PI) {
        angle5 = 0;
    }
    if (angle6 >= 2 * Math.PI) {
        angle6 = 0;
    }
    if (angle7 >= 2 * Math.PI) {
        angle7 = 0;
    }
    if (angle8 >= 2 * Math.PI) {
        angle8= 0;
    }
    // if (angle9 >= 2 * Math.PI) {
    //     angle9 = 0;
    // }
    // if (angle10 >= 2 * Math.PI) {
    //     angle10 = 0;
    // }
    // if (angle11 >= 2 * Math.PI) {
    //     angle11 = 0;
    // }
    // if (angle12 >= 2 * Math.PI) {
    //     angle12 = 0;
    // }
    // if (angle13 >= 2 * Math.PI) {
    //     angle13 = 0;
    // }
    // if (angle14 >= 2 * Math.PI) {
    //     angle14 = 0;
    // }


    requestAnimationFrame(moveCircular);
}

moveCircular();






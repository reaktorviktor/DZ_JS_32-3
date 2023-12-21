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
const angleBetweenElements = (2 * Math.PI) / 14;

const parent = document.querySelector('.parent_block');
const child1 = document.querySelector('.child_block1');
const child2 = document.querySelector('.child_block2');
const child3 = document.querySelector('.child_block3');
const child4 = document.querySelector('.child_block4');
const child5 = document.querySelector('.child_block5');
const child6 = document.querySelector('.child_block6');
const child7 = document.querySelector('.child_block7');
const child8 = document.querySelector('.child_block8');
const child9 = document.querySelector('.child_block9');
const child10 = document.querySelector('.child_block10');
const child11 = document.querySelector('.child_block11');
const child12 = document.querySelector('.child_block12');
const child13 = document.querySelector('.child_block13');
const child14 = document.querySelector('.child_block14');


let angle1 = 0.7
let angle2 = 1.4
let angle3 = 2.1
let angle4 = 2.8
let angle5 = 3.5
let angle6 = 4.2
let angle7 = 4.9
let angle8 = 5.6
let angle9 = 6.3
let angle10 = 7
let angle11 = 7.7 * Math.PI
let angle12 = 8.4 * Math.PI
let angle13 = 9.1 * Math.PI
let angle14 = 9.8 * Math.PI

const radius = parent.clientWidth / 2 - 1

const childWidth = child1.clientWidth / 2
const childHeight = child1.clientHeight / 2



// Повторите аналогичные вычисления для других дочерних элементов (child2, child3 и т.д.)


function moveCircular() {
    const x1 = parent.clientWidth / 2 + radius * Math.cos(angle1) - childWidth
    const y1 = parent.clientHeight / 2 + radius * Math.sin(angle1) - childHeight
    child1.style.left = x1 + 'px'
    child1.style.top = y1 + 'px'

    const x2 = parent.clientWidth / 2 + radius * Math.cos(angle2) - childWidth
    const y2 = parent.clientHeight / 2 + radius * Math.sin(angle2) - childHeight
    child2.style.left = x2 + 'px'
    child2.style.top = y2 + 'px'

    const x3 = parent.clientWidth / 2 + radius * Math.cos(angle3) - childWidth
    const y3 = parent.clientHeight / 2 + radius * Math.sin(angle3) - childHeight
    child3.style.left = x3 + 'px'
    child3.style.top = y3 + 'px'

    const x4 = parent.clientWidth / 2 + radius * Math.cos(angle4) - childWidth
    const y4 = parent.clientHeight / 2 + radius * Math.sin(angle4) - childHeight
    child4.style.left = x4 + 'px'
    child4.style.top = y4 + 'px'

    const x5 = parent.clientWidth / 2 + radius * Math.cos(angle5) - childWidth
    const y5 = parent.clientHeight / 2 + radius * Math.sin(angle5) - childHeight
    child5.style.left = x5 + 'px'
    child5.style.top = y5 + 'px'

    const x6 = parent.clientWidth / 2 + radius * Math.cos(angle6) - childWidth
    const y6 = parent.clientHeight / 2 + radius * Math.sin(angle6) - childHeight
    child6.style.left = x6 + 'px'
    child6.style.top = y6 + 'px'

    const x7 = parent.clientWidth / 2 + radius * Math.cos(angle7) - childWidth
    const y7 = parent.clientHeight / 2 + radius * Math.sin(angle7) - childHeight
    child7.style.left = x7 + 'px'
    child7.style.top = y7 + 'px'

    const x8 = parent.clientWidth / 2 + radius * Math.cos(angle8) - childWidth
    const y8 = parent.clientHeight / 2 + radius * Math.sin(angle8) - childHeight
    child8.style.left = x8 + 'px'
    child8.style.top = y8 + 'px'

    const x9 = parent.clientWidth / 2 + radius * Math.cos(angle9) - childWidth
    const y9 = parent.clientHeight / 2 + radius * Math.sin(angle9) - childHeight
    child9.style.left = x9 + 'px'
    child9.style.top = y9 + 'px'

    const x10 = parent.clientWidth / 2 + radius * Math.cos(angle10) - childWidth
    const y10 = parent.clientHeight / 2 + radius * Math.sin(angle10) - childHeight
    child10.style.left = x10 + 'px'
    child10.style.top = y10 + 'px'

    const x11 = parent.clientWidth / 2 + radius * Math.cos(angle11) - childWidth
    const y11 = parent.clientHeight / 2 + radius * Math.sin(angle11) - childHeight
    child11.style.left = x11 + 'px'
    child11.style.top = y11 + 'px'

    const x12 = parent.clientWidth / 2 + radius * Math.cos(angle12) - childWidth
    const y12 = parent.clientHeight / 2 + radius * Math.sin(angle12) - childHeight
    child12.style.left = x12 + 'px'
    child12.style.top = y12 + 'px'

    const x13 = parent.clientWidth / 2 + radius * Math.cos(angle13) - childWidth
    const y13 = parent.clientHeight / 2 + radius * Math.sin(angle13) - childHeight
    child13.style.left = x13 + 'px'
    child13.style.top = y13 + 'px'

    const x14 = parent.clientWidth / 2 + radius * Math.cos(angle14) - childWidth
    const y14 = parent.clientHeight / 2 + radius * Math.sin(angle14) - childHeight
    child14.style.left = x14 + 'px'
    child14.style.top = y14 + 'px'

    const Speed = 0.01

    angle1 += Speed;
    angle2 += Speed;
    angle3 += Speed;
    angle4 += Speed;
    angle5 += Speed;
    angle6 += Speed;
    angle7 += Speed;
    angle8 += Speed;
    angle9 += Speed;
    angle10 += Speed;
    angle11 += Speed;
    angle12 += Speed;
    angle13 += Speed;
    angle14 += Speed;

    if (x1 < 0) {
        child1.style.left = '0px';
    } else if (x1 > parent.clientWidth - child1.clientWidth) {
        child1.style.left = parent.clientWidth - child1.clientWidth + 'px';
    } else {
        child1.style.left = x1 + 'px';
    }
    if (y1 < 0) {
        child1.style.top = '0px';
    } else if (y1 > parent.clientHeight - child1.clientHeight) {
        child1.style.top = parent.clientHeight - child1.clientHeight + 'px';
    } else {
        child1.style.top = y1 + 'px';
    }

    if (x2 < 0) {
        child2.style.left = '0px';
    } else if (x2 > parent.clientWidth - child2.clientWidth) {
        child2.style.left = parent.clientWidth - child2.clientWidth + 'px';
    } else {
        child2.style.left = x2 + 'px';
    }
    if (y2 < 0) {
        child2.style.top = '0px';
    } else if (y2 > parent.clientHeight - child2.clientHeight) {
        child2.style.top = parent.clientHeight - child2.clientHeight + 'px';
    } else {
        child2.style.top = y2 + 'px';
    }

    if (x3 < 0) {
        child3.style.left = '0px';
    } else if (x3 > parent.clientWidth - child3.clientWidth) {
        child3.style.left = parent.clientWidth - child3.clientWidth + 'px';
    } else {
        child3.style.left = x3 + 'px';
    }
    if (y3 < 0) {
        child3.style.top = '0px';
    } else if (y3 > parent.clientHeight - child3.clientHeight) {
        child3.style.top = parent.clientHeight - child3.clientHeight + 'px';
    } else {
        child3.style.top = y3 + 'px';
    }
    if (x4 < 0) {
        child4.style.left = '0px';
    } else if (x4 > parent.clientWidth - child4.clientWidth) {
        child4.style.left = parent.clientWidth - child4.clientWidth + 'px';
    } else {
        child4.style.left = x4 + 'px';
    }
    if (y4 < 0) {
        child4.style.top = '0px';
    } else if (y4 > parent.clientHeight - child4.clientHeight) {
        child4.style.top = parent.clientHeight - child4.clientHeight + 'px';
    } else {
        child4.style.top = y4 + 'px';
    }
    if (x5 < 0) {
        child5.style.left = '0px';
    } else if (x5 > parent.clientWidth - child5.clientWidth) {
        child5.style.left = parent.clientWidth - child5.clientWidth + 'px';
    } else {
        child5.style.left = x5 + 'px';
    }
    if (y5 < 0) {
        child5.style.top = '0px';
    } else if (y5 > parent.clientHeight - child5.clientHeight) {
        child5.style.top = parent.clientHeight - child5.clientHeight + 'px';
    } else {
        child5.style.top = y5 + 'px';
    }
    if (x6 < 0) {
        child6.style.left = '0px';
    } else if (x6 > parent.clientWidth - child6.clientWidth) {
        child6.style.left = parent.clientWidth - child6.clientWidth + 'px';
    } else {
        child6.style.left = x6 + 'px';
    }
    if (y6 < 0) {
        child6.style.top = '0px';
    } else if (y6 > parent.clientHeight - child6.clientHeight) {
        child6.style.top = parent.clientHeight - child6.clientHeight + 'px';
    } else {
        child6.style.top = y6 + 'px';
    }
    if (x7 < 0) {
        child7.style.left = '0px';
    } else if (x7 > parent.clientWidth - child7.clientWidth) {
        child7.style.left = parent.clientWidth - child7.clientWidth + 'px';
    } else {
        child7.style.left = x7 + 'px';
    }
    if (y7 < 0) {
        child7.style.top = '0px';
    } else if (y7 > parent.clientHeight - child7.clientHeight) {
        child7.style.top = parent.clientHeight - child7.clientHeight + 'px';
    } else {
        child7.style.top = y7 + 'px';
    }
    if (x8 < 0) {
        child8.style.left = '0px';
    } else if (x8 > parent.clientWidth - child8.clientWidth) {
        child8.style.left = parent.clientWidth - child8.clientWidth + 'px';
    } else {
        child8.style.left = x8 + 'px';
    }
    if (y8 < 0) {
        child8.style.top = '0px';
    } else if (y8 > parent.clientHeight - child8.clientHeight) {
        child8.style.top = parent.clientHeight - child8.clientHeight + 'px';
    } else {
        child8.style.top = y8 + 'px';
    }
    if (x9 < 0) {
        child9.style.left = '0px';
    } else if (x9 > parent.clientWidth - child9.clientWidth) {
        child9.style.left = parent.clientWidth - child9.clientWidth + 'px';
    } else {
        child9.style.left = x9 + 'px';
    }
    if (y9 < 0) {
        child9.style.top = '0px';
    } else if (y9 > parent.clientHeight - child9.clientHeight) {
        child9.style.top = parent.clientHeight - child9.clientHeight + 'px';
    } else {
        child9.style.top = y9 + 'px';
    }
    if (x10 < 0) {
        child10.style.left = '0px';
    } else if (x10 > parent.clientWidth - child10.clientWidth) {
        child10.style.left = parent.clientWidth - child10.clientWidth + 'px';
    } else {
        child10.style.left = x10 + 'px';
    }
    if (y10 < 0) {
        child10.style.top = '0px';
    } else if (y10 > parent.clientHeight - child10.clientHeight) {
        child10.style.top = parent.clientHeight - child10.clientHeight + 'px';
    } else {
        child10.style.top = y10 + 'px';
    }
    if (x11 < 0) {
        child11.style.left = '0px';
    } else if (x11 > parent.clientWidth - child11.clientWidth) {
        child11.style.left = parent.clientWidth - child11.clientWidth + 'px';
    } else {
        child11.style.left = x11 + 'px';
    }
    if (y11 < 0) {
        child11.style.top = '0px';
    } else if (y11 > parent.clientHeight - child11.clientHeight) {
        child11.style.top = parent.clientHeight - child11.clientHeight + 'px';
    } else {
        child11.style.top = y11 + 'px';
    }
    if (x12 < 0) {
        child12.style.left = '0px';
    } else if (x12 > parent.clientWidth - child12.clientWidth) {
        child12.style.left = parent.clientWidth - child12.clientWidth + 'px';
    } else {
        child12.style.left = x12 + 'px';
    }
    if (y12 < 0) {
        child12.style.top = '0px';
    } else if (y12 > parent.clientHeight - child12.clientHeight) {
        child12.style.top = parent.clientHeight - child12.clientHeight + 'px';
    } else {
        child12.style.top = y12 + 'px';
    }
    if (x13 < 0) {
        child13.style.left = '0px';
    } else if (x13 > parent.clientWidth - child13.clientWidth) {
        child13.style.left = parent.clientWidth - child13.clientWidth + 'px';
    } else {
        child13.style.left = x13 + 'px';
    }
    if (y13 < 0) {
        child13.style.top = '0px';
    } else if (y13 > parent.clientHeight - child13.clientHeight) {
        child13.style.top = parent.clientHeight - child13.clientHeight + 'px';
    } else {
        child13.style.top = y13 + 'px';
    }
    if (x14 < 0) {
        child14.style.left = '0px';
    } else if (x14 > parent.clientWidth - child14.clientWidth) {
        child14.style.left = parent.clientWidth - child14.clientWidth + 'px';
    } else {
        child14.style.left = x14 + 'px';
    }
    if (y14 < 0) {
        child14.style.top = '0px';
    } else if (y14 > parent.clientHeight - child14.clientHeight) {
        child14.style.top = parent.clientHeight - child14.clientHeight + 'px';
    } else {
        child14.style.top = y14 + 'px';
    }

    // Рассчитываем угол между каждым элементом

// // Углы для элементов, начиная с 0
//     let angles = [];
//     for (let i = 0; i < totalElements; i++) {
//         angles.push(i * angleBetweenElements);
//     }
//
// // Внутри функции moveCircular:
//     for (let i = 0; i < totalElements; i++) {
//         const currentAngle = angles[i];
//         const child = document.querySelector(`.child_block${i + 1}`);
//
//         const x = parent.clientWidth / 2 + radius * Math.cos(currentAngle) - child.clientWidth / 2;
//         const y = parent.clientHeight / 2 + radius * Math.sin(currentAngle) - child.clientHeight / 2;
//
//         if (x < 0) {
//             child.style.left = '0px';
//         } else if (x > parent.clientWidth - child.clientWidth) {
//             child.style.left = parent.clientWidth - child.clientWidth + 'px';
//         } else {
//             child.style.left = x + 'px';
//         }
//
//         if (y < 0) {
//             child.style.top = '0px';
//         } else if (y > parent.clientHeight - child.clientHeight) {
//             child.style.top = parent.clientHeight - child.clientHeight + 'px';
//         } else {
//             child.style.top = y + 'px';
//         }
//     }


    requestAnimationFrame(moveCircular);
}
moveCircular();






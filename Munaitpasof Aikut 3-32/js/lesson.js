//PHONE CHECKER
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')
const regExp = /^\+996 [25793]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}
//TAP SLAIDER
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let currentIndex = 0;
let sliderInterval
const hideTapContent = () => {
    tabContentBlocks.forEach(tabCard => {
        tabCard.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (tabIndex) => {
    tabContentBlocks[currentIndex].style.display = 'none'
    tabs[currentIndex].classList.remove('tab_content_item_active')
    currentIndex = tabIndex >= tabContentBlocks.length ? 0 : tabIndex
    tabContentBlocks[currentIndex].style.display = 'block'
    tabs[currentIndex].classList.add('tab_content_item_active')
}
const startSlider = () => {
    sliderInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % tabContentBlocks.length
        hideTapContent()
        showTabContent(currentIndex)
    }, 3000)
}
const stopSlider = () => {
    clearInterval(sliderInterval)
}
hideTapContent()
showTabContent(0);
startSlider()
tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                stopSlider()
                hideTapContent()
                showTabContent(tabIndex)
                startSlider()
            }
        })
    }
}

//convertor
// DRY - Don`t repeat yourself
// const usd = document.querySelector('#usd')
// const som = document.querySelector('#som')
//
// const conventer = (element, targetElement, current) => {
//     element.oninput = () => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', '../data/converter.json')
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.send()
//     xhr.onload = () => {
//         const data = JSON.parse(xhr.response)
//         switch (current) {
//             case 'som':
//                 targetElement.value = (element.value / data.usd).toFixed(2)
//                 break
//             case 'usd':
//                 targetElement.value = (element.value * data.usd).toFixed(2)
//                 break
//         }
//         element.value === '' && (targetElement.value = '')
//     }
//     }
// }
// conventer(som, usd, 'som')
// conventer(usd, som, 'usd')


// const usd = document.querySelector('#usd');
// const som = document.querySelector('#som');
// const belli = document.querySelector('#belli');
//
// const converter = (element, targetElements, current) => {
//     element.addEventListener('input', () => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', '../data/converter.json');
//         xhr.setRequestHeader('Content-type', 'application/json');
//         xhr.send();
//
//         xhr.onload = () => {
//             const data = JSON.parse(xhr.responseText);
//             switch (current) {
//                 case 'som':
//                     targetElements.usd.value = (element.value / data.som_to_usd).toFixed(2);
//                     targetElements.belli.value = (element.value / data.som_to_belli).toFixed(2);
//                     break;
//                 case 'usd':
//                     targetElements.som.value = (element.value * data.som_to_usd).toFixed(2);
//                     targetElements.belli.value = ((element.value * data.som_to_usd) / data.som_to_belli).toFixed(2);
//                     break;
//                 case 'belli':
//                     targetElements.som.value = (element.value * data.som_to_belli).toFixed(2);
//                     targetElements.usd.value = ((element.value * data.som_to_belli) / data.som_to_usd).toFixed(2);
//                     break;
//             }
//             if (element.value === '') {
//                 Object.values(targetElements).forEach(target => (target.value = ''));
//             }
//         };
//     });
// };
//
// converter(som, { usd, belli }, 'som');
// converter(usd, { som, belli }, 'usd');
// converter(belli, { som, usd }, 'belli');


document.addEventListener('DOMContentLoaded', () => {
    const somInput = document.getElementById('som');
    const usdInput = document.getElementById('usd');
    const belliInput = document.getElementById('belli');
    const converter = (element, targetElements, current) => {
        element.addEventListener('input', () => {
            fetch('../data/converter.json')
                .then(response => response.json())
                .then(data => {
                    switch (current) {
                        case 'som':
                            targetElements.usd.value = (element.value / data.usd).toFixed(2)
                            targetElements.belli.value = (element.value / data.belli).toFixed(2)
                            break
                        case 'usd':
                            targetElements.som.value = (element.value * data.usd).toFixed(2)
                            targetElements.belli.value = ((element.value * data.usd) / data.belli).toFixed(2)
                            break
                        case 'belli':
                            targetElements.som.value = (element.value * data.belli).toFixed(2)
                            targetElements.usd.value = ((element.value * data.belli) / data.usd).toFixed(2)
                            break;
                    }
                    if (element.value === '') {
                        Object.values(targetElements).forEach(target => (target.value = ''));
                    }
                })
        })
    }
    converter(somInput, { usd: usdInput, belli: belliInput }, 'som');
    converter(usdInput, { som: somInput, belli: belliInput }, 'usd');
    converter(belliInput, { som: somInput, usd: usdInput }, 'belli');
})



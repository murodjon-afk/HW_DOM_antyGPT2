// const img = document.querySelector('img');
// const buttons = document.querySelectorAll('button');
//
// buttons.forEach((buttons) => {
//    buttons.onclick = () => {
//        const urlImage = chooseImage(buttons.innerHTML);
//        img.setAttribute('src' , urlImage)
//        buttons.forEach((item) => {
//            item.classList.remove('active')
//        })
//        buttons.classList.add('active')
//    }
// });
//
//
// function chooseImage(text) {
//    switch (text) {
//        case 'first':
//            return 'link';
//    case 'first':
//            return'link'
//            case'third':
//            return ' linlk';
//            case 'four':
//                return'link'
//            
//        
//    
//    }
//    
// }

const container = document.querySelector('.container')

const h1 = document.querySelector('.london')

const  bnt1 = document.querySelector('.bnt1')
const  bnt2= document.querySelector('.bnt2')
const  bnt3= document.querySelector('.bnt3')
const  bnt4 = document.querySelector('.bnt4')


function chooseText(text) {

    bnt1.onclick = () => {
       

        const h1 = document.querySelector('h1');
        h1.textContent = ' London is the capital city of England';
        container.style.backgroundImage = 'url(https://149359637.v2.pressablecdn.com/wp-content/uploads/2021/06/London-Wallpaper-About-Murals.jpg)';
        container.style.backgroundSize  = '100% 100%'
        container.style.backgroundRepeat = 'no-repeat';
       h1.style.color = 'white'
       h1.style.backdropFilter = 'blur(10px)'
       h1.style.borderRadius = '10px'
    };


    bnt2.onclick = () => {
       
        const h1 = document.querySelector('h1');
        h1.textContent = 'Paris is the capital city of France';
        container.style.backgroundImage = 'url(https://media.istockphoto.com/id/1460580163/video/eiffel-tower-in-tree-paris-spring-sun.jpg?s=640x640&k=20&c=hjzWnBkggT6mWtGmn7qEbiLeVnZ2II47azTUGlalD5c=)';
       h1.style.color = 'white'
       h1.style.backdropFilter = 'blur(10px)'
       h1.style.borderRadius = '10px'
       container.style.backgroundSize  = '100% 100%'
       container.style.backgroundRepeat = 'no-repeat';
    };
    bnt3.onclick = () => {
       
        const h1 = document.querySelector('h1');
        h1.textContent = 'Tokyo is the capital city of Japan';
        container.style.backgroundImage = 'url(https://static.vecteezy.com/system/resources/previews/033/650/539/non_2x/tokyo-japan-tourism-background-photo.jpg)';
       h1.style.color = 'white'
       h1.style.backdropFilter = 'blur(10px)'
       h1.style.borderRadius = '10px'
       container.style.backgroundSize  = '100% 100%'
       container.style.backgroundRepeat = 'no-repeat';
    };
    bnt4.onclick = () => {
       
        const h1 = document.querySelector('h1');
        h1.textContent = 'Tashkent is the capital city of Uzbekistan';
        container.style.backgroundImage = 'url(https://t4.ftcdn.net/jpg/02/21/90/31/360_F_221903191_cdCRccy3dV6PSvtK88QsBO2XBjmOdGt6.jpg)';
       h1.style.color = 'white'
       h1.style.backdropFilter = 'blur(10px)'
       h1.style.borderRadius = '10px'
       container.style.backgroundSize  = '100% 100%'
       container.style.backgroundRepeat = 'no-repeat';
    };
    
}



chooseText();
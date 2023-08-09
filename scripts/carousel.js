console.log('carousel');
let prev = document.querySelector('.left');
let next = document.querySelector('.right');
let images = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.gif', 'img/5.gif', 'img/6.gif', 'img/7.gif', 'img/8.gif', 'img/9.gif', 'img/10.gif', 'img/11.gif'];
let image = document.querySelector('.projectimage');


let count = 0
next.addEventListener('click', () => {
        image.src = images[count];
        console.log(count);
        count += 1;
        if (count == images.length) {
            count = 0;
        }
    }
)
prev.addEventListener('click', () => {
        image.src = images[count];
        console.log(count);
        count -= 1;
        if (count < 0) {
            count = images.length - 1;
        }
    }
)

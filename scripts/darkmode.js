console.log('added darkmode');
let toggleDarkmode = document.querySelector('.toggleDarkmode');

// Darkmode Function
const darkmodeFunc = () => {
    document.body.classList.toggle('toggleDarkmode');
    confirm('Change Mode');
}
let darkmodeBtn = document.querySelector('.btn-darkmode');

darkmodeBtn.addEventListener('click', () => {
    darkmodeFunc();
})
const upFace = document.querySelector('.up')
const sadFace = document.querySelector('.sad')

//add event listener

upFace.addEventListener('click', () => {
    if(sadFace.classList.contains('sad')) {
        sadFace.classList.add('active');
        upFace.classList.remove('active');
    }
})

sadFace.addEventListener('click', () => {
    if(upFace.classList.contains('up')){
        upFace.classList.add('active');
        sadFace.classList.remove('active');
    }
})

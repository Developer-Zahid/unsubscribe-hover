const hoverArea = document.querySelector('.hover-area')
const button = document.querySelector('.btn')

function moverButton(event){
    let centerXposition = (window.innerWidth / 2) - event.clientX
    let centerYposition = (window.innerHeight / 2) - event.clientY
    
    // if(centerXposition > 60){
    //     centerXposition = 60 - (centerXposition - 60)
    // }
    // if(centerXposition < -60){
    //     centerXposition = -60 - (centerXposition + 60)
    // }

    centerXposition = (centerXposition > 60) ? 60 - (centerXposition - 60) : centerXposition;
    centerXposition = (centerXposition < -60) ? -60 - (centerXposition + 60) : centerXposition;
    
    button.style.setProperty('--translateX', (centerXposition))
    button.style.setProperty('--translateY', centerYposition)
    
    button.style.setProperty('--rotateY', (centerXposition * -1))
    button.style.setProperty('--rotateX', centerYposition)
}

function resetButton(){
    button.style.setProperty('--translateX', 0)
    button.style.setProperty('--translateY', 0)
    button.style.setProperty('--rotateY', 0)
    button.style.setProperty('--rotateX', 0)
}


hoverArea.addEventListener('mousemove', (e)=>{
    moverButton(e)
})

hoverArea.addEventListener('mouseleave', ()=>{
    resetButton()
})


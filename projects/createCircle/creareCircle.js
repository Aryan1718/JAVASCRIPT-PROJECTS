
const box = document.querySelector('.box')
const resetOneByOne = document.querySelector('.clearOneByOne')
const resetAll = document.querySelector('.clearAll')

function createElement(){
    const div = document.createElement('div')
    div.setAttribute('class','circle')
    return div
}

box.addEventListener("click",(e)=>{
    if (!e.target.classList.contains('circle')) {
        const div = createElement()
        div.style.top = `${e.offsetY-25}px`
        div.style.left = `${e.offsetX-25}px`
        box.appendChild(div)
    }
})

resetOneByOne.addEventListener('click',()=>{
    const circle = document.querySelector('.circle')
    if (circle) {
        circle.remove()
    }
})

resetAll.addEventListener('click',()=>{
    box.innerHTML = "" 
    box.style.backgroundColor = "black"
})


const btn = document.getElementById('btn')
const rbtn = document.getElementById('rbtn')
const span = document.querySelectorAll('span')



btn.addEventListener('click',()=>{
    let userColor = document.getElementById('myInput').value;
    let userNumber = document.getElementById('myNumber').value;
    if(userNumber > span.length){
        alert("No sentence at this place")
    }
    else{
        if(userNumber == 0){
            alert('Can not put zero')
        }
        else{
            span[userNumber-1].style.color=userColor
        }
    }
    

})


rbtn.addEventListener('click',()=>{
    let userNumber1 = document.getElementById('myNumber').value;
    span[userNumber1-1].style.color='black'
})
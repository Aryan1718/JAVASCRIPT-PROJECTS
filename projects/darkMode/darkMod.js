const btn = document.getElementById('btn')
let counter = 0
btn.addEventListener('click',()=>{
    counter++
    if(counter%2!=0){
        document.body.style.backgroundColor = "black"
        document.body.style.color="white"
        document.getElementById('btn').innerHTML = 'Light Mode'
    }
    else{
        document.getElementById('btn').innerHTML = 'Dark Mode'
        document.body.style.backgroundColor = "white"
        document.body.style.color="black"
    }
})
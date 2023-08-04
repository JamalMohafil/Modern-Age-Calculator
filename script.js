
function age(){
    let day = document.getElementById('day').value,
    month = document.getElementById('month').value,
    year = document.getElementById('year').value

    let date = new Date()
    let getDay = date.getDate()
    let getMonth =1+ date.getMonth()
    let getYear = date.getFullYear()
    let allMonth = [31,28,31,30,31,30,31,31,20,31,30,31]
    console.log(`Day Is : ${getDay}, Month Is : ${getMonth}, Year Is : ${getYear}`)
    if(day > getDay) {
        getDay = getDay + allMonth[getMonth - 1] // Day Is : 31 = 31 + 30 = 61
        getDay = getDay - 1 // 61 = 61 - 1 = 60
    }// 2 + 31 = 33 - 10 = 23 + 
    if(month > getMonth){
        getMonth = getMonth + 12 
        getYear = getYear - 1
    }
   
    let d = getDay - day
    let m = getMonth - month
    let y = getYear - year
    if(m == 0){
        getMonth = getMonth + 12
        y--
    }
   
    console.log(`Day Is : ${d}, Month Is : ${m}, Year Is : ${y}`)

    document.getElementById('age').innerHTML = `Your Age Is :<br> Day: ${d},
     <br> Month Is : ${m},
     <br> Year Is : ${y}
    `
}

document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    age()
})
let day = document.getElementById('day'),
    month = document.getElementById('month'),
    year = document.getElementById('year')

        day.onkeydown = (event)=>{
            if (event.key === 'ArrowRight'||event.key === 'RightArrow') {
                month.focus()
              }
        }
        
        month.onkeydown = (event)=>{
            if (event.key === 'RightArrow'||event.key === 'ArrowRight') {
                year.focus()
              }
            if (event.key === 'LeftArrow'||event.key === 'ArrowLeft') {
                day.focus()
              }
        }
        year.onkeydown = (event)=>{
            if(event.key === 'LeftArrow' || event.key === 'ArrowLeft'){
                month.focus()
            }
        }
        

        let mode = document.querySelector('.mode'),
         night = document.querySelector('.mode .night'),
         light = document.querySelector('.mode .light'),
         htmlTag = document.querySelector('html')

         mode.addEventListener('click',(e)=>{
            if(e.target == night){
                htmlTag.setAttribute('data-theme','dark')
                night.classList.remove('active')
                light.classList.add('active')
            }
            if(e.target == light){
                htmlTag.setAttribute('data-theme','light')
                light.classList.remove('active')
                night.classList.add('active')
            }
            localStorage.setItem('theme',htmlTag.getAttribute('data-theme'))
         })

         window.addEventListener('load',()=>{
            let themeStorage = localStorage.getItem('theme')
            if(themeStorage){
                htmlTag.setAttribute('data-theme',themeStorage)
                if(themeStorage == 'dark'){
                    night.classList.remove('active')
                    light.classList.add('active')
                }
                if(themeStorage == 'light'){
                    night.classList.add('active')
                    light.classList.remove('active')
                }
            }
         }) 

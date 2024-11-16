let container = document.querySelector(".container")
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let reset = document.querySelector(".reset")
let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let sec = document.querySelector(".sec")

let mini = document.querySelector(".mini")





start.addEventListener("click",()=>{

   let se = 0
   let time =  setInterval(() => {
        mini.textContent = se;
        se++;
        if (se >= 100) {
         se = 0
         sec.textContent = (parseInt(sec.textContent)+1)
        }

        if (sec.textContent >= 60) {
         sec.textContent = "00"
         minute.textContent = (parseInt(minute.textContent)+1)
        }
        if (minute.textContent >= 60) {
         minute.textContent = "00"
         hour.textContent = (parseInt(hour.textContent)+1)
        }
        hour.textContent = hour.textContent.padStart(2,"0")
        minute.textContent = minute.textContent.padStart(2,"0")
        sec.textContent = sec.textContent.padStart(2,"0")
        mini.textContent = mini.textContent.padStart(2,"0")
         
      }, 10);
      stop.addEventListener("click",()=>{
         clearInterval(time)
      })
      
      reset.addEventListener("click",()=>{
         clearInterval(time)
         mini.textContent = "00"
         sec.textContent = "00"
         minute.textContent = "00"
         hour.textContent = "00"
      })

})


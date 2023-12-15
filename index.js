
let ns_container = document.querySelector(".ns_container")
let color = document.querySelector(".Color")

const getColor = () => {
    let rendomNumber = Math.random()*16777215
  let florrr =  Math.floor(rendomNumber)
   let hashcode = "#" + florrr.toString(16)
   ns_container.style.backgroundColor = hashcode
   color.innerHTML = hashcode
   navigator.clipboard.writeText(hashcode)

}

let btn = document.querySelector("button")
btn.addEventListener("click",getColor)


getColor()
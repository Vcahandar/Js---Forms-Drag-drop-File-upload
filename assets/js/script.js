"use strict"


// let formElem=document.querySelector("form")


// formElem.addEventListener("submit",function(e){
//     e.preventDefault();

//     if(document.getElementById("exampleInputEmail1").value !=""){
//         document.querySelector("span").classList.add("d-none")
//         writeWord("welcome")

//     }else{
//         document.querySelector("span").classList.remove("d-none")
//     }

// })

// function writeWord(word){
//     document.querySelector("h1").innerText= word;
// }


// let dragElems = document.querySelectorAll(".item");
// let dropElem = document.getElementById("drop-elem");


// dragElem.ondragstart=()=>{
//     console.log("started");
// }

// dragElem.ondrag=()=>{
//     console.log("dragging");
// }


// dragElem.ondragend=()=>{
//     console.log("drang end");
// }

// dragElems.forEach(element => {
//     element.ondragstart = (e) => {
//         e.dataTransfer.setData("id", element.getAttribute("id"))
//     }
// })




// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }

// dropElem.ondrop = (e) => {
//     let id = e.dataTransfer.getData("id")
//     let elem = document.getElementById(id)

//     dropElem.append(elem)

// }


// let dragElems = document.querySelectorAll(".item");
// let dropElem = document.getElementById("drop-elem");




// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }




// dragElems.forEach(element => {
//     element.addEventListener("dragstart", function () {
//         dropElem.ondrop = () =>{
//             dropElem.append(element)
//         }
//     })

// })






//File upload





// let uploadElem=document.querySelector("input")
let uploadIcon = document.querySelector("i")

let table = document.querySelector(".table")

let area=document.querySelector(".upload-area")

area.addEventListener("mouseover", function () {
    this.style.backgroundColor="white"
    uploadIcon.style.color="blue"
})

area.addEventListener("mouseout", function () {
    this.style.backgroundColor="black"
    uploadIcon.style.color="white"
    
})


area.ondragover=(e)=>{
    e.preventDefault();
}


area.ondrop=(e)=>{
    
    for (const file of e.dataTransfer.files) {
        let reader = new FileReader();

        reader.onloadend = (event) => {

            let filesBase64 = event.currentTarget.result;

            table.innerHTML += `<tr>
            <th scope="row">${file.name}</th>
            <td>${file.size/1024} kb</td>
            <td>
            <div class="img">
             <img src="${filesBase64}" alt="">
            </div>
            </td>
            </tr>`
        }

        reader.readAsDataURL(file)
    }
    table.classList.remove("d-none")



}

uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click()
})


uploadIcon.nextElementSibling.addEventListener("change", function (e) {

    for (const file of e.target.files) {
        let reader = new FileReader();
        reader.onloadend = (event) => {

            
            let filesBase64 = event.currentTarget.result;

            table.innerHTML += `<tr>
            <th scope="row">${file.name}</th>
            <td>${file.size/1024} kb</td>
            <td>
            <div class="img">
             <img src="${filesBase64}" alt="">
            </div>
            </td>
            </tr>`
        }
        reader.readAsDataURL(file)
        table.classList.remove("d-none")

    }
})





    

    







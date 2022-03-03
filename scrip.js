const nilai = document.getElementsByClassName("item");
const inputBox = document.getElementById("input");
let angka1 = 0;
let angka2 = 0;
let operasi = "";


for(let i = 0; i < nilai.length; i++){
    nilai[i].addEventListener("click", function(){
        if(nilai[i].innerText === "+"){             
            angka1 = inputBox.value;
            operasi = "+";
            inputBox.value = "0";
        } else if(nilai[i].innerText === "=") {
            angka2 = inputBox.value;
            if(operasi === "+") {
                inputBox.value = parseInt(angka1) + parseInt(angka2)
            }
            if(operasi === "-") {
                inputBox.value = parseInt(angka1) - angka1(angka2)
            }
        } else {
            if(inputBox.value === "0") { 
                inputBox.value = nilai[i].innerText
            } else {
                inputBox.value = inputBox.value + nilai[i].innerText
            }
        }
    })
}
const reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    inputBox.value = "0"
    angka1 = 0
    angka2 - 0
})
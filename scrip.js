const nilai = document.getElementsByClassName("item");
const inputBox = document.getElementById("input");
const reset = document.getElementById("ulang");
let angka1 = 0;
let angka2 = 0;
let operasi = "";


for(let i = 0; i < nilai.length; i++){
    nilai[i].addEventListener("click", function(){
        if(nilai[i].innerText === "+"){
        if(nilai[i].innerText === "-"){
        if(nilai[i].innerText === "*"){
        if(nilai[i].innerText === "/"){ 

            operasi = nilai[i].innerText;
            angka1 = inputBox.value;
            inputBox.value = "0";
        } else if(nilai[i].innerText === "=") {
            angka2 = inputBox.value;
            if(operasi === "+") 
                inputBox.value = parseInt(angka1) + parseInt(angka2);
            if(operasi === "-") 
                inputBox.value = parseInt(angka1) - parseInt(angka2);
            if(operasi === "*") 
                inputBox.value = parseInt(angka1) * parseInt(angka2);
            if(operasi === "/")
            inputBox.value = parseInt(angka1) / parseInt(angka2);
        } else {
            const currentValue = parseInt(inputBox.value);
            if(inputBox.value === "0") { 
                inputBox.value = nilai[i].innerText
            } else {
                inputBox.value = currentValue + nilai[i].innerText;
            }
        }
    });
}

reset.addEventListener("click", function(){
    operasi = "";
    inputBox.value = "0";
    angka1 = 0;
    angka2 = 0;
});
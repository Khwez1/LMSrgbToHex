let input1 = document.getElementById('red').value

let input2 = document.getElementById('green').value

let input3 = document.getElementById('blue').value

let output = document.getElementById('hex')

let btn = document.getElementById('calc')

function rgbToHex(input1,input2,input3) {
   let toHex = (color) => {
    let hex = color.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
   };
let RED = toHex(input1)

let GRN = toHex(input2)

let BLU = toHex(input3)

output.value = "#" + RED + GRN + BLU
}

btn.addEventListener('click',rgbToHex)
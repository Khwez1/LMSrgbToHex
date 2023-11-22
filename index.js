let output = document.getElementById('hex');

let btn = document.getElementById('calc');

function rgbToHex() {
    let input1 = parseInt(document.getElementById('red').value, 10);
    let input2 = parseInt(document.getElementById('green').value, 10);
    let input3 = parseInt(document.getElementById('blue').value, 10);

    function toHex(color) {
        let hex = color.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    let RED = toHex(input1);
    let GRN = toHex(input2);
    let BLU = toHex(input3);

    output.value = "#" + RED + GRN + BLU;
}

btn.addEventListener('click', rgbToHex);
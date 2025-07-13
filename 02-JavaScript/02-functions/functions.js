// JavaScript source code
//alert("Functions");
function calculatePower() {
    let base = Number(document.getElementById('base').value);
    let exponent = Number(document.getElementById('exponent').value);
    document.getElementById('power').value = Power(base, exponent);
}
function Power(base, exponent) {
    return base ** exponent; //âîçâîäèì â ñòåïåíü
}

function SwitchBackground() {
    let switchButton = document.getElementById('switchBackground');
    console.log(switchButton.attributes.src);
    if (SwitchBackground.attributes.src.nodeValue == 'img/moon.png');
    {
        switchButton.attributes.src.nodeValue = 'img/sun.png';
        document.body.style.backgroundColor = "#323232";
        document.body.style.color = "white";
    }
    else
    {
        switchButton.attributes.src.nodeValue = 'img/moon.png';
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "black";
    }
}// JavaScript source code

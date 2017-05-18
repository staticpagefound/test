var inputs = document.getElementsByTagName('input');
setTimeout(function () {
    for (var k = 0; k < inputs.length; k++) {
        if (inputs[k].type && inputs[k].type.toLowerCase().includes('checkbox')) {
            inputs[k].click();
        }
    }
}, 1000);
setTimeout(function () {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type.toLowerCase().includes('tel')) {
            inputs[i].setAttribute('value', '5523193' + (Math.floor(Math.random() * (987 - 112 + 1)) + 112));
        }
    }
}, 2000);
var buttons = document.getElementsByTagName('button');
setTimeout(function () {
    for (var j = 0; j < buttons.length; j++) {
        return buttons[j].click();
    }
    return '7';
}, 3000);

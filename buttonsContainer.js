let div = document.createElement("div");
div.style.width = "75%";
div.id = "btns";
let buttons = new Array();
for (let i = 0; i < 9; i++) {
    let button = document.createElement("button");
    button.id = `btn${i + 1}`;
    button.innerHTML = String(i + 1);
    button.style.width = "30%";
    button.style.height = "48px";
    button.style.fontSize = "24px";
    buttons.push(button);
    div.appendChild(button);
}

buttons[4].addEventListener("click", () => {
    let first = buttons[0].innerHTML;
    buttons[0].innerHTML = buttons[3].innerHTML;
    buttons[3].innerHTML = buttons[6].innerHTML;
    buttons[6].innerHTML = buttons[7].innerHTML;
    buttons[7].innerHTML = buttons[8].innerHTML;
    buttons[8].innerHTML = buttons[5].innerHTML;
    buttons[5].innerHTML = buttons[2].innerHTML;
    buttons[2].innerHTML = buttons[1].innerHTML;
    buttons[1].innerHTML = first;
});
document.body.appendChild(div);
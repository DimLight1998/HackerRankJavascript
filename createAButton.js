var button = document.createElement("button")
button.id = "btn";
button.innerHTML = "0";
button.style.width = "96px";
button.style.height = "48px";
button.style.fontSize = "24px";
button.addEventListener("click", () => {
    button.innerHTML = String(Number(button.innerHTML) + 1);
});
document.body.appendChild(button);
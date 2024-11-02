document.querySelectorAll(".collapsible").forEach(button => {
    button.onclick = () => button.nextElementSibling.classList.toggle("active");
});
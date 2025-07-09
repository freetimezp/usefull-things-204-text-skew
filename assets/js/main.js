document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".text-box");
    const textContainer = document.querySelector(".text h1");

    textContainer.innerHTML = textContainer.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    const spans = textContainer.querySelectorAll("span");
});

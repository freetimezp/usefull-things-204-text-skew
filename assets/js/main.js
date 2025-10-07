document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.querySelector(".text h1");

    textContainer.innerHTML = textContainer.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    const spans = textContainer.querySelectorAll("span");

    spans.forEach((span, i) => {
        span.style.setProperty("--i", i);
    });
});

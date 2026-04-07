function goToEvaluation() {
    window.open("http://127.0.0.1:5500/frontend/index.html", "_blank");
}

function goToGenerator() {
    window.open("http://127.0.0.1:5501/frontend/index.html", "_blank");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* DARK MODE */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* INIT AOS */
AOS.init({
    duration: 1000,
    once: true
});
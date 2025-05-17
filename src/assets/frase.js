const frases = [
  "Honestamente, não sei o que tô fazendo, mas pelo menos eu tento.",
  "",
];

window.addEventListener("DOMContentLoaded", () => {
  const elementoFrase = document.querySelector(".frase");
  const fraseAleatoria = Math.floor(Math.random() * frases.length);
  elementoFrase.textContent = frases[fraseAleatoria];
});

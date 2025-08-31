// ketik otomatis
const text = "We Boldly Go Where No Rocket Has Gone Before...";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.getElementById("typingText").textContent += text.charAt(i);
    i++;
    setTimeout(typingEffect, 80);
  }
}
window.addEventListener("load", typingEffect);

const text = "Our Rocket";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.getElementById("bla").textContent += text.charAt(i);
    i++;
    setTimeout(typingEffect, 80);
  }
}
window.addEventListener("load", typingEffect);
// ------------------
// Elements
// ------------------
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const noPopup = document.getElementById("no-popup"); // <- popup element

// ------------------
// Click Envelope
// ------------------
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// ------------------
// Logic to move the NO btn + popup
// ------------------
let noHoverCount = 0;

noBtn.addEventListener("mouseover", () => {
    // Move NO button
    const min = 200;
    const max = 200;
    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;
    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    noPopup.style.transition = "transform 0.3s ease";
    noPopup.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // Popup logic
    noHoverCount++;
    if (noHoverCount === 2) {
        showNoPopup("nao banned");
    } else if (noHoverCount === 4) {
        showNoPopup(" :((?");
    } else if (noHoverCount === 6) {
        showNoPopup("angry now");
    } else if (noHoverCount === 8) {
        showNoPopup("i block u");
        noHoverCount = 0; // reset counter so it can repeat
    }
});

// Show popup function
function showNoPopup(message) {
    const rect = noBtn.getBoundingClientRect();
    noPopup.textContent = message;
    // noPopup.style.left = rect.left + window.scrollX + rect.width / 2 - noPopup.offsetWidth / 2 + "px";
    // noPopup.style.top = rect.top + window.scrollY - noPopup.offsetHeight - 10 + "px";
    noPopup.classList.add("show");

    setTimeout(() => {
        noPopup.classList.remove("show");
    }, 2000);
}

// ------------------
// YES button click
// ------------------
yesBtn.addEventListener("click", () => {
    title.textContent = "yay happy";
    catImg.src = "yippay.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});
// 🌟 Sparkle trail cursor (white, pink, red)
document.addEventListener("mousemove", function(e){
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    sparkle.style.backgroundColor = ["#ffffff","#ff69b4","#ff0000"][Math.floor(Math.random()*3)];
    sparkle.style.position = "absolute";
    sparkle.style.width = "6px";
    sparkle.style.height = "6px";
    sparkle.style.borderRadius = "50%";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = 9999;
    sparkle.style.opacity = 1;
    sparkle.style.transition = "opacity 0.5s, transform 0.5s";

    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {
        sparkle.style.opacity = 0;
        sparkle.style.transform = `translate(${(Math.random()-0.5)*20}px, ${(Math.random()-0.5)*20}px)`;
    });

    setTimeout(() => sparkle.remove(), 500);
});

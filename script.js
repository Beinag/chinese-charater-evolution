// Character evolution sequences (Oracle → Modern)
const characters = {
    ri: ["☀️", "𡆠", "日"], 
    shan: ["⛰️", "𡶴", "山"],
    ren: ["𠔽", "𠆢", "人"],
    yue: ["🌙", "𣎆", "月"]
};

// Animate on click
document.querySelectorAll(".character").forEach(el => {
    el.addEventListener("click", () => {
        const id = el.id;
        let i = 0;
        const loop = setInterval(() => {
            el.textContent = characters[id][i];
            i = (i + 1) % characters[id].length;
        }, 500);
        setTimeout(() => clearInterval(loop), 2000);
    });
});

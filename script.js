const prizes = [
    { name: "🎁 รถของเล่น", count: 10 },
    { name: "🎨 สีระบายภาพ", count: 10 },
    { name: "🎈 ลูกโป่ง", count: Infinity },
    { name: "🍭 ขนมหวาน", count: 10 },
    { name: "🍫 ช็อกโกแลต", count: 10 },
    { name: "🎉 หมวกปาร์ตี้", count: 10 }
];

const starsContainer = document.getElementById('stars');
const clickSound = document.getElementById('clickSound');
const backgroundMusic = document.getElementById('backgroundMusic');
const rewardSound = document.getElementById('rewardSound');

backgroundMusic.volume = 0.2;
backgroundMusic.play();

function getRandomPrize() {
    const availablePrizes = prizes.filter(prize => prize.count > 0);
    if (availablePrizes.length === 0) {
        return "🎈 รางวัลหมดแล้ว!";
    }
    const randomIndex = Math.floor(Math.random() * availablePrizes.length);
    const selectedPrize = availablePrizes[randomIndex];

    if (selectedPrize.count !== Infinity) {
        selectedPrize.count--;
    }
    return selectedPrize.name;
}

// ปรับลดจำนวนดาวจาก 300 เป็น 100 หรือ 50
const numberOfStars = 150; // ลดจำนวนดาว

for (let i = 1; i <= numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const offsetX = Math.random() * window.innerWidth;
    const offsetY = Math.random() * window.innerHeight;

    star.style.left = `${offsetX}px`;
    star.style.top = `${offsetY}px`;

    const duration = Math.random() * 10 + 5; // Random duration between 5 to 15 seconds
    star.style.animationDuration = `${duration}s`;

    star.addEventListener('click', () => {
        const resultDiv = document.getElementById('result');
        const prize = getRandomPrize();
        resultDiv.textContent = `คุณได้: ${prize}`;
        resultDiv.classList.add('show');

        clickSound.currentTime = 0;
        clickSound.volume = 1;
        clickSound.play();

        rewardSound.currentTime = 0;
        rewardSound.volume = 1;
        rewardSound.play();

        star.remove();

        setTimeout(() => {
            resultDiv.classList.remove('show');
        }, 3000);
    });

    starsContainer.appendChild(star);
}

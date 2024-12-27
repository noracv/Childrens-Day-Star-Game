// สร้างหิมะตก
const snowflakes = [];
const numberOfSnowflakes = 150;  // จำนวนหิมะที่ตก

class Snowflake {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 5 + 2; // ขนาดหิมะ
        this.speed = Math.random() * 3 + 1; // ความเร็วในการตก
        this.opacity = Math.random() * 0.5 + 0.5; // ความโปร่งใสของหิมะ
    }

    update() {
        this.y += this.speed;
        if (this.y > window.innerHeight) {
            this.y = -this.size;
            this.x = Math.random() * window.innerWidth;
        }
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        context.fill();
    }
}

function createSnowflakes() {
    for (let i = 0; i < numberOfSnowflakes; i++) {
        snowflakes.push(new Snowflake());
    }
}

function updateSnowflakes() {
    const canvas = document.getElementById('snow-canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw(context);
    });

    requestAnimationFrame(updateSnowflakes);
}

// เริ่มต้นการสร้างหิมะ
window.onload = () => {
    const canvas = document.getElementById('snow-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    createSnowflakes();
    updateSnowflakes();
};

// การสุ่มเลข
let availableNumbers = Array.from({ length: 28 }, (_, i) => i + 1);  // สร้างอาร์เรย์เลข 1 ถึง 28

const generateNumbers = () => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";  // Clear previous result

    if (availableNumbers.length === 0) {
        resultDiv.innerHTML = "หมดเลขที่สามารถสุ่มได้แล้ว!";
        return;
    }

    let resultText = "";
    // สุ่มเลขให้กับแต่ละคน
    for (let i = 1; i <= 28; i++) {
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);  // สุ่มเลขจากรายการที่เหลือ
        const randomNumber = availableNumbers[randomIndex];  // เลือกเลขที่สุ่ม
        resultText += `ผู้ที่ ${i} ได้รับเลข: ${randomNumber}<br>`;
        availableNumbers.splice(randomIndex, 1);  // ลบเลขที่สุ่มออกจากรายการ
    }

    resultDiv.innerHTML = resultText;
};

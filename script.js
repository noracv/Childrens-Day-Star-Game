const generateNumbers = () => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";  // Clear previous result

    let resultText = "";
    const numbers = Array.from({ length: 28 }, (_, i) => i + 1);  // สร้างอาร์เรย์เลข 1 ถึง 28

    // สุ่มเลขให้กับแต่ละคน
    numbers.forEach((num) => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;  // สุ่มเลข 1 ถึง 100
        resultText += `ผู้ที่ ${num} ได้รับเลข: ${randomNumber}<br>`;
    });

    resultDiv.innerHTML = resultText;
};

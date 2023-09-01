const triggerButton = document.getElementById('cur-prim-trigger');
const resOutput = document.getElementById('calc-res');
const curPrimosInput = document.getElementById('cur-prim-imp');
let currentPrimos;
const maxPrimos = 12800;

function calculateDaysLeft() {
    const lastPatchDate = new Date('August 16, 2023 00:00:00 GMT+0000');
    const today = new Date();
    const timeDifference = today - lastPatchDate;
    const daysLeft = 42 - Math.floor(timeDifference / (1000 * 60 * 60 * 24)) % 42;
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `${daysLeft} days left until the next patch`;
}

calculateDaysLeft();
setInterval(calculateDaysLeft, 86400000);

function checkDaysLeft(daysLeft) {
    const countdownElement = document.getElementById('countdown');
    const countdownText = countdownElement.textContent;
    const daysUntilPatch = parseInt(countdownText.split(' ')[0]);

    if (daysLeft <= daysUntilPatch) {
        return 'False'
    } else {
        const exceedsDays = daysUntilPatch - daysLeft;
        return `Exceeds by ${exceedsDays} days`;
    }
}

triggerButton.addEventListener('click', () => {
    let daysLeft = 0;
    currentPrimos = parseFloat(curPrimosInput.value);

    do {
        daysLeft++;
        currentPrimos += 150;
    } while (currentPrimos <= maxPrimos);

    console.log(`... ${currentPrimos} and ${daysLeft}`);
    resOutput.innerHTML = `Days Left: ${daysLeft} for Soft Pity, Exceeds Countdown: ${checkDaysLeft(daysLeft)}`;
});

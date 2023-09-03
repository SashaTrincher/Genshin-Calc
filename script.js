const farmOutput = document.getElementById('farm-res');
const farmPatchOutput = document.getElementById('ptc-calc');
const curPrimosInput = document.getElementById('calc-inp');
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
        if (!farmPatchOutput.classList.contains('excTr')) {
            farmPatchOutput.classList.add('excFls');
        } else {
            farmPatchOutput.classList.remove('excTr');
            farmPatchOutput.classList.add('excFls');
        }
        return 'You are in time!'
    } else {
        if (!farmPatchOutput.classList.contains('excFls')) {
            farmPatchOutput.classList.add('excTr');
        } else {
            farmPatchOutput.classList.remove('excFls');
            farmPatchOutput.classList.add('excTr');
        }
        const exceedsDays = daysUntilPatch - daysLeft;
        return `You exceed by ${exceedsDays}`;
    }
}

curPrimosInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.keyCode === 13) { 

        let daysLeft = 0;
        currentPrimos = parseFloat(curPrimosInput.value);

        const testFunction = function() {
            do {
                daysLeft++;
                currentPrimos += 150;
            } while (currentPrimos <= maxPrimos);
        
            if (daysLeft <= 1) {
                return 'Good luck on pulling! You have enough primogems!';
            } else {
                return `${daysLeft} until soft pity`;
            }
        }    

        console.log(`... ${currentPrimos} and ${daysLeft}`);
        farmOutput.innerHTML = `${testFunction()}`
        farmPatchOutput.innerHTML = `${checkDaysLeft(daysLeft)}`;
    }
});


const userInput = document.getElementById('calc-inp');
const inpContainer = document.getElementById('calc-div');

userInput.addEventListener('focus', () => {
    inpContainer.classList.add('activeInp');
});

userInput.addEventListener('blur', () => {
    inpContainer.classList.remove('activeInp');
});
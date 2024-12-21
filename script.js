const nutritionTips = [
    "Drink plenty of water every day to stay hydrated.",
    "Include more vegetables and fruits in your meals for a balanced diet.",
    "Limit sugar and processed foods for better long-term health.",
    "Start your day with a healthy breakfast to kickstart your metabolism.",
    "Avoid overeating by eating smaller meals throughout the day.",
    "Try to eat whole grains instead of refined grains for better digestion.",
    "Consider meal prepping to save time and ensure healthy choices.",
    "Incorporate healthy fats like avocado, nuts, and seeds into your meals.",
    "Stay mindful of portion sizes to prevent overeating.",
    "Eat slowly to help your body recognize fullness and prevent overeating."
];

const exerciseTips = [
    "Engage in at least 30 minutes of physical activity every day.",
    "Incorporate both cardio and strength training into your routine.",
    "Don't forget to warm up before exercising to prevent injuries.",
    "Stretch after every workout to improve flexibility.",
    "Take active breaks throughout the day to keep your energy up.",
    "Find a workout you enjoy, so you're more likely to stick with it.",
    "Make sure you're using proper form to avoid injuries during workouts.",
    "Include balance exercises in your routine to improve stability.",
    "Mix up your workouts to avoid boredom and plateaus.",
    "Track your progress to stay motivated and focused on your goals."
];

const mentalHealthTips = [
    "Practice mindfulness and meditation to reduce stress.",
    "Get enough sleep—7-8 hours per night is optimal for mental clarity.",
    "Take regular breaks during your workday to refresh your mind.",
    "Surround yourself with positive people and energy.",
    "Keep a gratitude journal to enhance mental well-being.",
    "Set aside time each day for self-care activities.",
    "Challenge negative thoughts and replace them with positive affirmations.",
    "Limit screen time, especially before bed, to improve sleep quality.",
    "Practice deep breathing exercises to calm your mind during stressful times.",
    "Stay connected with loved ones to nurture your emotional health."
];

const tipDisplay = document.getElementById("tip-display");
const refreshBtn = document.getElementById("refresh-btn");

document.getElementById("nutrition").addEventListener("click", () => displayTips(nutritionTips));
document.getElementById("exercise").addEventListener("click", () => displayTips(exerciseTips));
document.getElementById("mental-health").addEventListener("click", () => displayTips(mentalHealthTips));

// Function to display new tips with refreshing feature
function displayTips(tipsArray) {
    tipDisplay.innerHTML = '';  // Clear current tips
    const randomTips = getRandomTips(tipsArray, 5);  // Get 5 random tips

    randomTips.forEach(tip => {
        const tipCard = document.createElement('div');
        tipCard.classList.add('tip-card');
        tipCard.innerHTML = `<p>${tip}</p>`;
        tipDisplay.appendChild(tipCard);
    });
}

// Function to get 5 random tips from the array
function getRandomTips(tipsArray, count) {
    let randomTips = [];
    while (randomTips.length < count) {
        const randomTip = tipsArray[Math.floor(Math.random() * tipsArray.length)];
        if (!randomTips.includes(randomTip)) {
            randomTips.push(randomTip);
        }
    }
    return randomTips;
}

// Initially display nutrition tips
displayTips(nutritionTips);

// Refresh button to reload tips
refreshBtn.addEventListener("click", () => {
    const currentCategory = document.querySelector('nav ul li a.active');
    if (currentCategory) {
        document.getElementById(currentCategory.id).click();
    } else {
        displayTips(nutritionTips);
    }
});

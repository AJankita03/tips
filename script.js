const nutritionTips = [
"Drink water like it's the tea about your enemies!" ,
"Eat your greens—your body deserves a glow-up too!" ,
"Chew slowly—your food isn’t running away (unless it’s still alive)!" ,
"An apple a day keeps the doctor away… unless he’s cute, then eat two!" ,
"Dark chocolate is basically a salad—cocoa comes from a plant, right?" ,
"If you can’t pronounce the ingredients, maybe don’t eat it!" ,
"Avocados: the only green thing that’s cool to like!" ,
"Eat fiber like your gut is a drama queen—it needs support!" ,
"Carrots help your eyesight… but they won’t help you unsee your ex!" ,
"Protein is important, but don’t turn into a chicken while eating it!" ,
"If junk food whispers your name, drown it out with a crunch of an apple!" ,
"Your body is a temple—don’t fill it with expired offerings!" ,
"Eat the rainbow… but the fruit and veggie kind, not just Skittles!" ,
"Coffee is great, but have you tried sleeping?" ,
"Don’t fear carbs—fear eating them like it's your full-time job!" ,
"Frozen veggies count too—your body won’t know they were lazy!" ,
"Nuts are healthy, but eating a whole jar of peanut butter isn't a flex!" ,
"Less sugar, more spice, and everything nice!" ,
"Your plate should look like a work of art, not a fast-food disaster!" ,
"Coconut water is nature’s sports drink—without the weird chemicals!" ,
"A little dark chocolate makes you happy… but so does a nap!" ,
"Sodium makes you bloated. Drink more water or float away like a balloon!" ,
"Don’t let your diet start on Monday and end by lunchtime!" ,
"Cook at home—your wallet and waistline will thank you!" ,
"Fermented foods are probiotics in disguise—like a gut superhero!" ,
"Smoothies are just adult baby food, but hey, they’re good for you!" ,
"Read nutrition labels—don’t let hidden sugar scam you!" ,
"Your stomach is not a trash can—stop treating it like one!" ,
"Healthy eating is a love letter to your future self!" 
];

const exerciseTips = [
 "Stretch like a cat waking up—graceful but slightly confused!" ,
"Do squats like you’re picking up a ₹2000 note in slow motion!" ,
"Plank until you start questioning your life choices!" ,
"Dance like nobody’s watching... but your neighbor totally is!" ,
"Push-ups: because pretending the floor is lava isn’t just for kids!" ,
"Jog in place while scrolling through memes—multitasking at its finest!" ,
"Hold your yoga pose like you're waiting for your food delivery!" ,
"Lunges: Pretend you’re about to propose... to your fitness goals!" ,
"Jump rope like you’re trying to escape an embarrassing conversation!" ,
"Do burpees... or as I like to call them, floor hugs!" ,
"Try wall sits and imagine you're waiting for your crush to text back!" ,
"Bicep curls—because lifting your coffee cup doesn’t count as exercise!" ,
"Shadowbox like you’re arguing with WiFi that just won’t connect!" ,
"Calf raises—because looking taller in group photos is a priority!" ,
"Do high knees like you're running from responsibilities!" ,
"Try toe touches, but if you can’t reach them, just wave at them!" ,
"Twerk squats—because why not make leg day fun?" ,
"Mountain climbers: pretend you’re running away from adulting!" ,
"Side planks—because sometimes we just need to lie down… but fancy!" ,
"Lift weights like you're lifting your shopping bags full of snacks!" ,
"Step-ups: act like you're climbing Mount Everest, even if it’s just stairs!" ,
"Core workouts are just laughing in slow motion—so do them while watching comedy!" ,
"Squat holds: pretend you’re in a super intense staring contest!" ,
"Hip thrusts—because having a strong booty is always a flex!" ,
"Cycle like you’re late for your dream vacation!" ,
"Triceps dips—because waving goodbye shouldn’t make your arms jiggle!" ,
"Deadlifts—because picking up groceries should feel effortless!" ,
"Jog on the spot like you're excited to hear gossip!" ,
"Roll your shoulders like you’re about to drop the hottest dance move!" ,
"Always remember: the hardest part of a workout is starting… so just start!" 
];

const mentalHealthTips = [
   "Your mind is like a browser—too many tabs open? Close some!" ,
"Overthinking is like sitting in a rocking chair—lots of movement, no progress!" ,
"Sleep like you don’t have responsibilities... at least for 8 hours!" ,
"If your brain had a storage limit, would you really waste it on that awkward moment from 2012?" ,
"Meditate like you’re buffering in real life!" ,
"Breathe in... breathe out... congratulations, you’re still alive!" ,
"Your playlist can heal your soul—blast those happy tunes!",
"Talking to yourself is totally normal... unless you start arguing!" ,
"Social media detox: Because comparing your life to strangers is exhausting!" ,
"Drink water. Your brain needs it to function, and so does your skin!" ,
"Write your worries down—then set fire to them (safely, of course!)" ,
"Smile! It tricks your brain into thinking life is great!" ,
"Be the person your dog thinks you are—kind, loving, and awesome!" ,
"Unfollow negativity like it’s an ex you don’t need in your life!" ,
"Dance like a crazy person—endorphins don’t judge!" ,
"Say ‘no’ without guilt. Your peace is worth more than people-pleasing!" ,
"Take breaks. Even superheroes need to recharge!" ,
"Laugh! Your abs get a workout, and your brain gets a vacation!" ,
"Go outside—sunlight is nature’s free therapy!" ,
"If it won’t matter in 5 years, don’t spend more than 5 minutes worrying!" ,
"Crying is just your soul taking a shower—totally okay!" ,
"Be patient with yourself. Even WiFi takes time to load!" ,
"Your worth isn’t measured by productivity. You are valuable just by existing!" ,
"You survived 100% of your bad days so far—keep going!" 
];

const tipDisplay = document.getElementById("tip-display");
const refreshBtn = document.getElementById("refresh-btn");
let lastCategory = "nutrition";  // Store last clicked category

// Add event listeners for category buttons
document.getElementById("nutrition").addEventListener("click", () => updateTips("nutrition", nutritionTips));
document.getElementById("exercise").addEventListener("click", () => updateTips("exercise", exerciseTips));
document.getElementById("mental-health").addEventListener("click", () => updateTips("mental-health", mentalHealthTips));

// Function to update displayed tips
function updateTips(category, tipsArray) {
    lastCategory = category;  // Update last selected category
    tipDisplay.innerHTML = "";  // Clear previous tips

    getRandomTips(tipsArray, 3).forEach(tip => {
        const tipCard = document.createElement("div");
        tipCard.classList.add("tip-card");
        tipCard.innerHTML = `<p>${tip}</p>`;
        tipDisplay.appendChild(tipCard);
    });

    // Highlight active category
    document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("active"));
    document.getElementById(category).classList.add("active");
}

// Function to get unique random tips using Fisher-Yates Shuffle
function getRandomTips(tipsArray, count) {
    let shuffled = [...tipsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Initial display of nutrition tips
updateTips("nutrition", nutritionTips);

// Refresh button to reload tips from the last selected category
refreshBtn.addEventListener("click", () => {
    switch (lastCategory) {
        case "exercise":
            updateTips("exercise", exerciseTips);
            break;
        case "mental-health":
            updateTips("mental-health", mentalHealthTips);
            break;
        default:
            updateTips("nutrition", nutritionTips);
    }
});


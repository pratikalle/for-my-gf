
const smileButton = document.getElementById("smileButton");
const jokeButton = document.getElementById("jokeButton");
const messageBox = document.getElementById("messageBox");

smileButton.addEventListener("click", async function () {

    messageBox.textContent = "Finding a little happiness for you... 💗";

    try {
        const response = await fetch("/get-message");

        if (!response.ok) {
            throw new Error("Could not fetch message");
        }

        const data = await response.json();

        messageBox.textContent = data.message;

    } catch (error) {
        messageBox.textContent = "Sending you a big hug! ❤️";
        console.error(error);
    }

});

jokeButton.addEventListener("click", async function () {

    messageBox.textContent = "Thinking of a terrible joke... 😂";

    try {
        const response = await fetch("/get-joke");

        if (!response.ok) {
            throw new Error("Could not fetch joke");
        }

        const data = await response.json();

        messageBox.textContent = data.joke;

    } catch (error) {
        messageBox.textContent = "Why are you so cute? That's the joke! ❤️";
        console.error(error);
    }

});

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const loveResponse = document.getElementById("loveResponse");

// Make NO button run away
function moveNoButton() {

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = `${Math.max(10, randomX)}px`;
    noButton.style.top = `${Math.max(10, randomY)}px`;
    noButton.style.zIndex = "9999";
}

// Desktop: Run away when mouse approaches
noButton.addEventListener("mouseenter", moveNoButton);

// Mobile: Run away when touched
noButton.addEventListener("touchstart", function (event) {
    event.preventDefault();
    moveNoButton();
}, { passive: false });

// Also prevent clicking NO
noButton.addEventListener("click", function (event) {
    event.preventDefault();
    moveNoButton();
});

// YES button
yesButton.addEventListener("click", function () {
    loveResponse.innerHTML = "I knew it!! ❤️🥹 I love you more! 😘";
});
